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
    menuItemThree.textContent = "Old CV";
    menuItemThree.addEventListener('click', () => {
        open("https://samgaban.github.io/curriculum/");
    })

    if (hamburgerMenuDeployed) { // populating burger menu items
        hamburgerMenu.appendChild(menuItemOne);
        hamburgerMenu.appendChild(menuItemTwo);
        hamburgerMenu.appendChild(menuItemThree);
    } else { // closing the burger menu if clicked when opened
        hamburgerMenu.innerHTML = "";
    }
});

// Reseting Boxes function

const boxRefreshToZero = () => { // emptying the box items appended to it
    boxToAppendCategoriesTo.innerHTML = "";
};


// Skills



boxToClickSkills.addEventListener('click', () => { // When you click the "skills" main box
    boxRefreshToZero();

    let toAppend = document.createElement('div');
    toAppend.setAttribute('id', 'skillBoxList');
    let elementToAppend = document.createElement('img');
    elementToAppend.setAttribute('src', './assets/images/graph.png')
    toAppend.appendChild(elementToAppend);

    boxToAppendCategoriesTo.appendChild(toAppend);
});

// Work Experience

const workExperienceList = [

    {id:0,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> L'aile ou la cuisse<br><i class=\'fa-solid fa-hammer\'></i> Co-Founder & Manager",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Waremme, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> November 2021 - December 2022",
    items:[
        "<i class=\'fa-solid fa-circle\'></i> Managing, training, and supervising staff.",
        "<i class=\'fa-solid fa-circle\'></i> Managing budgets",
        "<i class=\'fa-solid fa-circle\'></i> Developing corporate identity (visuals, social media accounts) and managing marketing campaigns",
        "<i class=\'fa-solid fa-circle\'></i> Ensuring compliance with licensing, hygiene, health and safety legislations."]
    },
    {id:1,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> GSK Pharmaceutics<br><i class=\'fa-solid fa-hammer\'></i> Security / Welcome Desk",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Wavre, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> March 2020 - November 2021",
    items:[
        "<i class=\'fa-solid fa-circle\'></i> Handling internal security / site access / IT related tickets.",
        "<i class=\'fa-solid fa-circle\'></i> Welcoming VIP, managing their safe access to the site, and creating their site-wide credentials.",
        "<i class=\'fa-solid fa-circle\'></i> Conflict resolution and prevention."
    ]
    },
    {id:2,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> Brussels Exposition Park<br><i class=\'fa-solid fa-hammer\'></i> Security / Team Leader",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Brussels, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> September 2019 - March 2020",
    items:[
        "<i class=\'fa-solid fa-circle\'></i> Managing and securing major public events, their assembling, and disassembling."
        ]
    },
    {id:3,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> St-John's International School<br><i class=\'fa-solid fa-hammer\'></i> Qualified Static Agent",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Waterloo, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> July 2018 - January 2019",
    items:[
        "<i class=\'fa-solid fa-circle\'></i> Securing of high-profile private school and hosting of various VIP events."
        ]
    },
    {id:4,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> Slogans SPRL<br><i class=\'fa-solid fa-hammer\'></i> Graphic Designer / Assistant to the manager",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Floreffe, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> June 2015 - September 2017",
    items:[
        "<i class=\'fa-solid fa-circle\'></i> Readying advertising files for printing and cutting / Managing client relationships"
        ]
    },
];

let titleBoxOpenedState = "";

// Function to populate the work experience tabs when clicking on titles
const populateWorkExperience = (id) => {
    boxRefreshToZero()
    populateTitles()

    // creating a conditional that closes the titles if you click on them and
    // they are opened already

    if (titleBoxOpenedState === `open${id}`) {
        titleBoxOpenedState = "";
        boxRefreshToZero();
        populateTitles();
    } else {
        titleBoxOpenedState = `open${id}`


        let containerToAppendTo = document.querySelector(`#work_experience_${id}`);
        containerToAppendTo.style.border = '1px solid white';
        let date = document.createElement('h6');
        let location = document.createElement('h6');
        let mainList = document.createElement('ul');

        let workingDate = workExperienceList[id].date;
        let workingLocation = workExperienceList[id].location;
        let workingList = workExperienceList[id].items;

        date.innerHTML = workingDate;
        location.innerHTML = workingLocation;
        for (let i = 0; i < workingList.length; i++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = workingList[i];
            mainList.innerHTML += "<hr class='list_separator'>";
            mainList.appendChild(listItem);

        }
        containerToAppendTo.appendChild(date);
        containerToAppendTo.appendChild(location);
        containerToAppendTo.appendChild(mainList);

    }

};


const populateTitles = () => { // Creates the clickable titles of work experiences
    let toAppend = document.createElement('div');
    toAppend.setAttribute("id", "workExperienceBoxList") // to append

    for (let i = 0; i < workExperienceList.length; i++) { // creating the titles of the different experiences
        let titleOfWorkExperience = document.createElement('h6');
        titleOfWorkExperience.innerHTML = workExperienceList[i].job;
        titleOfWorkExperience.setAttribute('id', `work_experience_${workExperienceList[i].id}`);
        titleOfWorkExperience.setAttribute('onclick', `populateWorkExperience(${workExperienceList[i].id})`);
        toAppend.appendChild(titleOfWorkExperience);
    }
    boxToAppendCategoriesTo.appendChild(toAppend);
};

boxToClickWorkExperience.addEventListener('click', () => { // adding functionality to the titles
    boxRefreshToZero();
    populateTitles()
});