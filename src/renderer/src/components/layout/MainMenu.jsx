import { NavLink, Link } from "react-router-dom";

function MainMenu() {
    return (
        <nav>
            <a className="nav-link d-flex align-items-center my-1" href="/">
                <span className="menu-icon">
                    <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z" fill="currentColor"/>
                    <path opacity="0.3" d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z" fill="currentColor"/>
                    <path opacity="0.3" d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z" fill="currentColor"/>
                    <path opacity="0.3" d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z" fill="currentColor"/>
                    </svg>
                    </span>
                </span>
                <span className="menu-title">Accueil</span>
            </a>
            <a className="nav-link d-flex align-items-center my-1" href="/sensors">
                <span className="menu-icon">
                    <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4409 22C13.5455 22 14.4409 21.1046 14.4409 20C14.4409 18.8954 13.5455 18 12.4409 18C11.3364 18 10.4409 18.8954 10.4409 20C10.4409 21.1046 11.3364 22 12.4409 22Z" fill="currentColor"/>
                    <path opacity="0.3" d="M9.04095 14.8L9.94095 16.1C10.6409 15.6 11.5409 15.3 12.4409 15.3C13.3409 15.3 14.2409 15.6 14.9409 16.1L15.8409 14.8C16.1409 14.3 16.0409 13.6 15.4409 13.4C14.5409 13 13.5409 12.7 12.4409 12.7C11.3409 12.7 10.3409 12.9 9.44095 13.4C8.84095 13.6 8.74095 14.3 9.04095 14.8Z" fill="currentColor"/>
                    <path opacity="0.3" d="M3.14096 5.80005L4.04095 7.19995C6.44095 5.59995 9.34094 4.69995 12.4409 4.69995C15.5409 4.69995 18.4409 5.59995 20.8409 7.19995L21.7409 5.80005C22.0409 5.30005 21.8409 4.70002 21.3409 4.40002C18.7409 2.90002 15.6409 2 12.4409 2C9.24094 2 6.14095 2.90002 3.54095 4.40002C3.04095 4.70002 2.84096 5.30005 3.14096 5.80005Z" fill="currentColor"/>
                    <path opacity="0.3" d="M6.14097 10.3L7.04096 11.7C8.64096 10.7 10.441 10.1 12.541 10.1C14.641 10.1 16.441 10.7 18.041 11.7L18.941 10.3C19.241 9.80005 19.141 9.10002 18.541 8.90002C16.741 7.90002 14.741 7.40002 12.541 7.40002C10.341 7.40002 8.34096 7.90002 6.54096 8.90002C5.94096 9.10002 5.74097 9.80005 6.14097 10.3Z" fill="currentColor"/>
                    </svg>
                    </span>
                </span>
                <span className="menu-title">Mes capteurs</span>
            </a>
        </nav>
    );
}

export default MainMenu