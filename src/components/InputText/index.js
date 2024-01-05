import './input-text.css'

const InputText = (props) => {
    const onType = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="input__text">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={onType}
                required={props.isRequired}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputText