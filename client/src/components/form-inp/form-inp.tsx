
import { InputHTMLAttributes, FC } from "react";

import './form-inp.css';

type FromInputProps = { label: string } &
  InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FromInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      
      {
        label &&
        <div className="form-input-label">
          {label}
        </div>
      }
      <input {...otherProps} />
    </div>
  );
}

export default FormInput;
