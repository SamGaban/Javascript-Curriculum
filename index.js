// <i class=\'fa-solid fa-caret-down\'></i>
// <i class=\'fa-solid fa-caret-left\'></i>


// XP For Coding languages XP Bar
//Python
const pCodinGames = 12;
const pHackerRank = 10;
const pLeetCode = 0;

// Javascript
const jCodinGames = 0;
const jHackerRank = 0;
const jLeetCode = 0;

// C#
const cCodinGames = 0;
const cHackerRank = 0;
const cLeetCode = 0;


// Variables defining
const hamburgerMenuIcon = document.querySelector('#hamburger_icon');
const hamburgerMenu = document.querySelector('#deployable_menu');
const boxToAppendCategoriesTo = document.querySelector('#toggleAbleBox');
const boxToClickSkills = document.querySelector('#skillBox');
const boxToClickWorkExperience = document.querySelector('#workExperienceBox');
const boxToClickEducation = document.querySelector('#educationBox');
const boxToClickCodingLanguages = document.querySelector('#codeLanguageBox');
const boxToClickFrameworks = document.querySelector('#frameworksBox');
const boxToClickHobbies = document.querySelector('#hobbiesBox');

 pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;


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


const languagesSpoken = [
    {id:0,
    language:"English",
    level:"C2"},
    {id:1,
    language:"French",
    level:"C2"},
    {id:2,
    language:"Dutch",
    level:"A2"},
    {id:3,
    language:"Swedish",
    level:"A1"}
];



boxToClickSkills.addEventListener('click', () => { // When you click the "skills" main box
    RefreshBoxToBasicState();

    let toAppend = document.createElement('div');
    toAppend.setAttribute('id', 'skillBoxList');
    let elementToAppend = document.createElement('img');
    elementToAppend.setAttribute('src', './assets/images/graph.png')
    toAppend.appendChild(elementToAppend);


    // LANGUAGES PART
    let mainLanguagesDiv = document.createElement('div')
    mainLanguagesDiv.setAttribute('id', 'main_languages_div');
    for (let i = 0; i < languagesSpoken.length; i++) {
        let languagesDiv = document.createElement('div');
        languagesDiv.classList.add('individual_language_box');
        let language = document.createElement('h4');
        let level = document.createElement('h6');
        language.innerHTML = languagesSpoken[i].language;
        level.innerHTML = languagesSpoken[i].level;
        languagesDiv.appendChild(language);
        languagesDiv.appendChild(level);
        mainLanguagesDiv.appendChild(languagesDiv)
    }
    toAppend.appendChild(mainLanguagesDiv);
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
        containerToAppendTo.innerHTML = workExperienceList[id].job + " <i class='fa-solid fa-caret-down'></i>";
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
        titleOfWorkExperience.innerHTML = workExperienceList[i].job + " <i class='fa-solid fa-caret-left'></i>";
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
    name:"<i class='fa-solid fa-school-flag'></i> Technifutur",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> July 2023 - Ongoing",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Seraing - Belgium"
    },
    {id:1,
    type:"<i class=\'fa-solid fa-graduation-cap\'></i> Python & Full Stack Web Developer",
    name:"<i class='fa-solid fa-school-flag'></i> The App Brewery (Through Udemy)",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> December 2022 - June 2023",
    location:"<i class=\'fa-solid fa-location-dot\'></i> London, England"
    },
    {id:2,
    type:"<i class=\'fa-solid fa-graduation-cap\'></i> Assistant to the prevention and security professions",
    name:"<i class='fa-solid fa-school-flag'></i> Namur Technical Institute",
    date:"<i class=\'fa-solid fa-calendar-days\'></i> September 2017 - June 2018",
    location:"<i class=\'fa-solid fa-location-dot\'></i> Namur, BELGIUM"
    },
    {id:3,
    type:"<i class=\'fa-solid fa-graduation-cap\'></i> Graphic industries technician",
    name:"<i class='fa-solid fa-school-flag'></i> Institute of Technical Arts Education",
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

        RefreshBoxToBasicState();
        PopulateEducationTitles();

        let title = document.querySelector(`.education_title_${id}`);
        title.classList.remove('highlighted')

        title.innerHTML = educationDictionary[id].type + " <i class='fa-solid fa-caret-down'></i>";
        // title.innerHTML = educationDictionary[id].type + " test";

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
        educationTitle.innerHTML = educationDictionary[i].type + " <i class='fa-solid fa-caret-left'></i>";
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

// "Coding Languages" Tab

const codingLanguagesList = [
    {id:0,
    language:"<i class='fa-solid fa-brands fa-python'></i> Python",
    codinggame:pCodinGames,
    hackerrank:pHackerRank,
    leetcode:pLeetCode},
    {id:1,
    language:"<i class='fa-solid fa-brands fa-js'></i> Javascript",
    codinggame:jCodinGames,
    hackerrank:jHackerRank,
    leetcode:jLeetCode},
    {id:2,
    language:"<i class='fa-solid fa-c'></i><i class='fa-solid fa-hashtag'></i> C Sharp",
    codinggame:cCodinGames,
    hackerrank:cHackerRank,
    leetcode:cLeetCode}
];

// Populating each code language title when clicking on it

let codeLanguageTabDisplaying = "";

const PopulateCodingLanguagesIndividual = (id) => {

    if (codeLanguageTabDisplaying === `language${id}`) {
        RefreshBoxToBasicState();
        PopulateCodingLanguagesTitles();
        codeLanguageTabDisplaying = "";
    } else {

        codeLanguageTabDisplaying = `language${id}`;
        RefreshBoxToBasicState();
        PopulateCodingLanguagesTitles();

        let title = document.querySelector(`#language_name_${codingLanguagesList[id].id}`);
        title.innerHTML = codingLanguagesList[id].language + " <i class=\'fa-solid fa-caret-down\'></i>";
        title.classList.add('centered');

        let box = document.querySelector(`#code_div_${id}`)
        box.classList.add('highlighted');
        box.classList.add('boxed');

        let one = parseInt(codingLanguagesList[id].codinggame);
        let two = parseInt(codingLanguagesList[id].hackerrank);
        let three = parseInt(codingLanguagesList[id].leetcode);

        let codingChallengesDisplay = document.createElement('h2');
        codingChallengesDisplay.classList.add('coding_challenge_display');
        codingChallengesDisplay.textContent = "Coding Challenges Completed";
        let codingGameStats = document.createElement('h5'); // Stats for each site
            codingGameStats.innerHTML = `CodinGame: ${one}`;
        let hackerRankStats = document.createElement('h5');
            hackerRankStats.innerHTML = `HackerRank: ${two}`;
        let leetCodeStats = document.createElement('h5');
            leetCodeStats.innerHTML = `LeetCode: ${three}`;

        let xpCount = one + two + three; // total of xp from each site

        let actualLvl = 0;

        let imgsrc = ""; // img src that's gonna change depending on the level and percentage
        // defining what level the language is with his current xp
        for (let i = 0; i < lvlDic.length; i++) {
            if (xpCount >= lvlDic[i].min && xpCount <= lvlDic[i].max) {
                actualLvl = lvlDic[i].lvl;
            }
        }

        let totalPointsInLevel = lvlDic[actualLvl].max - lvlDic[actualLvl].min;
        let progression = xpCount - lvlDic[actualLvl].min;
        let percentage = ((progression / totalPointsInLevel) * 100).toFixed(2);

        if (0 <= percentage && percentage <= 15) {
            imgsrc = "xp10"
        } else if (16 <= percentage && percentage <= 25) {
            imgsrc = "xp20"
        } else if (26 <= percentage && percentage <= 35) {
            imgsrc = "xp30"
        } else if (36 <= percentage && percentage <= 45) {
            imgsrc = "xp40"
        } else if (46 <= percentage && percentage <= 55) {
            imgsrc = "xp50"
        } else if (56 <= percentage && percentage <= 65) {
            imgsrc = "xp60"
        } else if (66 <= percentage && percentage <= 75) {
            imgsrc = "xp70"
        } else if (76 <= percentage && percentage <= 85) {
            imgsrc = "xp80"
        } else if (86 <= percentage && percentage <= 95) {
            imgsrc = "xp90"
        } else if (96 <= percentage) {
            imgsrc = "xp100"
        }

        let displayLevel = document.createElement('h4');
        displayLevel.classList.add('display_level');
        displayLevel.innerHTML = `Level ${actualLvl}`;

        let percentageDisplay = document.createElement('p');
        percentageDisplay.textContent = `${percentage}%`;
        percentageDisplay.style.color = "black";
        percentageDisplay.classList.add('percentageLevel');

        let xpbar = document.createElement('div');
        xpbar.classList.add('xpbar');
        xpbar.classList.add(imgsrc);
        xpbar.appendChild(percentageDisplay);

        let leftBeforeNextLevel = document.createElement('h6');
        leftBeforeNextLevel.textContent = `${(totalPointsInLevel - progression)} challenges left before level ${actualLvl + 1}`;

        box.appendChild(codingChallengesDisplay);
        box.appendChild(codingGameStats);
        box.appendChild(hackerRankStats);
        box.appendChild(leetCodeStats);
        box.appendChild(displayLevel);
        box.appendChild(xpbar);
        box.appendChild(leftBeforeNextLevel);

        ScrollDown();


    }
}


// Populating the "coding languages" tab

const PopulateCodingLanguagesTitles = () => {
  for (let i = 0; i < codingLanguagesList.length; i++) {
      let codeDiv = document.createElement('div');
      codeDiv.setAttribute('id', `code_div_${codingLanguagesList[i].id}`);
      codeDiv.classList.add('code_div');
      codeDiv.classList.add('highlighted');
      codeDiv.setAttribute('onclick', `PopulateCodingLanguagesIndividual(${codingLanguagesList[i].id})`);

      let languageName = document.createElement('h3');
      languageName.setAttribute('id', `language_name_${codingLanguagesList[i].id}`);
      languageName.innerHTML = codingLanguagesList[i].language + " <i class=\'fa-solid fa-caret-left\'></i>";

      codeDiv.appendChild(languageName);
      boxToAppendCategoriesTo.appendChild(codeDiv);
      ScrollDown();
  }
}

boxToClickCodingLanguages.addEventListener('click', () => {
    RefreshBoxToBasicState();
    PopulateCodingLanguagesTitles();
});

const lvlDic = [
    {lvl:0, min:-5, max:-1},
    {lvl:1, min:0, max:5},
    {lvl:2, min:6, max:10},
    {lvl:3, min:11, max:15},
    {lvl:4, min:16, max:20},
    {lvl:5, min:21, max:25},
    {lvl:6, min:26, max:30},
    {lvl:7, min:31, max:35},
    {lvl:8, min:36, max:40},
    {lvl:9, min:41, max:45},
    {lvl:10, min:46, max:50},
    {lvl:11, min:51, max:60},
    {lvl:12, min:61, max:70},
    {lvl:13, min:71, max:85},
    {lvl:14, min:86, max:100},
    {lvl:15, min:101, max:120},
    {lvl:16, min:121, max:140},
    {lvl:17, min:141, max:165},
    {lvl:18, min:166, max:190},
    {lvl:19, min:191, max:250},
    {lvl:20, min:251, max:300},
];

// Frameworks used tab

// Define the URL of the JSON file on your local server
const jsonFileUrl = './data.json';

// Fetch the JSON data
fetch(jsonFileUrl)
    .then(response => response.json())
    .then(data => {
        // You can now work with the JSON data here
        console.log(data.languagesSpoken[1]); // Output: John Doe
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
