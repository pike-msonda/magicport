import { Project } from "types";
import style from "./Project.module.css";

type HeaderProps = {
    item: Project;
};

const Header = ({ item }: HeaderProps) => {
    return (
        <div className={style.card}>
            <h1>{item.name}</h1>
        </div>
    );
};

export default Header;
