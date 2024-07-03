interface InvitationProps {
  name: string;
  src: string;
}

function Invitation(props: Readonly<InvitationProps>) {

  return (
    <div className="w-full sm:basis-1/2 md:basis-1/3 p-6">
          <h5>{props.name}</h5>
          <img
            src={import.meta.env.VITE_URL_IMG + props.src}
            alt={props.name}
          />
    </div>
  );
}

export default Invitation;