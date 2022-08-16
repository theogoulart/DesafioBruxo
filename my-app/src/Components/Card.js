function Card(props) {
  var character = props.character;
  var clsNm = "Card " + character.house;

  return (
    <div className={clsNm}>
      <img height="113" width="81" src={character.image}/>
      <div className="Card__info">
        <h2>{character.name}</h2>
        <small>born in {character.dateOfBirth}</small>
        <div>House: {character.house}</div>
        <div>Ancestry: {character.ancestry}</div>
        <br/>
        <div>
          <h3>Wand:</h3>
          <div>Wood: {character.wand.wood}</div>
          <div>Core: {character.wand.core}</div>
          <div>Length: {character.wand.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
