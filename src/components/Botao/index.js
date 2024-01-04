import './Button.css'

const Botao = (props) => {
    return (
        <button className='button'>{props.children}</button>
    )
}

export default Botao