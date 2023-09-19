import React, { useState, useEffect } from 'react';
import './styles.css';

function Cliente() {
  
  const [clientes, setClientes] = useState([
    { id: 1, name: 'Daniel', total: 506.32 },
    { id: 2, name: 'Maria', total: 732.45 },
    // Outros clientes aqui...
  ]);

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
    <div>
      <h1>Clientes das faturas</h1>
      <table className="clientes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Total</th>
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
  );
}

export default Cliente;
