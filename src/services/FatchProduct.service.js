export const fetchProduct = async() => {
    const result = await fetch('https://fakestoreapi.in/api/products')
    const data = await result.json()
    return data.products
}