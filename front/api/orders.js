import req from './request'

let mainUrl = '/orders'

// fields - { firstName, lastName, phone}
// products - [..., { productId, productCount }]
export function makeOrder(fields, products) {
    return req.post(mainUrl, {
        firstName: fields.firstName,
        lastName: fields.lastName,
        phone: fields.phone,
        products
    })
}
