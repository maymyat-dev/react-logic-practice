interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  variant: "primary" | "danger" | "success";
  size: "sm" | "md" | "xl";
    isLoading: boolean;
    children: React.ReactNode;
    className: string;
};

const Button = ({
  variant,
  size,
  isLoading,
  children,
  className,
  ...props
}: ButtonProps) => {
    
    const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
};

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-2 py-2",
  xl: "px-8 py-3 text-lg",
};
  return (
    <div>
      <button
        className={`border border-blue-700 ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </button>
    </div>
  );
};

export default Button;
