import './Card.scss';
function Card({character}) {

  return (
    <div className="card">
        <h3>{character.name}</h3>
        <img src={character.img} alt={character.name}/>
    </div>
  );
}

export default Card;