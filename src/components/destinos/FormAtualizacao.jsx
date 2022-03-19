import React, { useEffect, useRef, useState } from "react";
import "../destinos/Destinos.css";
import api from "../../api";

export default function FormAtualizacao() {

    const id = useRef()
    const localDestino = useRef()
    const paisDestino = useRef()
    const valorViagem = useRef()

    const[destinos, setDestinos] = useState([])

    function atualizarCadastro(event) {
        event.preventDefault();
        console.log(id ,localDestino, paisDestino, valorViagem)
        api.put('/destinosviagens/', {
          id: id.current.value,
          localDestino: localDestino.current.value,
          paisDestino: paisDestino.current.value,
          valorViagem: valorViagem.current.value
          }).then(res => window.location.reload())
          .catch(err => console.log(err))
        }

        useEffect(() => {
            api.get("/destinosviagens").then(res => setDestinos(res.data)).catch(err => console.log(err))
          }, [])

  return (
    <>
      <div className="divBackgroundDestinos" onSubmit={atualizarCadastro}>
        <h2>Atualização de cadastros</h2>
        <form action="" className="formDestinos">
          <label htmlFor="localDestino">Id:</label>
          <input type="text" id="localDestino" name="localDestino" ref={id} />

          <label htmlFor="localDestino">Local de Destino:</label>
          <input
            type="text"
            id="localDestino"
            name="localDestino"
            ref={localDestino}
          />

          <label htmlFor="paisDestino">País de destino:</label>
          <input
            type="text"
            id="paisDestino"
            name="paisDestino"
            ref={paisDestino}
          />

          <label htmlFor="valorViagem">Valor da viagem:</label>
          <input
            type="number"
            id="valorViagem"
            name="valorViagem"
            ref={valorViagem}
          />

          <input type="submit" value="Enviar" className="botao"></input>
        </form>
      </div>
    </>
  );
}
