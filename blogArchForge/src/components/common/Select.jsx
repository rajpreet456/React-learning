import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  {
    options = [],
    label,
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm font-semibold text-gray-300 pl-1"
        >
          {label}
        </label>
      )}

      <select
        id={id}
        ref={ref} 
        className={`w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-150 ${className}`}
        {...props}
      >
    
        {options?.map((option) => (
          <option 
            key={option.value || option} 
            value={option.value || option}
          >
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;