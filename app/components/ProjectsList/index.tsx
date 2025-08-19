"use client";

import { useState } from "react";
import "./style.scss";

export default function ProjectsList() {
    const projects = [
        {
            name: 'Sonic SMS Remake 3: Timelines',
            launched: '2022 - TBA',
            imgFile: 'sonic-3.png',
            link: 'game/sonic-sms-remake-3',
            linkExternal: false,
            tags: ['Games', 'Prototypes']
        },
        {
            name: '#Blogs',
            launched: '2022',
            imgFile: 'blogs.png',
            link: 'https://www.figma.com/design/SXB78fTpIk6mBlihQfylZd/-Blogs?node-id=0-1&p=f&t=NRcuv9s3Wk3sjtil-0',
            linkExternal: true,
            tags: ['Apps', 'Prototypes']
        },
        {
            name: 'Cardápio Fácil',
            launched: '2021',
            imgFile: 'cardapio-facil.png',
            link: 'https://github.com/joaoaraya/prj-cardapioFacil',
            linkExternal: true,
            tags: ['Apps', 'Open Source']
        },
        {
            name: 'Sonic SMS Remake 2',
            launched: '2019 - 2022',
            imgFile: 'sonic-2.png',
            link: 'game/sonic-sms-remake-2',
            linkExternal: false,
            tags: ['Games']
        },
        {
            name: 'Open Sonic SMS',
            launched: '2019 - 2020',
            imgFile: 'open-sonic-sms.png',
            link: 'game/open-sonic-sms',
            linkExternal: false,
            tags: ['Games', 'Open Source']
        },
        {
            name: 'Grillo',
            launched: '2019 - 2020',
            imgFile: 'grillo.png',
            link: 'https://www.figma.com/design/pQaMD4aDuJgb61CS6bINi9/Grillo?node-id=2-2&p=f&t=TBtlzymiSTWFMR4E-0',
            linkExternal: true,
            tags: ['Apps', 'Prototypes']
        },
        {
            name: 'Sonic SMS Remake',
            launched: '2018 - 2022',
            imgFile: 'sonic-1.png',
            link: 'game/sonic-sms-remake',
            linkExternal: false,
            tags: ['Games']
        },
        {
            name: 'Fast Drink',
            launched: '2017',
            imgFile: 'fast-drink.png',
            link: 'app/fast-drink',
            linkExternal: false,
            tags: ['Apps', 'Prototypes']
        },
        {
            name: 'Ball Red 2: Kanizo Msampha',
            launched: '2017',
            imgFile: 'ballred-2.png',
            link: 'game/ball-red-2',
            linkExternal: false,
            tags: ['Games', 'Prototypes']
        },
        {
            name: 'Sunset Rush',
            launched: '2016',
            imgFile: 'sunset-rush.png',
            link: 'game/sunset-rush',
            linkExternal: false,
            tags: ['Games', 'Prototypes']
        },
        {
            name: 'Cãrlei Cards',
            launched: '2016',
            imgFile: 'carlei.png',
            link: 'game/carlei-cards',
            linkExternal: false,
            tags: ['Games']
        },
        {
            name: 'Pin Pow Breakout',
            launched: '2016',
            imgFile: 'pinpow-breakout.png',
            link: 'game/pin-pow-breakout',
            linkExternal: false,
            tags: ['Games']
        },
        {
            name: 'Eu Não Sei Quiz',
            launched: '2015',
            imgFile: 'eu-nao-sei-quiz.png',
            link: 'game/eu-nao-sei-quiz',
            linkExternal: false,
            tags: ['Games']
        },
        {
            name: 'Pin Pow Classic',
            launched: '2015',
            imgFile: 'pinpow-classic.png',
            link: 'game/pin-pow-classic',
            linkExternal: false,
            tags: ['Games']
        },
        {
            name: 'Ball Red: Mystery Island',
            launched: '2014 - 2015',
            imgFile: 'ballred-mi.png',
            link: 'game/ball-red-mystery-island',
            linkExternal: false,
            tags: ['Games']
        },
        {
            name: 'S40 Editor',
            launched: '2012 - 2015',
            imgFile: 's40-editor.png',
            link: 'website/s40-editor',
            linkExternal: false,
            tags: ['Websites']
        },
    ];

    const tags = ['All', 'Games', 'Apps', 'Websites', 'Prototypes', 'Open Source'];


    const [activeTag, setActiveTag] = useState(tags[0]);

    const filteredProjects =
        activeTag === tags[0] ? projects : projects.filter((project) => project.tags.includes(activeTag));


    return (
        <div>
            <div className="projectsTags">
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTag(tag)}
                        className={`tagButton ${activeTag === tag ? "active" : ""}`}
                    >
                        <p>{tag}</p>
                    </button>
                ))}
            </div>

            <div className="projectsList" id="projectsList">
                {filteredProjects.map((item, index) => (
                    <div
                        key={index}
                        className="projectItem"
                        onClick={() => window.open(item.link, item.linkExternal ? "_blank" : "_self")}
                    >
                        <img
                            id="icon"
                            src={`/assets/icons/projects/${item.imgFile}`}
                            alt={item.name}
                        />

                        <div id="details">
                            <p id="name">{item.name}</p>
                            <p id="tag">{item.tags.join(" • ")}</p>
                        </div>

                        <p id="date">{item.launched}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
