import "./WorkerCard.css";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const WorkerCard = ({ worker, backgroundColor, onDelete }) => {
    return (
        <div className="worker">
            <AiTwotoneCloseCircle size={25} className="delete" onClick={() => onDelete(worker.id)} />
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