import React, { useState } from 'react';
// Definindo a interface para os itens da lista
interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number
}
// Componente de Lista que renderiza itens com base em uma condição
const ItemList: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Apple', price: 35, quantity: 5},
        { id: 2, name: 'Banana', price: 2, quantity: 15},
        { id: 3, name: 'Cherry', price: 105, quantity: 50},
    ]);
    const [showItems, setShowItems] = useState<boolean>(true);
    return (
        <div>
            <h1>Lista de Itens</h1>
            <button onClick={() => setShowItems(!showItems)}>
                {showItems ? 'Esconder Itens' : 'Mostrar Itens'}
            </button>
            {/* Renderização Condicional */}
            {showItems ? (
                <ul>
                    {/* Renderizando a lista de itens */}
                    {items.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>A lista está oculta</p>
            )}
        </div>
    );
};
export function Renderizacao() {
    return (
        <div className='App'>
            <ItemList />
        </div>
    );
}
 