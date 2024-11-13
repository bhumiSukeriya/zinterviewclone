import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
    "rounded-lg shadow-lg border bg-background p-4",
    {
        variants: {
            variant: {
                default: "bg-white border-gray-200",
                outlined: "bg-white border border-gray-300",
                shadowed: "bg-white shadow-md",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <div className={cn(cardVariants({ variant, className }))} ref={ref} {...props} />
        );
    }
);
Card.displayName = "Card";

export { Card, cardVariants };
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
      return <div className={cn("p-4", className)} ref={ref} {...props} />;
    }
  );
  CardContent.displayName = "CardContent";
  
  export { CardContent };
  