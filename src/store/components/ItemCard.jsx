import { Link } from "react-router-dom"

export const ItemCard = ({ id,
        name, 
        category, 
        description,
        price
    }) => {
        const itemImageUrl = `/src/assets/items/${ id }.png`
  return (
    <div className="col">
        <div className="row no-gutters">
            <div className="col-4">
                <img src={itemImageUrl} alt={name} className="card-img" />
            </div>
            <div className="col-8">
                <div className="card-body">

                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ category }</p>
                    <p className="card-text">
                        <small className="text-muted">{ price }</small>
                    </p>

                    <Link to={`/item/${ id }`}>
                        Mas...
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
