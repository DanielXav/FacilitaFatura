import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="background-container">
        <img
          src="../../assets/img/finances.svg"
          alt="Imagem de fundo"
          className="background-image"
        />
      </div>
      <div className="content">
        <div className="square-container">
          <h1>Escolha sua opção:</h1>
          <div className="button-container">
            <Link to="/clientes" className="btn btn-primary">
              Ir para Clientes
            </Link>
            <Link to="/faturas" className="btn btn-secondary">
              Ir para Faturas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
