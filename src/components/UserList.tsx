import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import './UserList.css';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Resposta de rede não está funcionando ');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Falha ao buscar usuário');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default UserList;
