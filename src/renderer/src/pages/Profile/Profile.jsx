import TopBar from "../../components/layout/Topbar"

function Profile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <TopBar  
                    pageTitle="Mon Profil"
					breadcrumbs={[
						{title: 'Accueil', path: '/'},
						{title: 'Mon profil'},
					]}
					buttons={[{title: "Retour à l'accueil", path:'/', className: 'btn-secondary'}]}
                    />
                </div>
                <div className="col-12">

                </div>
            </div>
        </div>
    )
}

export default Profile