import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';

function Cliente() {
  
  const [clientes, setClientes] = useState([
    { id: 1, name: 'Daniel', total: 506.32 },
    { id: 2, name: 'Maria', total: 732.45 },
    // Outros clientes aqui...
  ]);

  axios.get(`${BASE_URL}/clientes?page=0&size=5&sort=name,asc`)
            .then(response => {
                console.log(response.data);
            });

  const handleAtualizarCliente = () => {
    // Lógica para atualizar o cliente pelo ID
    // Exemplo fictício:
    // atualizarCliente(id)
    //   .then((data) => {
    //     // Atualize a lista de clientes após a operação bem-sucedida
    //     const updatedClientes = clientes.map((cliente) =>
    //       cliente.id === id ? data : cliente
    //     );
    //     setClientes(updatedClientes);
    //   })
    //   .catch((error) => console.error('Erro ao atualizar cliente', error));
  };

  const handleDeletarCliente = () => {
    // Lógica para deletar o cliente pelo ID
    // Exemplo fictício:
    // deletarCliente(id)
    //   .then(() => {
    //     // Remova o cliente da lista após a operação bem-sucedida
    //     const updatedClientes = clientes.filter((cliente) => cliente.id !== id);
    //     setClientes(updatedClientes);
    //   })
    //   .catch((error) => console.error('Erro ao deletar cliente', error));
  };

  return (
    <>
    <h1 >Página de Clientes</h1>
    <div className="d-flex justify-content-center align-items-center mb-2">
      <form action="">
        <div className="input-group">
            <input type="text" name="search" className="form-control" placeholder="Pesquisar pelo Nome" />
            <button className="btn btn-primary mx-2" type="submit">CADASTRAR</button>
        </div>
      </form>
    </div>
    <div className='table-responsive'>
      <table className='table rounded text-white table-striped table-hover table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Total</th>
            <th>Adicionar Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.name}</td>
              <td>{cliente.total}</td>
              <td>
              <button
                  onClick={() => handleAtualizarCliente()}
                  className="adicionar-valor"
                >
                  Inserir
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleAtualizarCliente()}
                  className="atualizar-button"
                >
                  Atualizar
                </button>
                <button
                  onClick={() => handleDeletarCliente()}
                  className="deletar-button"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Cliente;
