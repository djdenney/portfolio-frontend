import { Link } from 'react-router-dom'


function Header() {

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark text-light fixed-top'>
            <div className='container-fluid d-flex justify-content-between align-items-center col-md-8 offset-md-2'>
                <Link className='navbar-brand' to='/'>denneythe.dev</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>/about</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/work'>/work</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/contact'>/contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header