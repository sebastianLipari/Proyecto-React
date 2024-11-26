import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Heavy-Mental</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Latest</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/Metal">Metal</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/category/Rock">Rock</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/category/Thrash metal">Thrash metal</Link>
              </li>
              <li className="nav-item">
                <CartWidget cantidad={5} />
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )

}

export default NavBar