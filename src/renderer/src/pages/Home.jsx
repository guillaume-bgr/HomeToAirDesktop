import TopBar from "../components/layout/Topbar"
import Card from "../components/widgets/Card"
import { useState } from "react"
import PercentageWidget from "../components/widgets/PercentageWidget"
import Carousel from "../components/widgets/Carousel";

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
                <div className="col-7">
                    <Card title="Bienvenue Jenna Dohn !">
                        <p>Votre moyenne de taux de pollution est de 12%</p>
                    </Card>
                </div>
                <div className="col-5">
                    <Card title="Votre taux d'humidité">
                        <div className="row">
                            <div className="col-6 d-flex flex-column align-items-center">
                                <p className="text-center">Humidité la plus importante</p>
                                <PercentageWidget color={"#c22020"} percentage={80} />
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center">
                                <p className="text-center">Humidité la plus faible</p>
                                <PercentageWidget color={"#0085FF"} percentage={45}  />
                            </div>
                            <div className="col-12">

                            </div>
                            <div className=""></div>
                        </div>
                    </Card>
                </div>
                <div className="col-12">
                    <Carousel />
                </div>
            </div>
        </div>
	);
}

export default Home;