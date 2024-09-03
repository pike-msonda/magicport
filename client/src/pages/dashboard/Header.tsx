import style from "./Header.module.css";

type HeaderProps = {
    numProjects: number;
};
const Header = ({ numProjects = 0 }: HeaderProps) => {
    return (
        <div className={style.container}>
            <h1>Project Dashboard</h1>
            <p>
                {numProjects} <em>projects</em>
            </p>
        </div>
    );
};

export default Header;
