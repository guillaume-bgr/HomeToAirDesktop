import { useContext, useState } from "react";
import { verifyEmail, verifyPassword } from "../../../utils/FormUtil";
import { fetchApi } from "../../../utils/ApiUtil";
import { TimerAlert, ToastAlert } from "../../../utils/PopupUtils";
import { AuthContext } from "../../../context/AuthContext"; 

export default function ConnectForm() {
    const [email, setEmail] = useState('cecilia.ruin@gmail.com');
    const [password, setPassword] = useState('Mot2P@sse');
    const context = useContext(AuthContext);

    const verifyForm = async () => {
        let pwd = false , mail = false
        if(verifyPassword(password).verif != true){
            ToastAlert(verifyPassword(password).message)
        }else{
            setPassword(verifyPassword(password).text)
            pwd= true
        }
        if(verifyEmail(email).verif != true){
            ToastAlert(verifyEmail(email).message)
        }else{
            setEmail(verifyEmail(email).text)
            mail = true
        } 
        if (pwd == true & mail == true){
            handleSubmit()
        }  
    }
    const handleSubmit = async () => {
        fetchApi('POST', {email, password}, '/customers/authenticate')
        .then((response) => {
            context.setRefresh(response.data.refresh);
            context.setUserId(response.data.customer.id);
            context.setToken(response.data.token);
        }).catch((error)=>{
            console.log("Api call error");
            TimerAlert(error.message, 'error')
            console.log(error.message);
        });
    }
	return (
        <form>
            <div className="form-floating m-5 ">
                <input type="email" defaultValue="cecilia.ruin@gmail.com" className="form-control " id="floatingInput" onChange={e => setEmail(e.target.value)} placeholder="name@exemple.com"/>
                <label htmlFor="floatingInput">Adresse mail</label>
            </div>
            <div className="form-floating m-5">
                <input type="password" defaultValue="Mot2P@sse" className="form-control connect-input" id="floatingPassword" onChange={e => setPassword(e.target.value)} placeholder="mot de passe"/>
                <label htmlFor="floatingPassword">Mot de passe</label>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <button type="button" className="btn btn-primary mx-auto mb-3" onClick={verifyForm}>Connexion</button>
            </div>
        </form>
	);
}
