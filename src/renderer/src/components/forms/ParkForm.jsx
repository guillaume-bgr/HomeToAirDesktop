import Card from "../widgets/Card";
import TopBar from "../layout/Topbar";
import NiceSelect from "../widgets/NiceSelect";

function ParkForm(props) {
    let formOptions = {
        pageTitle: 'Ajouter un parc',
        data: {
            name: props.park?.name,
            park: props.park?.Building,
            sensors: props.park?.Sensors
        }
    }

    if (props.action == 'edit') {
        formOptions.pageTitle = 'Modifier un parc';
    }

    return (
        <div className="container">
            <TopBar 
            pageTitle={formOptions.pageTitle}
            breadcrumbs={[
                {title: 'Accueil', path: '/'},
                {title: 'Parcs', path: '/parks'},
                {title: formOptions.pageTitle}
            ]}
            buttons={[{title: 'Retour à la liste', path:'/parks', className: 'btn-secondary'}]}
            />
            <div className="row">
                <div className="col-12">
                    <Card title={formOptions.pageTitle}>
                        <form method="POST" className="py-2">
                            <input type="text" name="name" value={formOptions.data.name} className="form-input-solid shadow-none mb-3" placeholder="Nom du parc" />
                            <NiceSelect name="address" placeholder={"Choisir une adresse"} className="mb-3" options={
                                [
                                    {
                                        value: 1,
                                        label: 'Adresse 1'
                                    },
                                    {
                                        value: 2,
                                        label: 'Adresse 2'
                                    },
                                    {
                                        value: 3,
                                        label: 'Adresse 3'
                                    }
                                ]
                            } />
                            <NiceSelect name="sensors" placeholder={"Choisir un capteur"} className="mb-3" options={
                                [
                                    {
                                        value: 1,
                                        label: 'Capteur 1'
                                    },
                                    {
                                        value: 2,
                                        label: 'Capteur 2'
                                    },
                                    {
                                        value: 3,
                                        label: 'Capteur 3'
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

export default ParkForm;