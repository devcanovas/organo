import "./WorkerCard.css"

const WorkerCard = ({ worker, backgroundColor }) => {
    return (
        <div className="worker">
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={worker.imagem} alt='Foto do colaborador' />
            </div>
            <div className="footer">
                <h4>{worker.nome}</h4>
                <h5>{worker.cargo}</h5>
            </div>
        </div>
    )
}

export default WorkerCard