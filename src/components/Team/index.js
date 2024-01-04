import WorkerCard from '../WorkerCard'
import './Team.css'

const Team = ({name, primaryColor, secondaryColor, workers}) => {
    return (
        (workers.length > 0) && <section className='team' style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderBottomColor: primaryColor }}>{name}</h3>
            <div className='workers'>
                {
                    workers.map((worker) => <WorkerCard backgroundColor={primaryColor} key={worker.nome} worker={worker} />)
                }
            </div>
        </section>
    )
}

export default Team