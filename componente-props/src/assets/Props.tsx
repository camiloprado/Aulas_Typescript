import React from 'react';
// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;
  endereco: string;
  cidade: string;
}
// Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({ name, age, endereco, cidade }) => {
  return (
    <div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old. Endereço {endereco}. Cidade {cidade}</p>
    </div>
    );
};

export function Props() {
  return (
    <div className='App'>
    <Welcome name='Alice' age={25} endereco='Rua das Poncianas' cidade='Americana'/>
    <Welcome name='Bob' age={30} endereco='Avenida Brasil' cidade='Franca'/>
    <Welcome name='Charlie' age={35} endereco='Liberdade' cidade='São Paulo'/>
    </div>
  );
}
