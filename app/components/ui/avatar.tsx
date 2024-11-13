import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva("rounded-full overflow-hidden", {
    variants: {
        size: {
            default: "w-10 h-10",
            sm: "w-8 h-8",
            lg: "w-12 h-12",
        },
    },
    defaultVariants: {
        size: "default",
    },
});

export interface AvatarProps
    extends VariantProps<typeof avatarVariants>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> { }

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
    ({ className, size, ...props }, ref) => (
        <AvatarPrimitive.Root
            className={cn(avatarVariants({ size, className }))}
            ref={ref}
            {...props}
        />
    )
);
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(
    ({ className, ...props }, ref) => (
        <AvatarPrimitive.Image
            className={cn("object-cover w-full h-full", className)}
            ref={ref}
            {...props}
        />
    )
);
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(
    ({ className, ...props }, ref) => (
        <AvatarPrimitive.Fallback
            className={cn("flex items-center justify-center bg-gray-200 text-gray-600", className)}
            ref={ref}
            {...props}
        />
    )
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
