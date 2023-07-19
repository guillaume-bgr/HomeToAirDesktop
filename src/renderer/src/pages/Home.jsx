import TopBar from "../components/layout/Topbar"
import Card from "../components/widgets/Card"
import { useState } from "react"
import PercentageWidget from "../components/widgets/PercentageWidget"
import SensorList from "../components/widgets/SensorList"
import HelpWidget from "../components/widgets/HelpWidget"

export const Data = [
    {
    name: "Humidité",
    percentage: 95
    },
    {
    name: "Non humidité",
    percentage: 10,
    },
];

function Home() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.name), 
        datasets: [
            {
                label: "",
                data: Data.map((data) => data.percentage),
                backgroundColor: ["Blue", "transparent"],
                borderColor: "black",
                borderWidth: 0,
                borderRadius: 15
            }
        ]
    });

	return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <TopBar 
                    pageTitle="Accueil"
                    breadcrumbs={[
                        {title: 'Accueil', path: '/'},
                        {title: 'Dashboards'}
                    ]}
                    />
                </div>
                <div className="col-12 col-lg-7 mb-3">
                    <Card title="Bienvenue Jenna Dohn !">
                        <p>Votre moyenne de taux de pollution est de 12%</p>
                    </Card>
                </div>
                <div className="col-12 col-lg-5 mb-3">
                    <Card title="Votre taux d'humidité"
                    helper={
                        <HelpWidget modalDirection="left">
                            <p className="pb-1">
                                Bien qu’un taux d’humidité acceptable dépende de nombreux facteurs, l'humidité idéale pour une maison doit généralement être comprise entre 40 et 70 %.
                            </p>
                            <p className="pb-1">
                                En dessous de 40%, vous ferez face à un air très sec. Pourront se multiplier les sensations d’irritations ou de gorge sèche ou d’yeux secs.
                            </p>
                            <p className="pb-1">
                                Au-delà de 70%, vous risquez de faire face à un fort taux d’humidité. De la moisissure risque d’apparaître. Outre le côté inesthétique, elle peut entraîner des difficultés respiratoires (asthme, allergies, essoufflements, etc.).
                            </p>
                        </HelpWidget>
                    }
                    >
                        <div className="row">
                            <div className="col-6 d-flex flex-column align-items-center">
                                <p className="text-center mb-3">Humidité la plus importante</p>
                                <PercentageWidget color={"#c22020"} percentage={80} />
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center">
                                <p className="text-center mb-3">Humidité la plus faible</p>
                                <PercentageWidget color={"#0085FF"} percentage={45}  />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                        </div>
                    </Card>
                </div>
                <div className="col-12">
                    <SensorList />
                </div>
            </div>
        </div>
	);
}

export default Home;