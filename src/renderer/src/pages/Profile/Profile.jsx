import ProfileEditForm from "../../components/forms/ProfileEditForm"
import TopBar from "../../components/layout/Topbar"
import AdviceCard from "../../components/widgets/AdviceCard"
import Card from "../../components/widgets/Card"
import placeholder from './../../assets/img/placeholder/woman.jpg'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { fetchApi } from "../../utils/ApiUtil"


function Profile() {
    const [user, setUser] = useState()
    const context = useContext(AuthContext);
    const removeToken = ()=>{
        context.setToken('')
        console.log(context.token);
    }

    useEffect(() => {
        const fetchAsync = async () => {
            try {
                let response = await fetchApi('GET', null, '/customers/'+ context.userId, context.token);
                setUser(response)
                } catch (error) {
                console.log(error);
            }
        }
        fetchAsync();
    },[])

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
                <div className="col-12 mb-4">
                    <Card className="headerless sensor-card">
                        <div className='row'>
                            <div className='col-6 d-flex'>
                                <div className='border-right p-2 profile-picture-big'>
                                    <div className='d-flex justify-content-center align-items-center text-white rounded me-0' style={{height: '100%', width: '100%'}}>
                                        <p className='h1 mb-0'>{user ? user.first_name[0] : null}{user ? user.last_name[0] : null }</p>
                                    </div>
                                </div>
                                <div className="ps-2">
                                    <div className='me-2'>
                                        <div className='d-flex align-items-baseline'>
                                            <span className='h5 mb-0'>{user?.first_name} {user?.last_name}</span>
                                            {/* <div className='status ms-2'>
                                                <span className='me-1 badge badge-primary'>PRO</span>
                                            </div> */}
                                        </div>
                                        <p className='text-muted text-sm'>Inscription le {user?.createdAt ? new Date(user.createdAt).toLocaleString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'}) : '-'}</p>
                                        <div className="description text-muted mt-2 d-flex">
                                            <div className='me-3'>
                                                <span className="me-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3" d="M20.0381 4V10C20.0381 10.6 19.6381 11 19.0381 11H17.0381C16.4381 11 16.0381 10.6 16.0381 10V4C16.0381 2.9 16.9381 2 18.0381 2C19.1381 2 20.0381 2.9 20.0381 4ZM9.73808 18.9C10.7381 18.5 11.2381 17.3 10.8381 16.3L5.83808 3.29999C5.43808 2.29999 4.23808 1.80001 3.23808 2.20001C2.23808 2.60001 1.73809 3.79999 2.13809 4.79999L7.13809 17.8C7.43809 18.6 8.23808 19.1 9.03808 19.1C9.23808 19 9.53808 19 9.73808 18.9ZM19.0381 18H17.0381V20H19.0381V18Z" fill="currentColor"/>
                                                <path d="M18.0381 6H4.03809C2.93809 6 2.03809 5.1 2.03809 4C2.03809 2.9 2.93809 2 4.03809 2H18.0381C19.1381 2 20.0381 2.9 20.0381 4C20.0381 5.1 19.1381 6 18.0381 6ZM4.03809 3C3.43809 3 3.03809 3.4 3.03809 4C3.03809 4.6 3.43809 5 4.03809 5C4.63809 5 5.03809 4.6 5.03809 4C5.03809 3.4 4.63809 3 4.03809 3ZM18.0381 3C17.4381 3 17.0381 3.4 17.0381 4C17.0381 4.6 17.4381 5 18.0381 5C18.6381 5 19.0381 4.6 19.0381 4C19.0381 3.4 18.6381 3 18.0381 3ZM12.0381 17V22H6.03809V17C6.03809 15.3 7.33809 14 9.03809 14C10.7381 14 12.0381 15.3 12.0381 17ZM9.03809 15.5C8.23809 15.5 7.53809 16.2 7.53809 17C7.53809 17.8 8.23809 18.5 9.03809 18.5C9.83809 18.5 10.5381 17.8 10.5381 17C10.5381 16.2 9.83809 15.5 9.03809 15.5ZM15.0381 15H17.0381V13H16.0381V8L14.0381 10V14C14.0381 14.6 14.4381 15 15.0381 15ZM19.0381 15H21.0381C21.6381 15 22.0381 14.6 22.0381 14V10L20.0381 8V13H19.0381V15ZM21.0381 20H15.0381V22H21.0381V20Z" fill="currentColor"/>
                                                </svg>
                                                </span>
                                                <span>Entreprise : <span className="text-black">Home2Air</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-start justify-content-end">
                                <AdviceCard title="Filtrez l'Air pour une Maison Saine">
                                    <p>Assurez une meilleure qualité de l'air dans votre maison en utilisant des purificateurs d'air. Ces dispositifs sont conçus pour éliminer les particules fines, les allergènes, les polluants et les mauvaises odeurs, améliorant ainsi la qualité de l'air intérieur.</p>
                                </AdviceCard>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-12">
                    <Card title="Mes informations">
                        <ProfileEditForm data={user}/>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Profile