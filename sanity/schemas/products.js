export default {
    name: 'products',
    title: 'Produkter',
    type: 'document',
    fields: [
        {
            name: 'product_title',
            title: 'Produktnavn',
            type: 'string'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'product_title',
                slugify: input => input
                .toLowerCase()
                .replace(/[^\w]+/g, '-')
                .slice(0,150)
            }
        },
        {
            name: 'price',
            title: 'Pris',
            type: 'number'
        },
        {
            name: 'quantity',
            title: 'Antall',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Bilde',
            type: 'image'
        },
        {
          name: 'categories',
          title: 'Kategori',
          type: 'reference',
          to: [{ type: 'categories' }]
        }
    ]
}