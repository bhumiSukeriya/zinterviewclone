import { utils } from '@/lib/utils';

const Input = () => {
    // your input component code here
};

export default Input; import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
    "rounded-md border border-input text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            size: {
                default: "h-10 px-4",
                sm: "h-8 px-3",
                lg: "h-12 px-5",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, size, ...props }, ref) => {
        return (
            <input
                className={cn(inputVariants({ size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input, inputVariants };

