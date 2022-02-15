import React from "react";
import "../nacionais/Nacionais.css";
import MediaCard from "./MediaCard";


export default function Nacionais(){
    return(
        <>
           <h1 className="titulo__">Melhores Ofertas Nacionais</h1>
           <div className="cards__">
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
                <MediaCard></MediaCard>
           </div>
           <section className="section__">
               <div className="div__">
                   <h2 className="tituloSection">Viáji <i class="fas fa-suitcase-rolling"></i></h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="cardss__">
                    <h4>Maravilhas do Brasil</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nesciunt. Dicta odit soluta quis aut quam atque blanditiis facere ducimus. Cupiditate fuga beatae a autem? Quo quia optio odio et?</p>
                    <ul>
                        <li><a href="#"><i class="fas fa-heart"></i></a></li>
                        <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="cardss__">
                    <h4>Maravilhas do Brasil</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nesciunt. Dicta odit soluta quis aut quam atque blanditiis facere ducimus. Cupiditate fuga beatae a autem? Quo quia optio odio et?</p>
                    <ul>
                        <li><a href="#"><i class="fas fa-heart"></i></a></li>
                        <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="cardss__">
                    <h4>Maravilhas do Brasil</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nesciunt. Dicta odit soluta quis aut quam atque blanditiis facere ducimus. Cupiditate fuga beatae a autem? Quo quia optio odio et?</p>
                    <ul>
                        <li><a href="#"><i class="fas fa-heart"></i></a></li>
                        <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
           </section>
            <div className="cardsEscondidos">
                <div className="carddss__">
                    <h4>Maravilhas do Brasil</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nesciunt. Dicta odit soluta quis aut quam atque blanditiis facere ducimus. Cupiditate fuga beatae a autem? Quo quia optio odio et?</p>
                    <ul>
                        <li><a href="#"><i class="fas fa-heart"></i></a></li>
                        <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="carddss__">
                    <h4>Maravilhas do Brasil</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nesciunt. Dicta odit soluta quis aut quam atque blanditiis facere ducimus. Cupiditate fuga beatae a autem? Quo quia optio odio et?</p>
                    <ul>
                        <li><a href="#"><i class="fas fa-heart"></i></a></li>
                        <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="carddss__">
                    <h4>Maravilhas do Brasil</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nesciunt. Dicta odit soluta quis aut quam atque blanditiis facere ducimus. Cupiditate fuga beatae a autem? Quo quia optio odio et?</p>
                    <ul>
                        <li><a href="#"><i class="fas fa-heart"></i></a></li>
                        <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}