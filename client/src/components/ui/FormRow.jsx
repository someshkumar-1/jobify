export default function FormRow({
  type,
  name,
  handleChange,
  labelText,
  value,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-gray-600">
        {labelText || name}
      </label>
      <input
        type={type}
        onChange={handleChange}
        className="mt-2 p-2 w-full border text-gray-600  rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        name={name}
        value={value}
      />
    </div>
  );
}
