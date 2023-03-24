import {client} from './client'

export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type =="products"]`)
    return data
}
export const fetchProduct = async (slug) => {
    const data = await client.fetch(`
    *[_type == "products" && slug.current == $slug]
    {product_title, price, quantity, "imageURL":image.asset->url, "catname": categories->category_title}
    `,{slug})
    return data
}