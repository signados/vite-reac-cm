import { useState, useEffect } from 'react';
import Invitation from './Invitation';
import useFetch from '../hooks/useFetch'; 

interface InvitationData {
  nombre: string;
  groups: { invitationgroup: { nombre: string } }[];
  invitationimg: { src: string }[];
}

function Invitations() {
  const [q, setQ] = useState<string>("");
  const [searchParam] = useState<string[]>(['nombre']);
  const [filterParam, setFilterParam] = useState<string>("all");

  const response = useFetch<InvitationData[]>(import.meta.env.VITE_API_INVITATION);
  //console.log(response);

  function search(items: InvitationData[]): InvitationData[] {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        if (filterParam === "all") {
          return (
            item[newItem as keyof InvitationData]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        } else {
          let group = item.groups.filter((g) => {
            return g.invitationgroup.nombre === filterParam;
          });
          if (group.length > 0) {
            return (
              item[newItem as keyof InvitationData]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
            );
          }
        }
      });
    });
  }

  function makeSelect(items: InvitationData[]): void {
    const select = document.querySelector('select');
    const groups: string[] = [];
    items.forEach((item) => {
      item.groups.forEach((g) => {
        if (!groups.includes(g.invitationgroup.nombre)) {
          groups.push(g.invitationgroup.nombre);
        }
      });
    });
    groups.forEach((group) => {
      const option = document.createElement('option');
      option.value = group;
      option.innerHTML = group;
      select?.appendChild(option);
    });
  }

  useEffect(() => {
    if (response && response.data) {
      makeSelect(response.data.flat());
    }
  }, [response]);

  return (
    <>
      <h1>Invitaciones</h1>

      <input 
          type="search" 
          className="shadow rounded p-3 focus:outline-none" 
          name="search-form" 
          id="search-form"        
          placeholder="Buscar..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
      /> 
      <br />
      <select
        name="select"
        className="form-select"
        onChange={(e) => {
          setFilterParam(e.target.value);
        }}
      >
        <option value="all" selected>
          Todas
        </option>
      </select>

      <div className="container-flex d-flex flex-wrap align-items-center">
        {response && response.data && // Verificar que response y response.data no sean null ni undefined
          search(response.data.flat()).map((d, i) => (
            <Invitation src={d.invitationimg[0].src} name={d.nombre} key={i} />
          ))}
      </div>
    </>
  );
}

export default Invitations;
