import react, { forwardRef, useId } from "react";

const Input = forwardRef(function Input ({
    label,
    type = 'text',
    className ="",
    ...props
}, ref  ) {
    const id = useId();
    return (
        <div className ="w-full">
            {label && <label 
            className="block text-sm font-medium text-gray-700 mb-1">
            htmlFor= {id}
            {label}
            </label>}  
        }
    <input
    id={id}
    type={type} 
    className={`w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
    ref={ref}
    {...props}
    id = {id}
    />
        </div>
    )
} )

export default Input;