function ItemDetail({ title, price, category }) {
    return (
      <div>
        <h2>{title}</h2>
        <p>Categoría: {category}</p>
        <p>Precio: ${price}</p>
        <button>Agregar al carrito</button>
      </div>
    )
  }
  
  export default ItemDetail
  