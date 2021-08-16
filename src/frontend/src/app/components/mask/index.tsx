import React from "react";
import { Input } from "../../shared/styeld-form";

type HandlePatern = {
  onlyNumber: (string) => string;
  default: (string) => string;
};

type MaskProps = {
  patern?: string | keyof HandlePatern;
  ref?: any;
};

const handles: HandlePatern = {
  onlyNumber: (value) => value.replace(/\D/g, ""),
  default: (value) => value,
};

const Mask: React.FC<
  MaskProps &
    React.InputHTMLAttributes<{
      className?: string;
    }>
> = ({ patern, ref }): JSX.Element => {
  const applyMask = (event) => {
    const result = patern
      ? handles[patern](event.target.value)
      : handles.default(event.target.value);
    event.target.value = result;
  };

  return <Input ref={ref} onChange={applyMask} />;
};

export default Mask;
