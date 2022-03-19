import React, { useEffect, useRef, useState } from "react";
import "../destinos/Destinos.css";
import api from "../../api";

export default function FormCadastro() {

    const id = useRef()
    const localDestino = useRef()
    const paisDestino = useRef()
    const valorViagem = useRef()

    const[destinos, setDestinos] = useState([])

    function enviarCadastro(event){
        event.preventDefault()
        api.post("/destinosviagens", {localDestino: localDestino.current.value,
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
      <div className="divBackgroundDestinos">
        <h2>Cadastro de destinos</h2>
        <form action="" className="formDestinos" onSubmit={enviarCadastro}>
          <label htmlFor="localDestino">Local de destino:</label>
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
