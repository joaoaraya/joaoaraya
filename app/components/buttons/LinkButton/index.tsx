'use client';

import Icon from "../../Icon";
import "./style.scss";

type Props = {
    icon?: string;
    title: string;
    url: string;
}

export default function LinkButton(props: Props) {

    return (
        <button onClick={() => window.open(props.url, '_blank')} className="linkButton">
            {props.icon && (<Icon name={props.icon} />)}
            <p>{props.title}</p>
        </button>
    )
}