import './App.css';
import React, { useEffect, useState } from 'react';
import NavButtons from './components/NavButtons';
import Todo from './components/Todo';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Characters from './components/Characters';

function App() {
  const [logo, setLogo] = useState('LOGO');
  const [buttonsName, setButtonsName] = useState([]);
  const [rickyAndMorty, setRickyAndMorty] = useState([]);
  const [aboutMeDate, setAboutMeDate] = useState(null);
  const [list, setList] = useState([]);
  const [clickedButton, setClickedButton] = useState(null);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [logoCopy, setlogoCopy] = useState(logo);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/buttons');
      const data = await response.json();
      setButtonsName(data);
    })();
    (async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setRickyAndMorty(data);
    })();
    (async () => {
      const response = await fetch('http://localhost:3000/personalData');
      const data = await response.json();
      setAboutMeDate(data);
    })();
  }, []);

  return (
    <div>
      <div className="navBar">
        <div className="logo">{logo}</div>
        <NavButtons
          buttonsName={buttonsName}
          setClickedButton={setClickedButton}
          clickedButton={clickedButton}
        />
      </div>
      {clickedButton === 'Todo' && (
        <Todo
          list={list}
          setList={setList}
          setLogo={setLogo}
          logo={logo}
          setlogoCopy={setlogoCopy}
        />
      )}
      {clickedButton === 'About Me' && (
        <AboutMe
          aboutMeDate={aboutMeDate}
          logo={logo}
          setLogo={setLogo}
          logoCopy={logoCopy}
        />
      )}
      {clickedButton === 'Contact' && (
        <Contact
          data={data}
          setData={setData}
          inputValue={inputValue}
          setInputValue={setInputValue}
          textareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
        />
      )}
      {clickedButton === 'Characters' && (
        <Characters rickyAndMorty={rickyAndMorty} />
      )}
    </div>
  );
}

export default App;
