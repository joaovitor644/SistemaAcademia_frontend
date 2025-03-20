import React, { useState, useEffect } from 'react';
import '../Assets/TableComponent.css'; // Importando o CSS para estilização
import lixoIcon from "../Assets/lixo.png";
import editIcon from "../Assets/editar.png";

const TableComponent = ({ titulo, dados, headers }) => {
  const [busca, setBusca] = useState(''); // Estado para o valor da busca
  const [dadosFiltrados, setDadosFiltrados] = useState(dados); // Estado para os dados filtrados

  // Efeito para filtrar os dados sempre que o valor da busca mudar
  useEffect(() => {
    const resultadosFiltrados = dados.filter((item) =>
      headers.some((header) =>
        item[header.toLowerCase()].toLowerCase().includes(busca.toLowerCase())
      )
    );
    setDadosFiltrados(resultadosFiltrados);
  }, [busca, dados, headers]);

  return (
    <div className="table-container">
      <h2>{titulo}</h2> {/* Título dinâmico */}
      <div  className="table-scroll">
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                <th key={index}>{header}</th> // Cabeçalhos dinâmicos
                ))}
                <th>Editar</th> {/* Coluna de edição */}
                <th>Remover</th> {/* Coluna de remoção */}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colSpan={headers.length + 2}> {/* Colspan dinâmico */}
                <input
                    type="text"
                    placeholder="Digite uma busca"
                    className="search-input"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)} // Atualiza o estado da busca
                />
                </td>
            </tr>
            {dadosFiltrados.map((item) => (
                <tr key={item.id}>
                {headers.map((header, index) => (
                    <td key={index}>{item[header.toLowerCase()]}</td> // Dados dinâmicos
                ))}
                <td>
                    <img src={editIcon} alt="Editar" className="icon" />
                </td>
                <td>
                    <img src={lixoIcon} alt="Remover" className="icon" />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;