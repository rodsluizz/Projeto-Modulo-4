import img1 from "../../Assets/imgs/img1.jpg";
import img2 from "../../Assets/imgs/img2.jpg";
import img3 from "../../Assets/imgs/img3.jpg";

export default function Carrosel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={img1} className="d-block w-100 imagem" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="titulo__imagem">Roteiros Nacionais</h5>
              <button className="button_carrosel">quero ir <i class="fas fa-plane-departure"></i></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 imagem" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="titulo__imagem">Viagens Internacionais</h5>
              <button className="button_carrosel">quero ir <i class="fas fa-plane-departure"></i></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 imagem" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="titulo__imagem">Paisagens Incríveis</h5>
              <button className="button_carrosel">quero ir <i class="fas fa-plane-departure"></i></button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
