import { Link } from "react-router-dom";

export default function ProductCard ({productinfo}) {
    return (
    <article>
        <h2>{productinfo.product_title}</h2>
        <div className="product-info">
            <p>Pris: {productinfo.price} kr</p>
            <p>Lagerstatus: {productinfo.quantity}</p>
            <Link to={productinfo.slug.current} className="linkBtn">Les mer</Link>
        </div>
    </article>
    )
}