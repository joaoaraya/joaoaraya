import ThemeSwitcherButton from '../buttons/ThemeSwitcherButton';
import './style.scss';

type HeaderProps = {
    title?: boolean;
}

export default function Header(props: HeaderProps) {

    return (
        <header>
            <div id="title">
                {props.title && (<p><a href="/"><b>João Araya's</b> projects</a></p>)}
            </div>

            <div id="actions">
                <ThemeSwitcherButton />

                <a href="/">
                    <img className="profilePicture" src="/assets/pictures/header/profile.jpg" alt="Profile Picture" title="João Araya" />
                </a>
            </div>
        </header>
    )
}