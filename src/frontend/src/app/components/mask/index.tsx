import React from "react";
import { useState } from "react";
import { Input } from "../../shared/styeld-form";

type HandlePartn = {
  onlyNumber: (string) => string;
  default: (string) => string;
};

type MaskProps = {
  patern?: string | keyof HandlePartn;
};

const handles: HandlePartn = {
  onlyNumber: (value) => value.replace(/\D/g, ""),
  default: (value) => value,
};

const Mask: React.FC<
  MaskProps &
    React.InputHTMLAttributes<{
      className?: string;
    }>
> = ({ patern }): JSX.Element => {
  const applyMask = (event) => {
    const result = patern
      ? handles[patern](event.target.value)
      : handles.default(event.target.value);
    event.target.value = result;
  };

  return <Input onChange={applyMask} />;
};

export default Mask;
