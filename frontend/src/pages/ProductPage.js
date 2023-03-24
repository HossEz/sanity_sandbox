import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProduct } from "../lib/sanity/productServices"

export default function ProductPage() {

    const {slug} = useParams()

    const [product, setProduct] = useState(null)

    const getProduct = async (slug) => {
        const data = await fetchProduct(slug)
        setProduct(data[0])
    }

    useEffect(() => {
        getProduct(slug)
    },[slug])

    console.log(product)

    return(
        <>
            <h1>{product?.product_title}</h1>
            <img src={product?.imageURL} alt="Produktbilde" />
            <p>Kategori: {product?.catname}</p>
            <p>Pris: {product?.price}</p>
        </>
    )
}