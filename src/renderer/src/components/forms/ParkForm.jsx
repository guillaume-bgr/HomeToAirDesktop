import Card from "../widgets/Card";
import TopBar from "../layout/Topbar";
import NiceSelect from "../widgets/NiceSelect";
import { useContext, useEffect, useState } from "react";
import { fetchApi } from "../../utils/ApiUtil";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { escapeHtml } from "../../utils/FormUtil";
import { TimerAlert } from "../../utils/PopupUtils";

function ParkForm(props) {
    const [parks, setParks] = useState(0);
    const [name, setName] = useState(0);
    const [selectedBuilding, setSelectedBuilding] = useState(0);
    const [buildingsData, setBuildingsData] = useState(0);
    const [sensorsData, setSensorsData] = useState(0);
    const context = useContext(AuthContext)
    let { id } = useParams();


    useEffect(() => {
        const fetchAsync = async () => {
            try {
                let response = await fetchApi('GET', null, '/customers/'+context.userId+'/sensors/', context.token);
                setParks(response)
                let buildingsData= []
                let sensorsData= []
                for (let park in response) {
                    if(response[park].id !=undefined & response[park].name !=undefined){
                       if(response[park].Buildings!=undefined){
                            buildingsData.push({value : response[park].Buildings.id, label : response[park].Buildings.name})
                        }
                        if(response[park].Sensors!=undefined){
                            for(let sensor in response[park].Sensors){
                                sensorsData.push({value : response[park].Sensors[sensor].id, label : response[park].Sensors[sensor].name})
                            }
                        }
                    }
                }
                setBuildingsData(buildingsData)
                setSensorsData(sensorsData)
                } catch (error) {
                console.log(error);
            }
        }
        fetchAsync();
    },[])


    const sendToApi = async () => {
        let parkName = escapeHtml(name)
        if (props.action == 'edit'){
            fetchApi('PATCH', {name: parkName,  building_id : selectedBuilding.id}, '/park/'+id)
            .then((response) => {
                if (response.statusCode == 200) {
                    TimerAlert('Sondes mise à jour !', 'success')
                }
            }).catch((error)=>{
                console.log("Api call error");
                console.log(error.message);
                TimerAlert(error.message, 'error')
            });
        }else{
            let user = await fetchApi('GET', null, '/customers/'+context.userId, context.token);
            fetchApi('POST', { name: parkName,  building_id : selectedBuilding.id, company_id: user.Companies.id}, '/parks/create', context.token)
        .then((response) => {
			console.log(response);
            TimerAlert('Park mis à jour !', 'success')
			}).catch((error)=>{
				console.log("Api call error Create Park")
				console.log(error.message)
                TimerAlert(error.message, 'error')
			});
        }
    }



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
                            <input type="text" name="name" value={formOptions.data.name} className="form-input-solid shadow-none mb-3" placeholder="Nom du parc" onChange={e => setName(e.target.value)}/>
                            <NiceSelect name="address" placeholder={"Choisir un batiment"} className="mb-3" options={
                                buildingsData
                            } setSelected = {setSelectedBuilding} />
                            <NiceSelect name="sensors" placeholder={"Choisir un capteur"} className="mb-3" options={
                                sensorsData
                            } />
                            <button type="button" className="btn btn-primary" onClick={() => sendToApi()}>Ajouter</button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ParkForm;