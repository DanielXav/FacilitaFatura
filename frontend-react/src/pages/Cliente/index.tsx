import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { ClientePage } from '../../types/cliente';
import Pagination from '../../components/Pagination';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function Cliente() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<ClientePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClienteId, setSelectedClienteId] = useState<number | null>(null);
  const [addedValue, setAddedValue] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/clientes?page=${pageNumber}&size=6&sort=name,asc`)
      .then((response) => {
        const data = response.data as ClientePage;
        setPage(data);
      });
  }, [pageNumber]);

  const handleDeletarCliente = (clienteId: number) => {
    // Fazer uma solicitação DELETE para a API para excluir o cliente pelo ID
    axios
      .delete(`${BASE_URL}/clientes/${clienteId}`)
      .then((response) => {
        if (response.status === 204) {
          // Atualize a página buscando os clientes novamente
          axios
            .get(`${BASE_URL}/clientes?page=${pageNumber}&size=5&sort=name,asc`)
            .then((response) => {
              const data = response.data as ClientePage;
              setPage(data);
            })
            .catch((error) => {
              console.error('Erro ao buscar clientes:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Erro ao deletar cliente:', error);
      });
  };

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const handleOpenModal = (clienteId: number) => {
    setSelectedClienteId(clienteId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClienteId(null);
  };

  const handleAddValue = (value: number) => {
    if (selectedClienteId !== null) {
      axios.post(
        `${BASE_URL}/clientes/${selectedClienteId}/adicionar-valor`, 
        value, 
        { headers: { 'Content-Type': 'application/json' } } 
      )
      .then((response) => {
        
      })
      .catch((error) => {
        console.error('Erro ao adicionar valor:', error);
      });
      handleCloseModal();
    }
};


  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddedValue(Number(e.target.value));
  };

  const handleAddValueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (addedValue !== null) {
      handleAddValue(addedValue);
    }
  };

  return (
    <>
      <h1>Página de Clientes</h1>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <form action="">
          <div className="input-group">
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Pesquisar pelo Nome"
              style={{ background: 'white' }}
            />
            <button className="btn btn-light" type="button" style={{ background: 'white' }}>
              <i className="fas fa-search"></i> {<SearchIcon />}
            </button>
          </div>
        </form>
        <div className="ml-2" style={{ marginLeft: '16px' }}>
          <Link to="/clientes/cadastrar" className="btn btn-primary">
            CADASTRAR
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table rounded text-white table-striped table-hover table-sm">
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
            {page.content.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.name}</td>
                <td> R$ {cliente.total}</td>
                <td>
                  <button className="adicionar-valor" onClick={() => handleOpenModal(cliente.id)}>
                    Inserir
                  </button>
                </td>
                <td>
                  <button className="atualizar-button">Atualizar</button>
                  <button
                    className="deletar-button"
                    onClick={() => handleDeletarCliente(cliente.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Adicionar Valor"
      >
        <h2>Adicionar Valor</h2>
        <form onSubmit={handleAddValueSubmit}>
          <input
            type="number"
            name="valueInput"
            placeholder="Insira o valor"
            onChange={handleValueChange}
          />
          <button type="submit">Adicionar</button>
        </form>
        <button onClick={handleCloseModal}>Fechar</button>
      </Modal>
      <Pagination page={page} onPageChange={handlePageChange} />
    </>
  );
}

export default Cliente;
