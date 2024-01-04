import { useState } from "react"
import Botao from "../Botao"
import Dropdown from "../Dropdown"
import InputText from "../InputText"
import './Form.css'

const Form = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        props.onRegisterWorker({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    isRequired={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={value => setNome(value)} />
                <InputText
                    isRequired={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onChange={value => setCargo(value)} />
                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={value => setImagem(value)} />
                <Dropdown
                    isRequired={true}
                    label="Time"
                    itens={props.teamNames}
                    value={time}
                    onChange={value => setTime(value)} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Form