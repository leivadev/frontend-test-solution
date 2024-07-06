import './RadioInputForm.styles.css';

export type RadioInputFormProps = {
    id: string;
    label: string;
    name: string;
    isChecked: boolean;
    onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInputForm = (props: RadioInputFormProps) => {

    const { id, label, name, isChecked, onChange } = props;

    return (
        <div className="radio-input-container">
            <input
                id={id}
                type="radio"
                name={name}
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