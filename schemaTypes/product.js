export default {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre general del producto',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Imagen del producto',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'variants',
      title: 'Variantes del producto',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'code', title: 'Código', type: 'string' },
            { name: 'description', title: 'Descripción específica', type: 'string' },
            { name: 'price', title: 'Precio', type: 'number' },
            {
              name: 'promocion',
              title: '¿Promoción destacada?',
              type: 'boolean',
              description: 'Marca esta variante para destacarla como promoción (sin descuento automático).'
            }
          ]
        }
      ]
    }
  ]
}
