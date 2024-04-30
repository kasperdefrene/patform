import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";

const Root = () => {
    return (
        <>
            <Hero />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;