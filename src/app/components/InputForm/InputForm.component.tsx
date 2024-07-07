import { useState } from "react";
import './InputForm.styles.css';

export type InputFormProps = {
  id: string;
  type: string;
  label: string;
  value: string;
  inputSymbol: string;
  errorMessage: string;
  onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = (props: InputFormProps) => {

  const { id, type, label, value, inputSymbol, errorMessage, onChange } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <label htmlFor={id}>
        {label}
      <div className={`input-container ${id === 'mortgageAmount' ? 'flex-row-reverse' : 'flex-row'} ${errorMessage && 'input-error'}`}>
        <input
          id={id}
          type={type}
          placeholder="0"
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={"remove-autofill-bg"}
          onChange={onChange}
          />
        <span className={`input-symbol ${isFocused ? 'input-symbol-focused' : errorMessage ? 'input-symbol-error' : ''}
        ${id === 'mortgageAmount' ? 'rounded-mortgageAmount' : 'rounded-input-symbol'}
        `}>{inputSymbol}</span>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </label>
  );
};

export default InputForm;