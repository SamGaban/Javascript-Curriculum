// Variables defining
const hamburgerMenuIcon = document.querySelector('#hamburger_icon');
const hamburgerMenu = document.querySelector('#deployable_menu');
const boxToAppendCategoriesTo = document.querySelector('#toggleAbleBox');
const boxToClickSkills = document.querySelector('#skillBox');
const boxToClickWorkExperience = document.querySelector('#workExperienceBox');
const boxToClickEducation = document.querySelector('#educationBox');
const boxToClickCodingLanguages = document.querySelector('#codeLanguageBox');
const boxToClickFrameworks = document.querySelector('#frameworksBox');
const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;


// Function to force scroll to end of page

const ScrollDown = () => {
    window.scrollTo(0, pageHeight);
};


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

// Resetting Boxes function

const RefreshBoxToBasicState = () => { // emptying the box items appended to it
    boxToAppendCategoriesTo.innerHTML = "";
};


// Skills



boxToClickSkills.addEventListener('click', () => { // When you click the "skills" main box
    RefreshBoxToBasicState();

    let toAppend = document.createElement('div');
    toAppend.setAttribute('id', 'skillBoxList');
    let elementToAppend = document.createElement('img');
    elementToAppend.setAttribute('src', './assets/images/graph.png')
    toAppend.appendChild(elementToAppend);

    boxToAppendCategoriesTo.appendChild(toAppend);
    ScrollDown();
});

// Work Experience

const workExperienceList = [

    {id:0,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> L'aile ou la cuisse<br><i class=\'fa-solid fa-hammer\'></i> Co-Founder & Manager",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Waremme, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> November 2021 - December 2022",
    items:[
        "Managing, training, and supervising staff.",
        "Managing budgets",
        "Developing corporate identity (visuals, social media accounts) and managing marketing campaigns",
        "Ensuring compliance with licensing, hygiene, health and safety legislations."]
    },
    {id:1,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> GSK Pharmaceutics<br><i class=\'fa-solid fa-hammer\'></i> Security / Welcome Desk",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Wavre, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> March 2020 - November 2021",
    items:[
        "Handling internal security / site access / IT related tickets.",
        "Welcoming VIP, managing their safe access to the site, and creating their site-wide credentials.",
        "Conflict resolution and prevention."
    ]
    },
    {id:2,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> Brussels Exposition Park<br><i class=\'fa-solid fa-hammer\'></i> Security / Team Leader",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Brussels, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> September 2019 - March 2020",
    items:[
        "Managing and securing major public events, their assembling, and disassembling."
        ]
    },
    {id:3,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> St-John's International School<br><i class=\'fa-solid fa-hammer\'></i> Qualified Static Agent",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Waterloo, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> July 2018 - January 2019",
    items:[
        "Securing of high-profile private school and hosting of various VIP events."
        ]
    },
    {id:4,
    job:"<i class=\'fa-solid fa-location-crosshairs\'></i> Slogans SPRL<br><i class=\'fa-solid fa-hammer\'></i> Graphic Designer / Assistant to the manager",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Floreffe, Belgium",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> June 2015 - September 2017",
    items:[
        "Readying advertising files for printing and cutting / Managing client relationships"
        ]
    },
];

let titleBoxOpenedState = "";

// Function to populate the work experience tabs when clicking on titles
const PopulateWorkExperienceIndividual = (id) => {
    RefreshBoxToBasicState()
    PopulateWorkExperienceTitles()

    // creating a conditional that closes the titles if you click on them and
    // they are opened already

    if (titleBoxOpenedState === `open${id}`) {
        titleBoxOpenedState = "";
        RefreshBoxToBasicState();
        PopulateWorkExperienceTitles();
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

        ScrollDown();
    }

};


// Function that shows the titles of work experiences in the tab

const PopulateWorkExperienceTitles = () => { // Creates the clickable titles of work experiences
    let toAppend = document.createElement('div');
    toAppend.setAttribute("id", "workExperienceBoxList") // to append

    for (let i = 0; i < workExperienceList.length; i++) { // creating the titles of the different experiences
        let titleOfWorkExperience = document.createElement('h6');
        titleOfWorkExperience.innerHTML = workExperienceList[i].job;
        titleOfWorkExperience.classList.add('highlighted')
        titleOfWorkExperience.setAttribute('id', `work_experience_${workExperienceList[i].id}`);
        titleOfWorkExperience.setAttribute('onclick', `PopulateWorkExperienceIndividual(${workExperienceList[i].id})`);
        toAppend.appendChild(titleOfWorkExperience);
    }
    boxToAppendCategoriesTo.appendChild(toAppend);
    ScrollDown();
};

boxToClickWorkExperience.addEventListener('click', () => { // adding functionality to the titles
    RefreshBoxToBasicState();
    PopulateWorkExperienceTitles()
});

// Education Tabs

// Education Object

const educationDictionary = [
    {id:0,
    type:"<i class=\'fa-solid fa-graduation-cap\'></i> AI Integration Specialized Web Developer",
    name:"<i class=\'fa-solid fa-location-crosshairs\'></i> Technifutur",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> July 2023 - Ongoing",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Seraing - Belgium"
    },
    {id:1,
    type:"<i class=\'fa-solid fa-graduation-cap\'></i> Python developer & Full Stack web developer",
    name:"<i class=\'fa-solid fa-location-crosshairs\'></i> The App Brewery",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> December 2022 - June 2023",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Namur, BELGIUM"
    },
    {id:2,
    type:"<i class=\'fa-solid fa-graduation-cap\'></i> Assistant to the prevention and security professions",
    name:"<i class=\'fa-solid fa-location-crosshairs\'></i> Namur Technical Institute",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> September 2017 - June 2018",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Namur, BELGIUM"
    },
    {id:3,
    type:"<i class=\'fa-solid fa-graduation-cap\'></i> Graphic industries technician",
    name:"<i class=\'fa-solid fa-location-crosshairs\'></i> Institute of Technical Arts Education",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> September 2013 - June 2015",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Namur, BELGIUM"
    }
];


// Function to populate the Education titles with the rest of information

let educationBoxOpenedState = "";

const PopulateEducationIndividual = (id) => {

    if (educationBoxOpenedState === `open_${id}`) { // If already opened
        RefreshBoxToBasicState();
        PopulateEducationTitles();
        educationBoxOpenedState = "";
    } else { // else => open
        educationBoxOpenedState = `open_${id}`

        let title = document.querySelector(`.education_title_${id}`);
        console.log(title.classList);
        title.classList.remove('highlighted')

        RefreshBoxToBasicState();
        PopulateEducationTitles();

        let boxToAppendTo = document.querySelector(`#education_box_${id}`)

        let establishment = document.createElement('h6');
        establishment.innerHTML = educationDictionary[id].name;

        let date = document.createElement('h6');
        date.innerHTML = educationDictionary[id].date;

        let location = document.createElement('h6');
        location.innerHTML = educationDictionary[id].location;

        boxToAppendTo.appendChild(establishment);
        boxToAppendTo.appendChild(date);
        boxToAppendTo.appendChild(location);

        boxToAppendTo.classList.add('boxed');
        boxToAppendTo.classList.add('highlighted');

        ScrollDown();
    }
}



// Function to populate the "Education" tab


const PopulateEducationTitles = () => {

    for (let i = 0; i < educationDictionary.length; i++) {
        let educationSubDiv = document.createElement('div');
        educationSubDiv.setAttribute('id', `education_box_${educationDictionary[i].id}`);

        let educationTitle = document.createElement('h6');
        educationTitle.innerHTML = educationDictionary[i].type;
        educationTitle.classList.add(`education_title_${educationDictionary[i].id}`);
        educationTitle.classList.add('highlighted');
        educationSubDiv.appendChild(educationTitle);
        educationSubDiv.setAttribute('onclick', `PopulateEducationIndividual(${educationDictionary[i].id})`)
        educationSubDiv.classList.add('education_sub_div');

        boxToAppendCategoriesTo.appendChild(educationSubDiv);
        ScrollDown();
    }


};

boxToClickEducation.addEventListener('click', () => {
    RefreshBoxToBasicState();
    PopulateEducationTitles();
});