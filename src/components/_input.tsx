import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input: React.FC<InputProps> = ({ label, className, ...rest }) => {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <label htmlFor="value" className="font-bold">
          {label}
        </label>
      )}
      <input
        className={cn(
          "bg-white w-full h-[48px] rounded-md border-2 border-azul-claro px-4 text-text-field focus:ring-blue-500",
          className
        )}
        {...rest}
      />
    </div>
  );
};
