import React, { useState } from 'react';
import animal from '../images/animal.jpg';
import InputAndButton from './smallComponents/InputAndButton';

function AboutMe({
  aboutMeDate, logo, setLogo, logoCopy,
}) {
  const [inputValue, setInputValue] = useState('');
  const { name, lastName, description } = aboutMeDate;

  return (
    <div className="aboutMeContent">
      <div className="imageAndDecription">
        <div className="divImageAboutMe">
          <img src={animal} alt="photo" />
        </div>

        <div className="description">
          <h1>{`${name} ${lastName}`}</h1>
          <p>{`Cześć jestem ${name} ${lastName}. ${description}`}</p>
        </div>
      </div>

      <div className="addLogoTextDiv">
        <InputAndButton
          children1="ADD TEXT TO LOGO"
          children2="CLEAR LOGO"
          className="activeButton"
          disabled1={
            inputValue === '' || logoCopy.length + inputValue.length > 25
          }
          disabled2={logo.length === logoCopy.length}
          onChange={(event) => setInputValue(event.target.value)}
          onClick1={() => {
            setInputValue('');
            setLogo(logoCopy);
            setLogo(`${logoCopy} ${inputValue}`);
          }}
          onClick2={() => setLogo(logoCopy)}
          placeholder={`add text to logo (${25 - logoCopy.length} signs)`}
          value={inputValue}
        />
      </div>

      <div className="divWarningText">
        {logoCopy.length + inputValue.length > 25 && (
          <p>
            {`text is ${
              -25 + logoCopy.length + inputValue.length
            } characters too long`}
          </p>
        )}
      </div>
    </div>
  );
}
export default AboutMe;
