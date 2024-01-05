import './drop-down.css'

const Dropdown = (props) => {
    const onSelect = (event) => {
        props.onChange(event.target.value)
    }
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={onSelect} required={props.isRequired} value={props.value} >
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown