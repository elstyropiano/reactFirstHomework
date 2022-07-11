import React, { useState } from 'react';
import InputAndButton from './smallComponents/InputAndButton';

function Todo({
  setLogo, logo, list, setList, setlogoCopy,
}) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="todoDiv">
      <div className="changeLogoDiv">
        <button
          onClick={() => {
            setLogo(logo === 'LOGO' ? 'NEW LOGO' : 'LOGO');
            setlogoCopy(logo === 'LOGO' ? 'NEW LOGO' : 'LOGO');
          }}
        >
          CHANGE LOGO
        </button>
      </div>

      <div className="divTodoInputAndButton">
        <InputAndButton
          children1="+"
          children2="CLEAR FIELD"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="add Element to list"
          value={inputValue}
          className="activeButton"
          disabled1={inputValue === ''}
          disabled2={inputValue === ''}
          onClick1={() => {
            if (inputValue === '') return;
            setList([...list, inputValue]);
            setInputValue('');
          }}
          onClick2={() => setInputValue('')}
        />
      </div>

      <div className="listTodo">
        <ul>
          {list.map((listElement, index) => (
            <li key={index}>
              {listElement}
              <div className="divForDeleteButtonFromList">
                <button
                  onClick={() => {
                    const newList = [...list];
                    newList.splice(index, 1);
                    setList(newList);
                  }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {list.length !== 0 && (
        <div>
          <button
            className="activeButton"
            onClick={() => {
              setList([]);
            }}
          >
            CLEAR LIST
          </button>
        </div>
      )}
    </div>
  );
}

export default Todo;
