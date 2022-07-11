function Characters({ rickyAndMorty }) {
  return (
    <div className="charactersMainWrapper">
      {rickyAndMorty.results.map(({
        id, image, name, status, species,
      }) => (
        <div key={id} className="singleCharacterWrapper">
          <img src={image} alt={name} className="imgApi" />
          <div className="dataUnderApiImg">
            <div>
              <h1>{name}</h1>
              {' '}
            </div>
            <div>
              <span>Status:</span>
              {status}
            </div>
            <div>
              <span>Species:</span>
              {species}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
