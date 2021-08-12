import React from "react";
import { useState } from "react";
import { Input } from "../../shared/styeld-form";

type MaskProps = {
  partner: string;
};

const Mask: React.FC<MaskProps> = ({ partner }): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const applyMask = ({ target }) => {
    console.log(target);
  };

  return <Input value={value} onChange={applyMask} />;
};

export default Mask;
