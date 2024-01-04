import WorkerCard from '../WorkerCard'
import './Team.css'

const Team = ({name, primaryColor, secondaryColor, workers, onDelete}) => {
    return (
        workers.length > 0 && <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: secondaryColor }}>
            <input value={secondaryColor} type='color' className='input-color'/>
            <h3 style={{ borderBottomColor: primaryColor }}>{name}</h3>
            <div className='workers'>
                {
                    workers.map((worker) => {
                        console.log('redering worker')
                        return <WorkerCard backgroundColor={primaryColor} key={worker.nome} worker={worker} onDelete={onDelete}/>
                    })
                }
            </div>
        </section>
    )
}

export default Team