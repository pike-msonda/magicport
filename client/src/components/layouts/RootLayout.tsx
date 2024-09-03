import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.css";

type RootLayoutProps = {
    children?: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <main className={style.main}>
            <Outlet />
        </main>
    );
};

export default RootLayout;
