import React, { ChangeEvent, useState } from "react";
import {
  InputBox,
  Error,
  Typography2,
  InputField,
} from "./Input.style";

interface IProps {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | null | any;
  onChange?: (event: any) => void;
  onKeyPress?: (event: any) => void;
  onBlur?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  error?: any;
  icon?: boolean;
  required?: boolean;
  customCSSClass?: string;
  width?: string;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
  fontSize?: any;
  height?: any;
  top?: any;
}

const Input = (props: IProps) => {
  const {
    name,
    label,
    placeholder,
    onChange,
    error,
    value,
    id,
    onBlur,
    icon,
    required,
    customCSSClass,
    width,
    style,
    disabled,
    onKeyPress,
    loading,
    fontSize,
    height,
    top,
  } = props;

  return (
    <InputBox error={error} width={width} height={height}>
      <InputField
        //className={icon ? "w80" : "fluid"}
        placeholder={placeholder}
        type={"text"}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        onKeyPress={onKeyPress}
      />
    </InputBox>
  );
};
export default Input;
