import Header from "@/app/components/Header";
import AppHeader from "@/app/components/AppHeader";
import AppGalleryTabs from "@/app/components/AppGalleryTabs";
import LinkButton from "@/app/components/buttons/LinkButton";
import { notFound } from 'next/navigation';
import "./style.scss";


export default function PageApp({ params }) {

    const apps = [
        {
            id: 'fast-drink',
            title: 'Fast Drink',
            year: '2017',
            describle: 'Prototype App | Delivery',
            overview: 'A Brazilian delivery app for all types of drinks and soft drinks, with drag-and-drop shopping cart functionality.',
            links: [
                {
                    icon: 'download',
                    title: 'Android (APK)',
                    url: 'https://www.mediafire.com/file/mpibjnmrzxzvhjj/Fast_Drink_v1-0-0.apk/file'
                }, {
                    icon: 'download',
                    title: 'Windows (EXE)',
                    url: 'https://www.mediafire.com/file/edsjooe1ssok1tk/Fast_Drink_v1-0-0.zip/file'
                }
            ],
            gallery: {
                mobile: [
                    'mobile-2.png',
                    'mobile-4.png',
                    'mobile-5.png',
                    'mobile-3.png',
                    'mobile-1.png',
                    'mobile-6.png',
                ]
            }
        }, {
            id: 'grillo',
            title: 'Grillo',
            year: '2019 - 2020',
            describle: 'Prototype App | Social network',
            overview: 'A social network that brings together professional and indie musicians in one place to promote new music, events and festivals.',
            links: [
                {
                    icon: 'link',
                    title: 'Figma interface',
                    url: 'https://www.figma.com/design/pQaMD4aDuJgb61CS6bINi9/Grillo?node-id=2-2&p=f&t=TBtlzymiSTWFMR4E-0'
                }
            ],
            gallery: {
                mobile: [
                    'mobile-6.png',
                    'mobile-3.png',
                    'mobile-7.png',
                    'mobile-4.png',
                    'mobile-2.png',
                    'mobile-1.png',
                    'mobile-5.png',
                    'mobile-8.png',
                    'mobile-9.png'
                ],
                desktop: [
                    'desktop-2.png',
                    'desktop-3.png',
                    'desktop-1.png',
                ]
            }
        }, {
            id: 'cardapio-facil',
            title: 'Cardápio Fácil',
            year: '2021',
            describle: 'Open Source App | Menu',
            overview: 'A simple web app for publishing easily accessible restaurant menus with your Google Account.',
            links: [
                {
                    icon: 'link',
                    title: 'GitHub project',
                    url: 'https://github.com/joaoaraya/prj-cardapioFacil'
                }, {
                    icon: 'link',
                    title: 'Figma interface',
                    url: 'https://www.figma.com/design/rOM6aJ3HNB5ad1uKNeqwFc/Card%C3%A1pio-F%C3%A1cil?node-id=75-316&t=qoqeIV9cDENdzZ3o-0'
                }
            ],
            gallery: {
                mobile: [
                    'mobile-2.png',
                    'mobile-1.png',
                    'mobile-3.png',
                ],
                desktop: [
                    'desktop-1.png',
                    'desktop-3.png',
                    'desktop-2.png',
                ]
            },
        }, {
            id: 'hashtag-blogs',
            title: '#Blogs',
            year: '2022',
            describle: 'Prototype App | Social network',
            overview: 'A Twitter-like social network, with the new style of web blogs.',
            links: [
                {
                    icon: 'link',
                    title: 'Figma interface',
                    url: 'https://www.figma.com/design/SXB78fTpIk6mBlihQfylZd/-Blogs?node-id=0-1&p=f&t=NRcuv9s3Wk3sjtil-0'
                }
            ],
            gallery: {
                mobile: [
                    'mobile-4.png',
                    'mobile-6.png',
                    'mobile-5.png',
                    'mobile-1.png',
                    'mobile-3.png',
                    'mobile-2.png',
                ],
                desktop: [
                    'desktop-5.png',
                    'desktop-6.png',
                    'desktop-1.png',
                    'desktop-2.png',
                    'desktop-3.png',
                    'desktop-4.png',
                ]
            },
        }
    ]


    const app = apps.find((app) => app.id === params.id);

    if (!app) {
        notFound();
    }

    const mediaPath = '/assets/pictures/apps/';


    return (
        <div className="container" id="app">
            <Header title />

            <main>
                <div className="appPage">
                    <AppHeader
                        icon={mediaPath + app.id + '/icon.png'}
                        title={app.title}
                        describle={app.describle}
                        year={app.year}
                    />

                    <div id="appLinks">
                        {app.links.map((appLink, index) =>
                            <LinkButton
                                key={index}
                                icon={appLink.icon}
                                title={appLink.title}
                                url={appLink.url}
                            />
                        )}
                    </div>

                    <div id="appOverview">
                        <h1>Overview</h1>
                        <p>{app.overview}</p>
                    </div>

                    <AppGalleryTabs
                        gallery={app.gallery}
                        galleryPath={mediaPath + app.id + '/'}
                    />
                </div>
            </main>
        </div>
    )
}