import { Route,  Routes } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";
import HomePage from "./home";
import NotFoundPage from "./notFound";

 const Routing = ():JSX.Element => {
    return (
        <Routes>
            <Route path={AppRoutes.home} element={<HomePage />} />
            <Route path={AppRoutes.all} element={<NotFoundPage />} />
        </Routes>
    );
};

export default Routing; 