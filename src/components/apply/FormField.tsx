import type { ComponentType } from "react";
import { ChevronDown } from "lucide-react";

type IconComponent = ComponentType<{ size?: number | string; strokeWidth?: number; className?: string }>;

interface SelectOption {
  value: string;
  label: string;
}

interface BaseProps {
  label: string;
  name: string;
  required?: boolean;
  icon?: IconComponent;
  error?: string;
  className?: string;
}

interface InputFieldProps extends BaseProps {
  as?: "input";
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface SelectFieldProps extends BaseProps {
  as: "select";
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
}

interface TextareaFieldProps extends BaseProps {
  as: "textarea";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

export default function FormField(props: FormFieldProps) {
  const { label, name, required, icon: Icon, error, className = "" } = props;

  const fieldClasses = `w-full rounded-2xl border bg-white/60 backdrop-blur-sm px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:bg-white focus:outline-none ${
    error
      ? "border-rose-300 focus:border-rose-500 focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]"
      : "border-slate-200 focus:border-brand-blue-500 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]"
  } ${Icon ? "pl-11" : ""}`;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={name} className="text-sm font-semibold text-slate-700">
        {label}{" "}
        {required ? (
          <span className="text-orange-500">*</span>
        ) : (
          <span className="font-normal text-slate-400">(Optional)</span>
        )}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 "
          />
        )}

        {props.as === "select" ? (
          <>
            <select
              id={name}
              name={name}
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
              className={`${fieldClasses} appearance-none pr-10 ${props.value ? "" : "text-slate-400"}`}
            >
              <option value="" disabled>
                {props.placeholder ?? `Select ${label}`}
              </option>
              {props.options.map((opt) => (
                <option key={opt.value} value={opt.value} className="text-slate-900">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </>
        ) : props.as === "textarea" ? (
          <textarea
            id={name}
            name={name}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder={props.placeholder}
            rows={props.rows ?? 5}
            className={`${fieldClasses} resize-none`}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={props.type ?? "text"}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder={props.placeholder}
            className={fieldClasses}
          />
        )}
      </div>
      {error && <span className="text-xs font-medium text-rose-500">{error}</span>}
    </div>
  );
}
