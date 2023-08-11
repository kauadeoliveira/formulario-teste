import './style.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer__header">
        <span>
          This page is a credit card recommender. It was built with the sole purpose of helping people choose a new card.
        </span>
      </div>
      <div className="footer__content">
        <span>Smart Quiz SA</span>
        <span className="footer__datas">
          CNPJ: 12.457.326/0001-21 - <a href="#">E-MAIL: SMARTQUIZSA@SMARTQUIZ.COM</a>
        </span>
        <div className="footer__terms">
          <a href="#">
            Terms of Use and Service
          </a>
          <a href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}