import React from "react";
import Lista from "../list.jsx"
import "./Products.css"

const minhaLista = [{
    id:1,
    nome:"Smartphone",
    categoria:"Eletronico",
    preco:999.99
},
{
   id:2,
   nome:"Geladeira",
   categoria:"Eletrodomestico",
    preco: 2999.99,
    img:"'../assets/777.png'"
}
]

const Products = () => {
return(
<>

<div><h1>Produtos</h1>
<ul id="ul">
<Lista itens={minhaLista} />
  
</ul>
</div>

</>


)

}

export default Products