import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@/app/providers/ThemeProvider'


export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback="Loading...">
                {component()}
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
);