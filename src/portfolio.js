const header = {

    homepage: 'https://dimovdev.github.io/',
    title: 'DimovDev',
}

const about = {

    name: 'Ivan Dimov',
    role: 'Full Stack Web Developer',
    description:
        'Web Developer with 4+ years of experience in developing web applications, content management systems, websites, and e-shops. I have good communication and organization skills gained from working as a sales representative, warehouse manager, and other trade positions.  I have the ability to take important decisions in stressful situations at the workplace and to properly allocate the necessary time to complete  tasks.',
    resume: 'https://drive.google.com/file/d/1gW-WBRf7-DHhFQi3el4rHtqgyHV5-whm/view?usp=sharing',
    social: {
        linkedin: 'https://linkedin.com/in/ivan-dimov-4826b515a',
        github: 'https://github.com/DimovDev',
        stack_overflow: 'https://stackoverflow.com/users/11071080/ivan-dimov',

    },
}

const projects = [

    {
        name: 'Edi Rent a Car',
        description:
            'Edi Rent a Car is a CMS (Content management system)  for a rent-a-car company. The project contains an admin panel with CRUD for all the features.The CMS has a login and registration where the options for registration are with Facebook or email address with email verification,integrated 3-way payment,multi-languages and multi-currencies support',
        stack: ['Laravel', 'Blade', 'Bootstrap 4', 'Javascript', 'JQuery', 'AJAX'],
        // sourceCode: 'https://github.com',
        livePreview: 'https://edirentacar.bg',
    },
    {
        name: 'Forum Bundesgericht',
        description:
            `The project is a CMS (Content management system). "Forum Bundesgericht" is a private, politically and denominational independent website that enables interested citizens to publicly, analyze, comment on and debate all judgments of the Swiss Federal Supreme Court.The project contains an admin panel with CRUD for all features. The CMS has integrated  multi-languages support and third party API's checking for allowed languages and swearing languages.`,
        stack: ['Laravel', 'Blade', 'Bootstrap 4', 'Javascript', 'JQuery', 'AJAX'],
        // sourceCode: 'https://github.com',
        livePreview: 'https://forum-bger.ch/',
    },
    {
        name: 'Hemus Build',
        description:
            `"Hemus Build" is a SPA (Single Page Application). The project is a simple website of building company.`,
        stack: ['Bootstrap 4', 'Javascript', 'PHP', 'HTML 5', 'CSS 3'],
        // sourceCode: 'https://github.com',
        livePreview: 'https://hemusbuild.com',
    },
    {
        name: 'WEB TECH 3D',
        description:
            `"WEB TECH 3D" is a SPA (Single Page Application). The project is a website on our start-up company, which was disintegrated.`,
        stack: ['Bootstrap 4', 'Javascript', 'HTML 5', 'CSS 3'],
        sourceCode: 'https://github.com/DimovDev/webtech3d',
        livePreview: 'https://dimovdev.github.io/webtech3d/',
    },
    {
        name: 'Forum Bundesgerichtshof',
        description:
            `The project is a CMS (Content management system). "Forum Bundesgerichtshof" is a private, politically and denominational independent website that enables interested citizens to publicly, analyze, comment on and debate all judgments of the German Supreme Court.The project contains an admin panel with CRUD for all features. The CMS has integrated third party API's checking for allowed languages and swearing languages. The project has integrated a web crawler with a Cron job for a daily update of new decisions from the German Supreme Court too.`,
        stack: ['Laravel', 'Blade', 'Bootstrap 4', 'Javascript', 'JQuery', 'AJAX'],
        // sourceCode: 'https://github.com/DimovDev/DimovDev.github.io',
        livePreview: 'https://forum-bundesgerichtshof.de',
    },
    {
        name: 'Forum Supreme Court',
        description:
            `The project is a CMS (Content management system). "Forum Supreme Court" is a private, politically and denominational independent website that enables interested citizens to publicly, analyze, comment on and debate all judgments of the US Supreme Court.The project contains an admin panel with CRUD for all features. The CMS has integrated third party API's checking for allowed languages and swearing languages. The project has integrated a web crawler with a Cron job for a daily update of new decisions from the US Supreme Court too.`,
        stack: ['Laravel', 'Blade', 'Bootstrap 4', 'Javascript', 'JQuery', 'AJAX'],
        livePreview: 'https://forum-supremecourt.us/',
    },
    {
        name: 'Edi Ins',
        description:
            `Edi Ins is a CMS (Content management system) for an insurance broker company that manages clients, policies, events, and agents.The project contains an admin panel with CRUD for all the features. The CMS has integrated roles and permissions with different access for users.
`,
        stack: ['Laravel', 'Blade', 'Bootstrap 4', 'Javascript', 'JQuery', 'AJAX'],
        // sourceCode: 'https://github.com/DimovDev/DimovDev.github.io',
        livePreview: 'https://ins.edirentacar.bg/',
    },
    {
        name: 'Battleship',
        description:
            `Implementation a simple game of battleships which allow a single human player to play a one-sided game of battleships against the computer.
  To start game press the “Play button”. There you will see a screen with squares.Press on any of the squares to find ships in the water. After every shot there will be information whether you missed or hit a ship. If you have difficulties guessing the position of the ships or just want to test it faster you can press the “Show” button, which will display the position of the ships in a grid. 
            `,
        stack: ['Laravel', 'Blade', 'Bootstrap 4', 'Javascript', 'JQuery', 'AJAX'],
        sourceCode: 'https://github.com/DimovDev/Battleships',
        livePreview: 'https://dimovdev.edirentacar.bg/',
    },
    {
        name: 'Portfolio',
        description:
            `My personal portfolio website. The site contains information about my client projects who I made as a freelancer, programmer skills, and  my resume.`,
        stack: ['Javascript', 'React', 'Material UI', 'HTML 5', 'CSS 3' ,'GH-Pages'],
        sourceCode: 'https://github.com/DimovDev/DimovDev.github.io',
        livePreview: 'https://dimovdev.github.io/',
    },
]

const skills = [
    'PHP',
    'HTML 5',
    'CSS 3',
    'JavaScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Linux',
    'Laravel',
    'Bootstrap',
    'Polaris',
    'C-panel',
    'Docker',
    'Apache',
    'Nginx',
    'MySQL',
    'Maria DB',
    'Jira'
]

const contact = {

    email: 'dimovdev@gmail.com',
}

export {header, about, projects, skills, contact}
