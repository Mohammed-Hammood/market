import { Route,  Routes } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";
import HomePage from "./home";

 const Routing = ():JSX.Element => {
    return (
        <Routes>
            <Route path={AppRoutes.home} element={<HomePage />} />
        </Routes>
    );
};

export default Routing; 