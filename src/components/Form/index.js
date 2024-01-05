import { useState } from "react"
import Botao from "../Botao"
import Dropdown from "../Dropdown"
import InputText from "../InputText"
import './form.css'
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        props.onRegisterWorker({
            id: uuidv4(),
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
    const onSaveTeam = (event) => {
        event.preventDefault();
        props.onRegisterTeam({
            id: uuidv4(),
            name: nomeTime,
            color: corTime
        })
        setNomeTime('');
        setCorTime('');
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
            <form onSubmit={onSaveTeam}>
                <h2>Preencha os dados para criar um novo time</h2>
                <InputText
                    isRequired={true}
                    label="Nome do time"
                    placeholder="Digite o nome do time"
                    value={nomeTime}
                    onChange={value => setNomeTime(value)} />
                <InputText
                    isRequired={true}
                    label="Cor do time"
                    placeholder="Digite a cor do time"
                    value={corTime}
                    onChange={value => setCorTime(value)} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Form