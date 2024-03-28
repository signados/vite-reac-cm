interface InvitationProps {
  name: string;
  src: string;
}

function Invitation(props: InvitationProps) {

  return (
    <>
      <div>
        <div>
          <h5>{props.name}</h5>
          <img
            src={import.meta.env.VITE_URL_IMG + props.src}
            alt={props.name}
          />
        </div>
      </div>
    </>
  );
}

export default Invitation;