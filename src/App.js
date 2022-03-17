import './style.css';
import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [nome, setNome] = useState('');
  const [mensagem, SetMensagem] = useState('');

  function calcularImc() {
    const alt = altura / 100;
    const calculo = peso / (alt * alt);

    if (calculo < 18.5) {
      SetMensagem(`Olá ${nome}. \n Seu IMC: ${calculo.toFixed(2)} - Você está abaixo do peso ideal!`)
    }
    else if (calculo >= 18.5 && calculo <= 24.9) {
      SetMensagem(`Olá ${nome}. \n Seu IMC: ${calculo.toFixed(2)} - Você está no seu peso normal!`)
    }
    else if (calculo <= 29.9) {
      SetMensagem(`Olá ${nome}. \n Seu IMC: ${calculo.toFixed(2)} - Você está acima do peso!`)
    }
    else if (calculo <= 34.9) {
      SetMensagem(`Olá ${nome}. Seu IMC: ${calculo.toFixed(2)} - Você está com Obesidade Grau I`)
    }
    else if (calculo <= 39.9) {
      SetMensagem(`Olá ${nome}. \n Seu IMC: ${calculo.toFixed(2)} - Você está com Obesidade Grau II.`)
    }
    else if (calculo >= 40) {
      SetMensagem(`Olá ${nome}. \n Seu IMC: ${calculo.toFixed(2)} - Você está com Obesidade Grau III.`)
    }
  }

  return (
    <div className="App">
      <div className="app">
        <div className='imagem'>
          <img src="./balanca.png" alt="" />
        </div>
        <h1> Calculadora de IMC</h1>
        <span>Vamos calcular seu IMC<br />Preencha suas informações abaixo</span>

        <div className="area-input">
          <input className='inputText1' type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <div className='inputButton'>
            <input className='but' type="radio" value="male" name='gender' />Masculino
            
            <input className='but' type="radio" value="female" name='gender' />Feminino
           
          </div>
          <input className='inputText2' type="text"
            placeholder="Peso em kg - Ex:90"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input className='inputText3' type="text"
            placeholder="Altura em cm - Ex:175"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />

          <button onClick={calcularImc}>
            Calcular
          </button>
        </div>
        <h2>{mensagem}</h2>

      </div>
    </div>
  );
}


