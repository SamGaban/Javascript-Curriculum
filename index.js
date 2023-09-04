// Variables defining
const hamburgerMenuIcon = document.querySelector('#hamburger_icon');
const hamburgerMenu = document.querySelector('#deployable_menu');
const boxToAppendCategoriesTo = document.querySelector('#toggleAbleBox');
const boxToClickSkills = document.querySelector('#skillBox');
const boxToClickWorkExperience = document.querySelector('#workExperienceBox');
const boxToClickEducation = document.querySelector('#educationBox');
const boxToClickCodingLanguages = document.querySelector('#codeLanguageBox');
const boxToClickFrameworks = document.querySelector('#frameworksBox');



// Hamburger menu
let hamburgerMenuDeployed = false;
hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenuDeployed = !hamburgerMenuDeployed;

    // Creating the menu
    let menuItemOne = document.createElement('li');
    let menuItemTwo = document.createElement('li');
    let menuItemThree = document.createElement('li');
    menuItemOne.textContent = "test";
    menuItemTwo.textContent = "plop";
    menuItemThree.textContent = "heya";

    if (hamburgerMenuDeployed) {
        hamburgerMenu.appendChild(menuItemOne);
        hamburgerMenu.appendChild(menuItemTwo);
        hamburgerMenu.appendChild(menuItemThree);
    } else {
        hamburgerMenu.innerHTML = "";
    }
});

// Reseting Boxes function

const boxRefreshToZero = () => {
    boxToAppendCategoriesTo.innerHTML = "";
};


// Skills

const skillList = [
    "Communication",
    "Leadership",
    "Versatility",
    "Decision-making",
    "Resourcefulness"
]

boxToClickSkills.addEventListener('click', () => {
    boxRefreshToZero();

    let toAppend = document.createElement('ul');
    toAppend.setAttribute('id', 'skillBoxList');
    for (let i = 0; i < skillList.length; i++) {
        let elementToAppend = document.createElement('li');
        elementToAppend.textContent = `${skillList[i]}`;
        toAppend.appendChild(elementToAppend);
    }
    boxToAppendCategoriesTo.appendChild(toAppend);
});

// Work Experience

const workExperienceList = [

    {id:0,
    job:"L'aile ou la cuisse<br>(Waremme, Belgium) - Co-Founder & Manager",
    date:"November 2021 - December 2022",
    items:[
        "Managing, training, and supervising staff.",
        "Managing budgets",
        "Developing corporate identity (visuals, social media accounts) and managing marketing campaigns",
        "Ensuring compliance with licensing, hygiene, health and safety legislations."]
    },
    {id:1,
    job:"GSK Pharmaceutics<br>(Wavre, Belgium) - Security / Welcome Desk",
    date:"March 2020 - November 2021",
    items:[
        "Handling internal security / site access / IT related tickets.",
        "Welcoming VIP, managing their safe access to the site, and creating their site-wide credentials.",
        "Conflict resolution and prevention."
    ]
    },
    {id:2,
    job:"Brussels Exposition Park<br>(Brussels, Belgium) - Security / Team Leader",
    date:"September 2019 - March 2020",
    items:[
        "Managing and securing major public events, their assembling, and disassembling."
        ]
    },
    {id:3,
    job:"St-John's International School<br>(Waterloo, Belgium) - Qualified Static Agent",
    date:"July 2018 - January 2019",
    items:[
        "Securing of high-profile private school and hosting of various VIP events."
        ]
    },
    {id:4,
    job:"Slogans SPRL<br>(Floreffe, Belgium) - Graphic Designer / Assistant to the manager",
    date:"June 2015 - September 2017",
    items:[
        "Readying advertising files for printing and cutting / Managing client relationships"
        ]
    },
];

console.log(workExperienceList);

boxToClickWorkExperience.addEventListener('click', () => {
    boxRefreshToZero();

    let toAppend = document.createElement('div');
    toAppend.setAttribute("id", "workExperienceBoxList") // to append

    for (let i = 0; i < workExperienceList.length; i++) {
        let titleOfWorkExperience = document.createElement('h6');
        titleOfWorkExperience.innerHTML = workExperienceList[i].job;
        toAppend.appendChild(titleOfWorkExperience);
    }
    boxToAppendCategoriesTo.appendChild(toAppend);
});