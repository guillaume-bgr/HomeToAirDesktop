import logo from './../../assets/img/logos/logo-Home2Air-white.png'
import MainMenu from './MainMenu';

function Sidebar() {
    return (
        <div id="sidebar" className='d-flex flex-column'>
            <div className="logo px-4 py-2">
                <img className="img-fluid" src={logo} alt="Logo" />
            </div>
            <div className="separator">
            </div>
            <MainMenu />
        </div>
	);
}

export default Sidebar
