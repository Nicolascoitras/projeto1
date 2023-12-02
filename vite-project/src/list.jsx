import React from "react";

const Lista = ({ itens }) => {
  return (
    <>
      {itens.length > 0 ? (
        itens.map((item, index) => (
          <div id={item.id}   key={index}>
            <h3> {item.nome}</h3>
            <p>Preço - R${item.preco}</p>
            <img src={item.img} alt="" />
          </div>
        ))
      ) : (
        <p>Não há itens na lista</p>
      )}
    </>
  );
};

export default Lista;
