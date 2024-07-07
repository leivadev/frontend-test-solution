import './RadioInputForm.styles.css';

export type RadioInputFormProps = {
    id: string;
    label: string;
    name: string;
    value: string;
    isChecked: boolean;
    onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInputForm = (props: RadioInputFormProps) => {

    const { id, label, name, value, isChecked, onChange } = props;

    return (
        <div className="radio-input-container">
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={id} className="label-radio-input">
                {label}
            </label>
        </div>
    );
};

export default RadioInputForm;