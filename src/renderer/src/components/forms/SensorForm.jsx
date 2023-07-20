import Card from "../widgets/Card";
import TopBar from "../layout/Topbar";
import NiceSelect from "../widgets/NiceSelect";

function SensorForm(props) {
    let formOptions = {
        pageTitle: 'Ajouter un capteur',
        data: {
            name: props.sensor?.name,
            park: props.sensor?.Park,
        }
    }

    if (props.action == 'edit') {
        formOptions.pageTitle = 'Modifier un capteur';
    }

    return (
        <div className="container">
            <TopBar 
            pageTitle={formOptions.pageTitle}
            breadcrumbs={[
                {title: 'Accueil', path: '/'},
                {title: 'Capteurs', path: '/sensors'},
                {title: formOptions.pageTitle}
            ]}
            buttons={[{title: 'Retour à la liste', path:'/sensors', className: 'btn-secondary'}]}
            />
            <div className="row">
                <div className="col-12">
                    <Card title={formOptions.pageTitle}>
                        <form method="POST" className="py-2">
                            <input type="text" name="name" value={formOptions.data.name} className="form-input-solid shadow-none mb-3" placeholder="Nom du capteur" />
                            <NiceSelect className="mb-2" options={
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

export default SensorForm;