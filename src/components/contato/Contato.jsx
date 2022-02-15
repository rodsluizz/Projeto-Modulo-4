import React from "react";
import "../contato/Contato.css";
import imgBackground from "../../Assets/imgs/backgroundimage.png";

export default function Contato(){
    return(
    <>
        <section>
            <img src={imgBackground} alt="" />
            <form action="" autoComplete="on" className="formulario__">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" />
                <label for="caixatexto">Deixe uma mensagem:</label>
                <textarea name="caixatexto" id="caixaMensagem" cols="40" rows="10"></textarea>
                <button class="botao">Enviar</button>
            </form>
        </section>
    </>
    )
}