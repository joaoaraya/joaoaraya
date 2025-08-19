import './style.scss';
import Icon from '../Icon';

export default function AboutMe() {

    const socialLinks = [
        {
            title: 'Youtube',
            icon: 'youtube',
            url: 'https://www.youtube.com/joaoaraya'
        }, {
            title: 'GitHub',
            icon: 'github',
            url: 'https://www.github.com/joaoaraya'
        }, {
            title: 'Mail',
            icon: 'mail',
            url: 'mailto:contato@joaoaraya.dev?subject=Hello!'
        }
    ]


    return (
        <div className="aboutMe">
            <h1>Hi, I'm João Araya 👋</h1>

            <p>
                I'm a software developer in Brazil and I make websites, webapps and
                mobile games since 2012.
            </p>

            <div className="socialButtons">
                {socialLinks.map((social, index) =>
                    <a key={index} href={social.url} target="_blank">
                        <button>
                            <Icon name={social.icon} />
                            <p>{social.title}</p>
                        </button>
                    </a>
                )}
            </div>
        </div>
    )
}