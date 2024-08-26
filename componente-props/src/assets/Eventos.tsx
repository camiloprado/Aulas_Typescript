import React, { useState } from 'react';
const EventHandlingExample: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [inputValueName, setInputValueName] = useState<string>('');
    const [clickCount, setClickCount] = useState<number>(0);

    // Função para manipular mudanças no campo de entrada
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueName(event.target.value);
    };

    // Função para manipular cliques no botão
    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
    };

    const handleButtonClickMinus = () => {
        setClickCount(clickCount - 1);
    };

    return (
        <div>
            <div>
                <h1>Exemplo de Manipulação de Eventos</h1>
            </div>
            <div>
                <label htmlFor='inputField'>Digite algo: </label>
                <input
                    type='text'
                    id='inputField'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <p>Você digitou: {inputValue}</p>
            </div>
            <div>
                <label htmlFor='inputField'>Digite seu nome: </label>
                <input
                    type='text'
                    id='inputField'
                    value={inputValueName}
                    onChange={handleInputChangeName}
                />
                <p>Seu nome: {inputValueName}</p>
            </div>
            <div>
                <button onClick={handleButtonClick}>
                +
                </button>
            </div>
            <div>
                <p>{clickCount}</p>
                <button onClick={handleButtonClickMinus}>
                -
                </button>
            </div>
        </div>
    );
};

export function Eventos() {
    return (
        <div className='App'>
        <EventHandlingExample />
        </div>
    );
}
