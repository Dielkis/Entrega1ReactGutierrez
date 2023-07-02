import { useState, useEffect } from "react"
import { getProductsbyId } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"






const ItemDetailContainer = () => {

    const [products,setProducts] = useState(null)

    const {itemId} = useParams()

    useEffect( ()=> {

        getProductsbyId(itemId)
        .then((response)=>{
            setProducts(response)
        })
        .catch(()=>{
            console.error('error')
        })
    }, [itemId])


    return (
        <div>
<ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer;