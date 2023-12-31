import logo from './../../assets/img/logos/logo-Home2Air-white.png'
import placeholder from './../../assets/img/placeholder/woman.jpg'
import MainMenu from './MainMenu';

function Sidebar() {
    return (
        <div id="sidebar" className='d-flex flex-column justify-content-between'>
            <div className="sidebar-top">
                <div className="logo px-4 py-2">
                    <img className="img-fluid" src={logo} alt="Logo" />
                </div>
                <div className="separator">
                </div>
                <MainMenu />
            </div>
            <div className="sidebar-bottom">
                <div className="separator">
                </div>
                <div className="account">
                    <span className="text-white text-center w-100 d-block">Bonjour, Jenna Doe</span>
                    <div className="profile-picture">
                        <img className="img-fluid" src={placeholder} />
                    </div>
                    <span className="disconnect text-center w-100 d-block">Se déconnecter</span>
                </div>
            </div> 
        </div>
	);
}

export default Sidebar
