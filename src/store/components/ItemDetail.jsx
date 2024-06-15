import React from 'react'

export const ItemDetail = ({id, name, description, price, category, navigateBack}) => {
    
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={`/src/assets/items/${ id }.png`} alt={ name } className='img-thumbnail' />
      </div>
      <div className="col-8">
        <h3>{ name }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Descripción:</b> { description }</li>
          <li className="list-group-item"><b>Categoria:</b> { category }</li>
          <li className="list-group-item"><b>Precio: </b> ${ price }</li>
        </ul>
        <button className="btn btn-outline-primary" onClick={ navigateBack }>
          Regresar
        </button>
      </div>
    </div>
  )
}
