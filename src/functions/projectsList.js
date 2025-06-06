function listProjects() {
    const tabProjects = document.querySelector('#tabProjects');

    const projects = [
        {
            name: 'Sonic SMS Remake 3: Timelines',
            launched: '2022 - TBA',
            imgFile: 'sonic-3.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile']
        },
        {
            name: '#Blogs',
            launched: '2022',
            imgFile: 'blogs.png',
            link: 'https://www.figma.com/design/SXB78fTpIk6mBlihQfylZd/-Blogs?node-id=0-1&p=f&t=NRcuv9s3Wk3sjtil-0',
            linkExternal: true,
            tags: ['Webapp', 'Prototype']
        },
        {
            name: 'Cardápio Fácil',
            launched: '2021',
            imgFile: 'cardapio-facil.png',
            link: 'https://github.com/joaoaraya/prj-cardapioFacil',
            linkExternal: true,
            tags: ['Webapp', 'Open source']
        },
        {
            name: 'Sonic SMS Remake 2',
            launched: '2019 - 2022',
            imgFile: 'sonic-2.png',
            link: 'https://sonic-sms-remake.blogspot.com/p/two.html',
            linkExternal: true,
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Open Sonic SMS',
            launched: '2019 - 2020',
            imgFile: 'open-sonic-sms.png',
            link: 'https://github.com/joaoaraya/prj-openSonicSMS',
            linkExternal: true,
            tags: ['Game', 'Open source']
        },
        {
            name: 'Grillo',
            launched: '2019 - 2020',
            imgFile: 'grillo.png',
            link: 'https://www.figma.com/design/pQaMD4aDuJgb61CS6bINi9/Grillo?node-id=2-2&p=f&t=TBtlzymiSTWFMR4E-0',
            linkExternal: true,
            tags: ['Webapp', 'Prototype']
        },
        {
            name: 'Sonic SMS Remake',
            launched: '2018 - 2022',
            imgFile: 'sonic-1.png',
            link: 'https://sonic-sms-remake.blogspot.com/p/one.html',
            linkExternal: true,
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Fast Drink',
            launched: '2017',
            imgFile: 'fast-drink.png',
            link: '',
            linkExternal: false,
            tags: ['Android App', 'Prototype']
        },
        {
            name: 'Ball Red 2: Kanizo Msampha',
            launched: '2017',
            imgFile: 'ballred-2.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile', 'Prototype']
        },
        {
            name: 'Sunset Rush',
            launched: '2016',
            imgFile: 'sunset-rush.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile', 'Prototype']
        },
        {
            name: 'Cãrlei Cards',
            launched: '2016',
            imgFile: 'carlei.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Pin Pow Breakout',
            launched: '2016',
            imgFile: 'pinpow-breakout.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Eu Não Sei Quiz',
            launched: '2015',
            imgFile: 'eu-nao-sei-quiz.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Pin Pow Classic',
            launched: '2015',
            imgFile: 'pinpow-classic.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Ball Red: Mystery Island',
            launched: '2014 - 2015',
            imgFile: 'ballred-mi.png',
            link: '',
            linkExternal: false,
            tags: ['Game', 'Mobile']
        },
        {
            name: 'S40 Editor',
            launched: '2012 - 2015',
            imgFile: 's40-editor.png',
            link: '',
            linkExternal: false,
            tags: ['Website']
        },
    ];

    // Tag name / Button name
    const tags = {
        'All': 'All',
        'Webapp': 'Webapps',
        'Game': 'Games',
        'Prototype': 'Prototypes',
        'Open source': 'Open source'
    };


    const filterProjects = (tag) => {
        return tag === 'All' ? projects : projects.filter(project => project.tags.includes(tag));
    };

    const buttonsTag = () => (
        Object.keys(tags).map(tag => `
            <button 
                onclick="displayProjects('${tag}'), selectTag(event, '${tag}')" 
                class="tagButton ${tag === 'All' ? 'active' : ''}">
                <p>${tags[tag]}</p>
            </button>
        `).join('')
    );

    const projectCard = (item) => {
        return `
            <div class="projectItem" onclick="window.open('${item.link}', '${item.linkExternal ? '_blank' : '_self'}')">
                <img id="icon" src="./src/icons/projects/${item.imgFile}" alt="${item.name}" />
                <div id="details">
                    <p id="name">${item.name}</p>
                    <p id="tag">${item.tags.join(' • ')}</p>
                </div>
                <p id="date">${item.launched}</p>
            </div>
        `;
    };

    const displayProjectList = (filteredProjects) => {
        const projectsList = document.querySelector('#projectsList');
        projectsList.innerHTML = filteredProjects.map(projectCard).join('');
    };


    // Generate page
    tabProjects.innerHTML = `
        <div class="projectsTags">
            ${buttonsTag()}
        </div>

        <div class="projectsList" id="projectsList">
            ${projects.map(projectCard).join('')}
        </div>
    `;

    // Filter buttons function
    window.displayProjects = (tag) => {
        const filteredProjects = filterProjects(tag);
        displayProjectList(filteredProjects);
    };
}

function selectTag(event) {
    const tagButtons = document.querySelectorAll('.tagButton');

    // Clear "active" class for all buttons
    tagButtons.forEach(button => button.classList.remove('active'));

    // Add "active" class to button
    event.currentTarget.classList.add('active');
}

listProjects();