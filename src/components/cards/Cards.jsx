import RioDeJaneiro from "../../Assets/imgs/riodejaneiro.jpg";
import FozDoIguacu from "../../Assets/imgs/fozdoiguacu.jpg";
import Capitolio from "../../Assets/imgs/capitolio.jpg";
import PortoDeGalinhas from "../../Assets/imgs/portodegalinhas.jpg";

export default function Cards(){
    return(
        <>
        <div className="parteMeioSite">
            <div className="card" style={{width: "18rem"}}>
                <img src={RioDeJaneiro} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Rio de Janeiro</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">EM ATÉ 12X DE R$ 150,00</li>
                            <li className="list-group-item">OU R$ 1600,00 à vista</li>
                        </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Comprar</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={FozDoIguacu} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Foz do Iguaçú</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">EM ATÉ 12X DE R$ 150,00</li>
                            <li className="list-group-item">OU R$ 1600,00 à vista</li>
                        </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Comprar</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={Capitolio} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Captólio</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">EM ATÉ 12X DE R$ 150,00</li>
                            <li className="list-group-item">OU R$ 1600,00 à vista</li>
                        </ul>
                <div className="card-body">
                <a href="#" className="card-link">Comprar</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={PortoDeGalinhas} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Porto de Galinhas</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">EM ATÉ 12X DE R$ 150,00</li>
                            <li className="list-group-item">OU R$ 1600,00 à vista</li>
                        </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Comprar</a>
                </div>
            </div>
        </div>
        </>
    )
}