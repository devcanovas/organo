import "./worker-card.css";
import { AiTwotoneCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const WorkerCard = ({ worker, backgroundColor, onDelete, onFavorite }) => {
    const propsFavorites = {
        size: 25,
        onClick: onFavorite(worker.id)
    }
    return (
        <div className="worker">
            <AiTwotoneCloseCircle size={25} className="delete" onClick={() => onDelete(worker.id)} />
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={worker.imagem} alt='Foto do colaborador' />
            </div>
            <div className="footer">
                <h4>{worker.nome}</h4>
                <h5>{worker.cargo}</h5>
                <div className="favorite">
                    {
                        worker.isFavorite
                            ? <AiFillHeart {...propsFavorites} color="#ff0000" />
                            : <AiOutlineHeart {...propsFavorites}  />
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkerCard