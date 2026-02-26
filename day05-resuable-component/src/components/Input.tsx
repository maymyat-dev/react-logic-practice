import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full mb-3"> 
        {label && (
          <label className="text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={`border p-2 rounded outline-none transition-all focus:ring-2 
          ${error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"} 
          ${className}`}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500 italic font-medium">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
