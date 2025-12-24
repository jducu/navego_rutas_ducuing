import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../data/products"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === itemId))
      }, 1000)
    })

    getItem.then(data => setItem(data))
  }, [itemId])

  return (
    <div>
      {item && <ItemDetail {...item} />}
    </div>
  )
}

export default ItemDetailContainer
