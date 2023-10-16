import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/requests';
import axios from 'axios';

function FormCliente() {
    const [valor, setValor] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = e.target.value;

        const numericValue = inputValue.replace(/\./g, '');

        const formattedValue = numericValue.replace(
            /^(\d*)(\d{2})$/,
            '$1.$2'
        );

        setValor(formattedValue);
    };

    const handleSubmit = async () => {
        try {

            const nomeInput = document.getElementById('nome') as HTMLInputElement;

            if (nomeInput) {

                const data = {
                    name: nomeInput.value,
                    total: parseFloat(valor.replace(',', '.'))
                };

            await axios.post(`${BASE_URL}/clientes`, data);

            window.location.href = '/clientes';
            }
            else {
                console.error('Elemento não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao realizar o POST:', error);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2>Novo Cliente</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nome" className="form-label">Nome:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="valor">Valor:</label>
                                <input
                                    type="text"
                                    id="valor"
                                    className="form-control"
                                    name="valor"
                                    value={valor}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="text-center">
                                <button type="button"
                                    className="btn btn-primary mx-2"
                                    onClick={handleSubmit}>
                                    Salvar
                                </button>
                                <Link to="/clientes" className="btn btn-danger">
                                    Cancelar
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormCliente;
