import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, { placeholder: string }>(
  ({ placeholder }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className="px-4 py-2 border rounded m-2"
      />
    );
  }
);