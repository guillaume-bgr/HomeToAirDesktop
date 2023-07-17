import Card from "../../widgets/Card";
import TopBar from "../../layout/Topbar";
import NiceSelect from "../../widgets/NiceSelect";

function AddSensor() {
    return (
        <div className="container">
            <TopBar 
            pageTitle="Ajouter un capteur"
            breadcrumbs={[
                {title: 'Accueil', path: '/'},
                {title: 'Capteurs', path: '/sensors'},
                {title: 'Ajouter un capteur'}
            ]}
            buttons={[{title: 'Retour à la liste', path:'/sensors', className: 'btn-secondary'}]}
            />
            <div className="row">
                <div className="col-12">
                    <Card title="Ajouter un capteur">
                        <form method="POST" className="py-2">
                            <input type="text" name="name" className="form-input-solid shadow-none mb-3" placeholder="Nom du capteur" />
                            <NiceSelect placeholder="Choisir un parc" options={
                                [
                                    {
                                        value: 1,
                                        label: 'Park 1'
                                    },
                                    {
                                        value: 2,
                                        label: 'Park 2'
                                    },
                                    {
                                        value: 3,
                                        label: 'Park 3'
                                    }
                                ]
                            } />
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AddSensor;