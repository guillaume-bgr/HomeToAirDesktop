import Card from "../widgets/Card";
import TopBar from "../layout/Topbar";
import NiceSelect from "../widgets/NiceSelect";

function ParkForm(props) {
    let formOptions = {
        pageTitle: 'Ajouter un parc',
        data: {
            name: props.sensor?.name,
            park: props.sensor?.Park,
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
                            <NiceSelect name="park" value={formOptions.data.park?.id} placeholder={formOptions.data.park?.name ? formOptions.data.park?.name : "Choisir une adresse"} options={
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
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ParkForm;