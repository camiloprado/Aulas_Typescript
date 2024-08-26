import { useState, useEffect } from 'react';
function UserList() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar os usuários:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Carregando usuários...</p>;
    }
    
    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map(user => (
                    <li key={user}>|{user.name} --- {user.email}|</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;