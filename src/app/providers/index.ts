import compose from "compose-function";
import { withRouter } from "./RouterProvider";


export const withProviders = compose(withRouter);