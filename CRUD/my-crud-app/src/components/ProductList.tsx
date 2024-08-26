import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/api';
import { Link } from 'react-router-dom';
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
}
function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const handleDelete = async (id: string) => {
        await deleteProduct(id);
        loadProducts();
    };

    return (
        <div>
            <h1>Product List</h1>
            <Link to="/add">Add Product</Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price} - {product.quantity} units
                        <Link to={`/edit/${product.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;