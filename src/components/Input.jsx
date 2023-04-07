function EmailInput({
  placeholder,
  errorMessage,
  state,
  label,
  type,
  id,
  onChange,
  value,
  className,
  disabled,
}) {
  return (
    <label htmlFor={id} className='flex flex-col'>
      {label}
      <input
        data-testid='email-input'
        state={state}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        className={`py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          disabled ? "bg-gray-100" : "bg-white"
        } ${className}`}
      />
      {state ? null : <p>{errorMessage}</p>}
    </label>
  );
}

export default EmailInput;
