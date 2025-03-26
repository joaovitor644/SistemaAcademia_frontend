import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/TableComponent.css'; 
import lixoIcon from "../Assets/lixo.png";
import editIcon from "../Assets/editar.png";
import plusIcon from "../Assets/add-64px.png";

const TableComponent = ({ titulo, dados = [], headers, AddPath, urlView, keyUnique, urlEdit }) => {
  const [busca, setBusca] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState(dados);
  const navigate = useNavigate();

  // Efeito para filtrar os dados sempre que o valor da busca mudar
  useEffect(() => {
    const resultadosFiltrados = Array.isArray(dados) ? dados.filter((item) =>
      headers.some((header) => {
        const value = item[header.toLowerCase()];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(busca.toLowerCase());
        }
        return String(value).toLowerCase().includes(busca.toLowerCase());
      })
    ) : []; // Se dados não for um array, retorna um array vazio

    setDadosFiltrados(resultadosFiltrados);
  }, [busca, dados, headers]);

  // Função para navegar para os detalhes do item
  const handleRowClick = (id) => {
    navigate(urlView + `/${id}`);
  };

  const ClickEdit = (id) => {
    navigate(urlEdit + `${id}`);
  };

  return (
    <div className="table-container">
      <h2>{titulo}</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th>Editar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={headers.length + 2}>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Digite uma busca"
                    className="search-input"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                  <button className="plusButton">
                    <a href={AddPath}>
                      <img className="plusIcon" src={plusIcon} alt="Adicionar" />
                    </a>
                  </button>
                </div>
              </td>
            </tr>
            {dadosFiltrados.length > 0 ? (
              dadosFiltrados.map((item) => (
                <tr key={item[keyUnique]}>
                  {headers.map((header, index) => (
                    <td key={index} onClick={() => handleRowClick(item[keyUnique])}>
                      {item[header.toLowerCase()]}
                    </td>
                  ))}
                  <td>
                    <button className="whiteButton" onClick={() => ClickEdit(item[keyUnique])}>
                      <img src={editIcon} alt="Editar" className="icon" />
                    </button>
                  </td>
                  <td>
                    <button className="whiteButton">
                      <img src={lixoIcon} alt="Remover" className="icon" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length + 2}>Nenhum dado encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
