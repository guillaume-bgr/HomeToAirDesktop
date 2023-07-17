import TopBar from "../components/layout/Topbar";

function Home() {
	return (
        <div className="container">
            <TopBar 
            pageTitle="Accueil"
            breadcrumbs={[
                {title: 'Accueil', path: '/'},
                {title: 'Dashboards'}
            ]}
            />
        </div>
	);
}

export default Home;