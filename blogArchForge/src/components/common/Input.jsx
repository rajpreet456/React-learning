import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
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

     
      <input
        id={id}
        type={type}
        ref={ref} // 👈 We attach the parent's ref directly to the native element
        className={`w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-150 ${className}`}
        {...props} 
      />
    </div>
  );
});

export default Input;