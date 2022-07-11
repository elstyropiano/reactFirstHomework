import InputAndButton from './smallComponents/InputAndButton'

function Contact({
  data,
  inputValue,
  setData,
  setInputValue,
  setTextareaValue,
  textareaValue,
}) {
  const showDataForm = () => {
    setData({
      ...data,
      inputValue,
      textareaValue,
    })
    setInputValue('')
    setTextareaValue('')
  }

  const showDataFromEmail = (event) => setInputValue(event.target.value)
  const showDataFromTextArea = (event) => setTextareaValue(event.target.value)

  return (
    <div className="contactDiv">
      <form onSubmit={showDataForm} method="GET">
        <div>
          <div>
            <textarea
              maxLength="1000"
              onChange={showDataFromTextArea}
              placeholder="Write message"
              required
              value={textareaValue}
            />
          </div>
          <div className="divUnderTextarea">
            <InputAndButton
              buttonType="submit"
              children1="SEND MESSAGE"
              children2="CLEAR FIELD"
              disabled1={inputValue === '' || textareaValue === ''}
              disabled2={inputValue === '' && textareaValue === ''}
              className="activeButton"
              placeholder="adress email"
              required
              type="email"
              value={inputValue}
              onChange={showDataFromEmail}
              onClick2={() => {
                setInputValue('')
                setTextareaValue('')
              }}
            />
          </div>
        </div>
      </form>
      <div className="divForMessage">
        {Object.keys(data).length !== 0 && (
          <div>
            <div>
              <span>User:</span>
              {` ${data.inputValue}`}
            </div>
            <div>
              <span>Message:</span>
              {` ${data.textareaValue}`}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
