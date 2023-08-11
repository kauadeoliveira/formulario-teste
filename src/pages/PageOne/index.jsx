import Form from "../../components/Form";
import Gif from '../../assets/gif-header.gif';
import '../../styles/main.scss'
import './style.scss'

export default function PageOne() {
  return (
    <div className="wrapper">
      <header>
        <p className="header__title">
          ¡Perfecto!
        </p>
        <p className="header__subtitle">
          Encontramos la tarjeta de crédito ideal para usted. Ahora sería lo siguiente:
        </p>
        <img src={Gif} alt="Animação GIF" />
        <ul className="header__listing">
          <li>
            1 - Deje su <strong>NOMBRE y su CORREO PERSONAL</strong> abajo.
          </li>
          <li>
            2 - Verifica los <strong>DETALLES DE LA TARJETA EN LA PROXIMA PAGINA.
          </strong></li>
          <li>
            3 - En 5 <strong>MIN CONFIRME EL EMAIL "SOLICITUD de 💳" Y FINALICE EL PEDIDO DE LA TARJETA!</strong>
          </li>
        </ul>
      </header>
      <Form />
    </div>
  );
}