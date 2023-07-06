import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import MainMenu from "../components/layout/MainMenu";

function Template() {
    return (
        <>
            <Sidebar />
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default Template;