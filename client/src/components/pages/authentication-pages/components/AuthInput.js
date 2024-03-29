export default function AuthInput(props) {
  const { type, label, value, onChange } = props;
  return (
    <div>
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-gray-900 text-left"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          autoComplete={type}
          value={value}
          onChange={onChange}
          required
          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
