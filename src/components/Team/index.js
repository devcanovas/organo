import hexToRgba from 'hex-to-rgba'
import WorkerCard from '../WorkerCard'
import './Team.css'

const Team = ({id, name,  color, workers, onDelete, onChangeTeamColor}) => {
    return (
        workers.length > 0 && <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(color, '0.5') }}>
            <input value={color} onChange={event => {onChangeTeamColor(event.target.value, id)}} type='color' className='input-color'/>
            <h3 style={{ borderBottomColor: color }}>{name}</h3>
            <div className='workers'>
                {
                    workers.map((worker) => {
                        return <WorkerCard backgroundColor={color} key={worker.nome} worker={worker} onDelete={onDelete}/>
                    })
                }
            </div>
        </section>
    )
}

export default Team