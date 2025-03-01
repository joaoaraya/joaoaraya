function listProjects() {
    const tabProjects = document.querySelector('#tabProjects');

    const projects = [
        {
            name: 'Sonic SMS Remake 3: Timelines',
            launched: '2022 - TBA',
            imgFile: 'sonic-3.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: '#Blogs',
            launched: '2022',
            imgFile: 'blogs.png',
            link: '',
            tags: ['Webapp', 'Prototype']
        },
        {
            name: 'Cardápio Fácil',
            launched: '2021',
            imgFile: 'cardapio-facil.png',
            link: '',
            tags: ['Webapp', 'Open source']
        },
        {
            name: 'Sonic SMS Remake 2',
            launched: '2019 - 2022',
            imgFile: 'sonic-2.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Open Sonic SMS',
            launched: '2019 - 2020',
            imgFile: 'open-sonic-sms.png',
            link: '',
            tags: ['Game', 'Open source']
        },
        {
            name: 'Grillo',
            launched: '2019 - 2020',
            imgFile: 'grillo.png',
            link: '',
            tags: ['Webapp', 'Prototype']
        },
        {
            name: 'Sonic SMS Remake',
            launched: '2018 - 2022',
            imgFile: 'sonic-1.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Fast Drink',
            launched: '2017',
            imgFile: 'fast-drink.png',
            link: '',
            tags: ['Android App', 'Prototype']
        },
        {
            name: 'Ball Red 2: Kanizo Msampha',
            launched: '2017',
            imgFile: 'ballred-2.png',
            link: '',
            tags: ['Game', 'Mobile', 'Prototype']
        },
        {
            name: 'Sunset Rush',
            launched: '2016',
            imgFile: 'sunset-rush.png',
            link: '',
            tags: ['Game', 'Mobile', 'Prototype']
        },
        {
            name: 'Cards Cârlei',
            launched: '2016',
            imgFile: 'carlei.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Pin Pow Breakout',
            launched: '2016',
            imgFile: 'pinpow-breakout.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Eu Não Sei Quiz',
            launched: '2015',
            imgFile: 'eu-nao-sei-quiz.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Ball Red Lost in Dream',
            launched: '2015',
            imgFile: 'ballred-ld.png',
            link: '',
            tags: ['Game', 'Mobile', 'Prototype']
        },
        {
            name: 'Pin Pow Classic',
            launched: '2015',
            imgFile: 'pinpow-classic.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: 'Ball Red: Mystery Island',
            launched: '2014 - 2015',
            imgFile: 'ballred-mi.png',
            link: '',
            tags: ['Game', 'Mobile']
        },
        {
            name: 'S40 Editor',
            launched: '2012 - 2015',
            imgFile: 's40-editor.png',
            link: '',
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
            <div class="projectItem" onclick="window.location.href='${item.link}'">
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