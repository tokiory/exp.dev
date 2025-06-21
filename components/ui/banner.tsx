import { Icon } from "@iconify/react";
import { cva, VariantProps } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";

const bannerVariants = cva("outline text-sm rounded-md px-3 py-2", {
  variants: {
    variant: {
      default: "bg-stone-50 text-stone-900 outline-stone-600",
      success: "bg-lime-50 outline-lime-600 text-lime-900",
      warning: "bg-yellow-50 outline-yellow-600 text-yellow-900",
      error: "bg-rose-50 outline-rose-600 text-rose-900",
      info: "bg-sky-50 outline-sky-600 text-sky-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props extends VariantProps<typeof bannerVariants> {
  className?: string;
  icon?: string;
  title?: string;
}

export const Banner: FC<PropsWithChildren<Props>> = ({
  variant = "default",
  className,
  children,
  icon,
  title,
}) => {
  return (
    <div className={bannerVariants({ variant, className })}>
      {title && (
        <div className="flex items-center gap-1">
          {icon && <Icon icon={icon} />}
          <div className="font-semibold">{title}</div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
