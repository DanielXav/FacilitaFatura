import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

function FormCliente() {
    const [valor, setValor] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = e.target.value;

        // Remova todos os pontos do valor e mantenha apenas os dígitos
        const numericValue = inputValue.replace(/\./g, '');

        // Use uma expressão regular para adicionar o ponto decimal após os dois últimos dígitos
        const formattedValue = numericValue.replace(
            /^(\d*)(\d{2})$/,
            '$1.$2'
        );

        setValor(formattedValue);
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
                                <button type="button" className="btn btn-primary mx-2">
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
