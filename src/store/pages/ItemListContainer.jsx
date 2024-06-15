import { useParams } from "react-router-dom";
import { ItemList } from "../components"

export const ItemListContainer = () => {
  const { catName } = useParams();
  return (
    <>
      <h1>{ catName }</h1>
      <hr />
      
      <ItemList category={catName} />
    </>
  )
}
