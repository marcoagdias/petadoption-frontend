import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../assets/logo.svg'
import homeBackground from "../../assets/home-background.svg";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header className="homeIllustration">
          <img src={logo} alt="Pet Adoption" />
        </header>

        <main>
          <div className="content-wrapper">
            <div>
              <h1>
                Adote um <span className="themed-text">pet</span> <br />
                Adote um <span className="themed-text">amigo</span>
              </h1>
              <p>
                Pet Adoption irá encontrar um novo lar <br />
                para seu Pet. Cadastre seu Pet logo abaixo.
              </p>
            <div className="button-petpoint">
              <Link to="/create-petpoint">
                <span>
                  <FiLogIn />
                </span>
                <strong>Cadastre um pet para doação</strong>
              </Link>
            </div>
            </div>
            <img src={homeBackground} alt="home-background" className="home-background-img" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home