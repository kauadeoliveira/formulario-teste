import Smile from '../../assets/smile.svg';
import Bar from '../../assets/bar.svg';
import '../../styles/main.scss';
import './style.scss';

export default function PageTwo() {
return (
    <div className="wrapper">
      <header>
        <p className="header__title">
          Muy bien...
        </p>
        <p className="header__subtitle">
          Todavia tenemos una última opción de tarjeta de crédito que
          estará disponible <strong>SOLO AHORA</strong> si hace clic en el botón a continuación!
        </p>
      </header>
      <main>
        <p className="topic">
          Consigue tu tarjeta ahora mismo, rellena los datos a continuacón:
        </p>
        <img src={Smile} alt="Smile icon" className="smile" />
        <div className="topics">
          <h3>
            NO NECESITA PROPORCIONAR NINGÚN DATO PERSONAL, SÓLO HAGA CLIC Y COMPRUEBE.
          </h3>
          <p className="topic">
            Terjeta <strong>LÍMITE DE HASTA $ 14.970,00</strong>
          </p>
          <img src={Bar} alt="Range bar" className="topics__range" />
          <p className="topic">
            <strong>APROBACIÓN en 30 SEGUNDOS</strong>
          </p>
        </div>
      </main>
      <button className="btn" type="button">
        Mira mi Tarjeta!
      </button>
    </div>
  )
}
