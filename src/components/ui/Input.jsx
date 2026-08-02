export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  options,
  rows = 5,
  required = false,
}) {
  const baseClasses =
    "w-full rounded-lg border border-brown-900/15 bg-white px-4 py-2.5 font-body text-sm text-brown-900 placeholder:text-brown-900/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow";

  return (
    <div>
      <label
        htmlFor={name}
        className="block font-body text-sm font-medium text-brown-900 mb-1.5"
      >
        {label}
      </label>

      {type === "textarea" && (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={baseClasses}
        />
      )}

      {type === "select" && (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
        >
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {type !== "textarea" && type !== "select" && (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
}