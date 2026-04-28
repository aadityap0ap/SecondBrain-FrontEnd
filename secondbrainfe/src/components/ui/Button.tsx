import type { ReactElement } from "react";

interface ButtonProps {
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon ? : ReactElement;
    endIcon ? : ReactElement;
    onClick ? : () => void;
}

const variantStyle = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-400"
}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6",

}

const defaultStyles = "px-2 py-2 rounded-md font-light flex items-center";

export const Button = (props : ButtonProps) => {
    return <button onClick={props.onClick} className={` ${variantStyle[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} 
        {props.endIcon}
        </button>
}