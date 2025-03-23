
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 focus:outline-none";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:scale-[0.98] shadow-sm",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/5 active:scale-[0.98]",
    ghost: "bg-transparent text-primary hover:bg-primary/5 active:scale-[0.98]"
  };
  
  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
