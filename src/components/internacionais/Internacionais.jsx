import React from "react";
import "../internacionais/Internacionais.css";
import imgRoma from "../../Assets/imgs/europa/roma.jpg";
import imgBerlim from "../../Assets/imgs/europa/berlim.jpg";
import imgParis from "../../Assets/imgs/europa/paris.jpg";
import imgLondres from "../../Assets/imgs/europa/londres.jpg";

export default function Internacionais(){
    return(
        <>
            <h1>Roteiros Internacionais</h1>
            <section className="viagensSection">
                <div className="spaceEuropa">
                    <img src={imgRoma} alt="" />
                    <div className="descricaoViagem">
                        <h4>Roma</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, modi, ipsam quos perferendis recusandae autem reiciendis nihil eveniet magni eos obcaecati deserunt odio exercitationem commodi quas, ut ipsum. Mollitia, laborum.</p>
                        <button>Comprar <i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
                <div className="spaceEuropa">
                    <img src={imgParis} alt="" />
                    <div className="descricaoViagem">
                        <h4>Paris</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, modi, ipsam quos perferendis recusandae autem reiciendis nihil eveniet magni eos obcaecati deserunt odio exercitationem commodi quas, ut ipsum. Mollitia, laborum.</p>
                        <button>Comprar <i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
                <div className="spaceEuropa">
                    <img src={imgBerlim} alt="" />
                    <div className="descricaoViagem">
                        <h4>Berlim</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, modi, ipsam quos perferendis recusandae autem reiciendis nihil eveniet magni eos obcaecati deserunt odio exercitationem commodi quas, ut ipsum. Mollitia, laborum.</p>
                        <button>Comprar <i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
                <div className="spaceEuropa">
                    <img src={imgLondres} alt="" />
                    <div className="descricaoViagem">
                        <h4>Londres</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, modi, ipsam quos perferendis recusandae autem reiciendis nihil eveniet magni eos obcaecati deserunt odio exercitationem commodi quas, ut ipsum. Mollitia, laborum.</p>
                        <button>Comprar <i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </section>
        </>
        
    )
}