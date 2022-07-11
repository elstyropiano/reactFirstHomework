function NavButtons({ buttonsName, setClickedButton, clickedButton }) {
  return (
    <div className="divForButtons">
      {buttonsName.map(({ name, id, color }) => (
        <button
          style={{
            backgroundColor: clickedButton === name ? color : '#e0dedb',
          }}
          className="navButton"
          key={id}
          onClick={() => setClickedButton(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default NavButtons;
