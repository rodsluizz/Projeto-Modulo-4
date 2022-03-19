
import React, { useEffect, useRef, useState } from "react";
import "../destinos/Destinos.css";
import api from "../../api";
import FormCadastro from "./FormCadastro";
import FormAtualizacao from "./FormAtualizacao";

export default function Destinos() {

  const id = useRef()
  const localDestino = useRef()
  const paisDestino = useRef()
  const valorViagem = useRef()

  const[destinos, setDestinos] = useState([])

  function deletePedido(id) {
    api.delete(`/destinosviagens/${id}`, {});
    setDestinos(destinos.filter((destino) => destino.id !== id));
  }

  useEffect(() => {
    api.get("/destinosviagens").then(res => setDestinos(res.data)).catch(err => console.log(err))
  }, [])


  return (
    <>
    <section className="sectionCadastrosEAtualizacoes">

      <FormCadastro/>

      <FormAtualizacao/>

    </section> 
      
      <h3 className="tituloTabela">Cards de destinos cadastrados</h3>

      <section className="sectionDestinosCadastrados">
        {destinos.map(destino => (
          <div data-aos="flip-left" data-aos-duration="1000">
            <div className="cardsDestinosCadastrados" key={destinos.id}>
            <h3>{destino.localDestino}</h3>
            <h4>{destino.paisDestino}</h4>
            <h4>R$ {destino.valorViagem}</h4>
            <h6>Id: {destino.id}</h6>
            <i class="fas fa-trash-alt fa-lg" onClick={() => deletePedido(destino.id)}></i>
        </div>
          </div>
        ))}
      </section>
    </>
  );
}
