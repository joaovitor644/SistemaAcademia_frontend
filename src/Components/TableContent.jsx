import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate
import '../Assets/TableComponent.css'; // Importando o CSS para estilização
import lixoIcon from "../Assets/lixo.png";
import editIcon from "../Assets/editar.png";
import plusIcon from "../Assets/add-64px.png"

const TableComponent = ({ titulo, dados, headers, AddPath, urlView , keyUnique, urlEdit}) => {
  const [busca, setBusca] = useState(''); // Estado para o valor da busca
  const [dadosFiltrados, setDadosFiltrados] = useState(dados); // Estado para os dados filtrados
  const navigate = useNavigate(); // Hook para navegação programática

  // Efeito para filtrar os dados sempre que o valor da busca mudar
  useEffect(() => {
    const resultadosFiltrados = dados.filter((item) =>
      headers.some((header) => {
        const value = item[header.toLowerCase()];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(busca.toLowerCase());
        }
        return String(value).toLowerCase().includes(busca.toLowerCase());
      })
    );
    setDadosFiltrados(resultadosFiltrados);
  }, [busca, dados, headers]);

  // Função para navegar para os detalhes do item
  const handleRowClick = (id) => {
    navigate(urlView+`/${id}`); // Redireciona para a página de detalhes
  };
  const ClickEdit = (id) => {
    navigate(urlEdit+`${id}`); // Redireciona para a página de detalhes
  };

  console.log(keyUnique)
  return (
    <div className="table-container">
      <h2>{titulo}</h2> {/* Título dinâmico */}
      <div className="table-scroll">
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
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Digite uma busca"
                    className="search-input"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)} // Atualiza o estado da busca
                  />
                  <button className="plusButton">
                    <a href={AddPath}>
                      <img className="icon" src={plusIcon} alt="Adicionar" />
                    </a>
                  </button>
                </div>
              </td>
            </tr>
            {dadosFiltrados.map((item) => (
              <tr key={item.id} > {/* Navegação programática ao clicar na linha */}
                {headers.map((header, index) => (
                  <td key={index} onClick={() => handleRowClick(item[keyUnique])}>{item[header.toLowerCase()]}</td> // Dados dinâmicos
                ))}
                <td>
                  <button className="whiteButton"  onClick={() => ClickEdit(item[keyUnique])}>
                    <img src={editIcon} alt="Editar" className="icon" />
                  </button>
                </td>
                <td>
                  <button className="whiteButton">
                    <img src={lixoIcon} alt="Remover" className="icon" />
                  </button>
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
