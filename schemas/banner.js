export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string'
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string'
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string'
        },
        {
            name: 'largeText',
            title: 'LargeText',
            type: 'string'
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string'
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string'
        }
    ]
}