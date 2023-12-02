"use client";

import React from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { TextareaClass } from "../ui/textarea";

interface Props {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  autoComplete?: string;
  value?: string;
  rows?: number;
}

const TextArea: React.FC<Props> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  autoComplete,
  rows,
  value,
}) => {
  return (
    <div className="mt-2 mb-4">
      <label htmlFor={id} className={"text-sm text-gray-900"}>
        {label}
      </label>
      <div className="mt-2">
        <textarea
          rows={rows || 4}
          id={id}
          value={value}
          autoComplete={autoComplete}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            TextareaClass,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default TextArea;
