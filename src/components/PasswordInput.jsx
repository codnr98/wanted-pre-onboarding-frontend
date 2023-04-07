function PasswordInput({
  errorMessage,
  state,
  id,
  onChange,
  value,
  className,
  disabled,
}) {
  return (
    <label htmlFor={id} className='flex flex-col'>
      {"Password"}
      <input
        data-testid='password-input'
        state={state}
        placeholder='Password'
        onChange={onChange}
        type='password'
        id={id}
        value={value}
        className={`py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          disabled ? "bg-gray-100" : "bg-white"
        } ${className}`}
      />
      {state ? null : <p className='text-red-500 text-sm'>{errorMessage}</p>}
    </label>
  );
}

export default PasswordInput;
