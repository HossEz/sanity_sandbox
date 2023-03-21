export default {
    name: 'categories',
    type: 'document',
    title: 'Katogorier',
    fields: [
      {
        name: 'category_title',
        type: 'string',
        title: 'Kategorinavn'
      },
      {
        name: 'category_image',
        type: 'image',
        title: 'Bilde'
      }
    ]
  }
  