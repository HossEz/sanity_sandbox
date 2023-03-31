import { useEffect, useState } from 'react'
import { fetchAllCategories } from '../lib/sanity/categoryServices'
import { Link } from 'react-router-dom'

export default function CategoriesPages(){

    const [cats, setCats] = useState(null)

    async function getCategories() {
        const data = await fetchAllCategories()
        setCats(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    console.log(cats)

    return (
        <>
            <h1>Alle Kategorier</h1>
            <ul>
                {cats?.map((c, i) => <li key={`c${i}`}><Link to={c.category_slug.current}>
                {c.category_title}</Link></li>)}
            </ul>
        </>
    );
}