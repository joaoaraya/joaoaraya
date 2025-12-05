import Header from "@/app/components/Header";
import AppHeader from "@/app/components/AppHeader";
import LinkButton from "@/app/components/buttons/LinkButton";
import OpenMediaModal from "@/app/components/buttons/OpenMediaModal";
import { notFound } from 'next/navigation';
import "./style.scss";


export default function PageGame({ params }) {

    const games = [
        {
            id: 'ball-red-mystery-island',
            title: 'Ball Red: Mystery Island',
            year: '2014 - 2015',
            describle: 'Game | Action platform',
            overview: 'Help Ball Red to collect all Kenicoins in the Kenizou Island, but for that you have to go through many obstacles and traps scattered throughout the game!',
            links: [
                {
                    icon: 'download',
                    title: 'Android (APK)',
                    url: 'https://www.mediafire.com/file/8ismis2y8sezbjb/Ball_Red_MI_v3-6-0.apk/file'
                }, {
                    icon: 'download',
                    title: 'Windows (EXE)',
                    url: 'https://www.mediafire.com/file/qvsok08ucbpccqo/Ball_Red_MI_v3-6-0.zip/file'
                }
            ],
            galleryVideos: [
                {
                    thumbnail: 'kankan-beach.png',
                    url: 'https://www.youtube.com/embed/EGWtHkNLX7k?si=oHWjZ8cSL2x_aq-C'
                }
            ],
            galleryImages: [
                'kenizou-carnival.png',
                'kenizou-snow.png',
                'welcome-place.png',
                'bonus.png',
                'submarine.png',
                'lost-jungle.png',
                'balloon.png',
                'kankan-beach.png'
            ],
        }, {
            id: 'pin-pow-classic',
            title: 'Pin Pow Classic',
            year: '2015',
            describle: 'Game | Arcade',
            overview: "Feel the years 90's nostalgia with this mix of classic Arkanoid and Snake! Are 100 levels and 4 different rackets.",
            links: [
                {
                    icon: 'download',
                    title: 'Android (APK)',
                    url: 'https://www.mediafire.com/file/dephonkxouucp2o/Pin_Pow_Classic_v2-3-1.apk/file'
                }, {
                    icon: 'download',
                    title: 'Windows (EXE)',
                    url: 'https://www.mediafire.com/file/aco35vu1nuigmw3/Pin_Pow_Classic_v2-3-1.zip/file'
                }
            ],
            galleryImages: [
                'screenshot-1.png',
                'screenshot-2.png',
                'screenshot-3.png',
                'screenshot-4.png',
                'screenshot-5.png'
            ],
        }, {
            id: 'eu-nao-sei-quiz',
            title: 'Eu Não Sei Quiz',
            year: '2016',
            describle: 'Game | Trivia',
            overview: '(Portuguese-Brazil) Neste jogo você terá que quebrar a cabeça, para acertar as 30 questões que estão cheias de pegadinhas!',
            links: [
                {
                    icon: 'download',
                    title: 'Android (APK)',
                    url: 'https://www.mediafire.com/file/ro3sbu1xlsgcpmm/ENSQ_v1-3-5.apk/file'
                }, {
                    icon: 'download',
                    title: 'Windows (EXE)',
                    url: 'https://www.mediafire.com/file/senh25h9csojpry/ENSQ_v1-3-5.zip/file'
                }
            ],
            galleryImages: [
                'screenshot-1.png',
                'screenshot-3.png',
                'screenshot-2.png'
            ],
        }, {
            id: 'pin-pow-breakout',
            title: 'Pin Pow Breakout',
            year: '2016',
            describle: 'Game | Arcade',
            overview: 'Prepare your rackets, Pin Pow is back!\nNow with many blocks to destroy and challenges to enjoy it to the fullest!',
            links: [
                {
                    icon: 'download',
                    title: 'Android (APK)',
                    url: 'https://www.mediafire.com/file/j305zqp000676vp/Pin_Pow_Breakout_v1-7-2.apk/file'
                }, {
                    icon: 'download',
                    title: 'Windows (EXE)',
                    url: 'https://www.mediafire.com/file/mn87vwtgo8u441e/Pin_Pow_Breakout_v1-7-2.zip/file'
                }
            ],
            galleryVideos: [
                {
                    thumbnail: 'round-2.png',
                    url: 'https://www.youtube.com/embed/4vUdWvBxpIQ?si=p6AVozKBOfmwLM2G'
                }
            ],
            galleryImages: [
                'round-1.png',
                'round-4.png',
                'round-2-2.png',
                'round-3.png',
                'round-4-2.png'
            ],
        }, {
            id: 'carlei-cards',
            title: 'Cãrlei Cards',
            year: '2016',
            describle: 'Game | Cards',
            overview: 'Color yes, color no, number yes, number no. You choose!\nA card game like UNO, perfect for playing any time.',
            links: [
                {
                    icon: 'download',
                    title: 'Android (APK)',
                    url: 'https://www.mediafire.com/file/t062wqom5z8t0aj/Carlei_v1_1_6.apk/file'
                }, {
                    icon: 'download',
                    title: 'Windows (EXE)',
                    url: 'https://www.mediafire.com/file/hzrk1h9z2webkdh/Carlei_v1_1_6.zip/file'
                }
            ],
            galleryImages: [
                'screenshot-1.png',
                'screenshot-2.png',
                'screenshot-3.png'
            ],
        }, {
            id: 'sunset-rush',
            title: 'Sunset Rush',
            year: '2017',
            describle: 'Prototype Game | Racing',
            overview: 'Cross all the finish lines before time runs out!\nCollect trophies to unlock new stages and new cars!',
            links: [
                {
                    icon: 'download',
                    title: 'Android (APK)',
                    url: 'https://www.mediafire.com/file/kg7o1qzs3top0v1/Sunset_Rush_v0-6-0.apk/file'
                }, {
                    icon: 'download',
                    title: 'Windows (EXE)',
                    url: 'https://www.mediafire.com/file/m0kw4ocb7d18kt4/Sunset_Rush_v0-6-0.zip/file'
                }
            ],
            galleryImages: [
                'screenshot-4.png',
                'screenshot-6.png',
                'screenshot-5.png',
                'screenshot-2.png',
                'screenshot-3.png',
                'screenshot-1.png',
            ],
        }, {
            id: 'sonic-sms-remake',
            title: 'Sonic SMS Remake',
            year: '2018 - 2022',
            describle: 'Game | Action platform',
            overview: 'A fan remake game of Sonic The Hedgehog mixes versions of Master System and Game Gear with Genesis zones, new powers, new characters and local Wi-Fi multiplayer.',
            links: [
                {
                    icon: 'link',
                    title: 'Download page',
                    url: 'https://sonic-sms-remake.blogspot.com/p/one.html'
                }
            ],
            galleryImages: [
                'super-sonic-sms-remake.gif',
                'knuckles-jungle-zone-sonic-sms-remake.gif',
                'map-sonic-sms-remake.png',
                'ray-scrap-brain-zone-sonic-sms-remake.gif',
                'sonic-sms-remake-band.gif',
                'mighty-green-hill-zone-sonic-sms-remake.gif',
                'lab-secret.gif',
                'tails-star-light-zone-sonic-sms-remake.gif',
                'spring-yard-zone-sonic-sms-remake.gif'
            ]
        }, {
            id: 'sonic-sms-remake-2',
            title: 'Sonic SMS Remake 2',
            year: '2019 - 2022',
            describle: 'Game | Action platform',
            overview: 'A fan remake game of Sonic The Hedgehog 2 mixes versions of Master System and Game Gear with new zones, powers, characters, team gameplay and local Wi-Fi multiplayer.',
            links: [
                {
                    icon: 'link',
                    title: 'Download page',
                    url: 'https://sonic-sms-remake.blogspot.com/p/two.html'
                }
            ],
            galleryImages: [
                'undergound-1.png',
                'oilocean.gif',
                'skyhigh-1.png',
                'skyhigh-2.gif',
                'undergound-2.png',
                'multiplayer.gif',
                'hypersonic.gif',
                'specialstage.png',
                'skychase.gif'
            ],
        }, {
            id: 'sonic-sms-remake-2',
            title: 'Sonic SMS Remake 2',
            year: '2019 - 2022',
            describle: 'Game | Action platform',
            overview: 'A fan remake game of Sonic The Hedgehog 2 mixes versions of Master System and Game Gear with new zones, powers, characters, team gameplay and local Wi-Fi multiplayer.',
            links: [
                {
                    icon: 'link',
                    title: 'Download page',
                    url: 'https://sonic-sms-remake.blogspot.com/p/two.html'
                }
            ],
            galleryImages: [
                'undergound-1.png',
                'oilocean.gif',
                'skyhigh-1.png',
                'skyhigh-2.gif',
                'undergound-2.png',
                'multiplayer.gif',
                'hypersonic.gif',
                'specialstage.png',
                'skychase.gif'
            ],
        }, {
            id: 'sonic-sms-remake-3',
            title: 'Sonic SMS Remake 3: Timelines',
            year: '2022 - TBA',
            describle: 'Prototype Game | Action platform',
            overview: 'A fan remake game mixes Sonic Chaos and Sonic Triple Trouble, in a new game of the Master System and Game Gear versions, with new zones, powers, characters, team gameplay and local Wi-Fi multiplayer.',
            links: [
                {
                    icon: 'link',
                    title: 'Download page',
                    url: 'https://sonic-sms-remake.blogspot.com/p/three.html'
                }
            ],
            galleryImages: [
                'turquoise-hill-2.gif',
                'turquoise-hill-1.gif',
                'alex-kidd.gif',
                'bonus-2.gif',
                'time-warp.png',
                'turquoise-hill-3.gif',
                'bonus-1.gif',
                'menu.png',
                'bonanza-bros.png',
            ],
        }, {
            id: 'open-sonic-sms',
            title: 'Open Sonic SMS',
            year: '2019 - 2020',
            describle: 'Open Source Game | Action platform',
            overview: 'An engine of Sonic SMS Remake fan games for Game Maker Studio 1.x.',
            links: [
                {
                    icon: 'link',
                    title: 'GitHub project',
                    url: 'https://github.com/joaoaraya/prj-openSonicSMS'
                }
            ],
            galleryImages: [
                'screenshot-3.png',
                'screenshot-2.png',
                'screenshot-1.png',
            ],
        },
    ]


    const game = games.find((game) => game.id === params.id);

    if (!game) {
        notFound();
    }

    const mediaPath = '/assets/pictures/games/';


    return (
        <div className="container" id="game">
            <Header title />

            <main>
                <div className="gamePage">
                    <AppHeader
                        icon={mediaPath + game.id + '/icon.png'}
                        title={game.title}
                        describle={game.describle}
                        year={game.year}
                    />

                    <div id="gameLinks">
                        {game.links.map((gameLink, index) =>
                            <LinkButton
                                key={index}
                                icon={gameLink.icon}
                                title={gameLink.title}
                                url={gameLink.url}
                            />
                        )}
                    </div>

                    <div id="gameOverview">
                        <h1>Overview</h1>
                        <p>{game.overview}</p>
                    </div>

                    <div id="gameGallery">
                        <h1>Gameplay</h1>

                        <div id="gallery">
                            {game.galleryVideos?.map((gameVideo, index) => (
                                <OpenMediaModal
                                    key={index}
                                    type="video"
                                    imagePath={mediaPath + game.id + '/' + gameVideo.thumbnail}
                                    videoPath={gameVideo.url}
                                />
                            ))}


                            {game.galleryImages.map((gameImage, index) =>
                                <OpenMediaModal
                                    key={index}
                                    type="image"
                                    imagePath={mediaPath + game.id + '/' + gameImage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}