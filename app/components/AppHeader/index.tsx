import "./style.scss";

type Props = {
    icon: string;
    title: string;
    describle: string;
    year: string;
}

export default function AppHeader(props: Props) {

    return (
        <div className="appHeader">
            <div id="icon">
                <img src={props.icon} alt="Icon" />
            </div>

            <div id="data">
                <h1 id="title">{props.title}</h1>
                <p id="describle">{props.describle}</p>
                <p id="year">{props.year}</p>
            </div>
        </div>
    )
}