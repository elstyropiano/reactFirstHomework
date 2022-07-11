function InputAndButton({
  buttonType,
  children1,
  children2,
  className,
  disabled1,
  disabled2,
  onChange,
  onClick1,
  onClick2,
  placeholder,
  required,
  type,
  value,
}) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        required={required}
      />
      <button
        className={className}
        disabled={disabled1}
        onClick={onClick1}
        type={buttonType}
      >
        {children1}
      </button>
      <button className={className} disabled={disabled2} onClick={onClick2}>
        {children2}
      </button>
    </>
  );
}

export default InputAndButton;
