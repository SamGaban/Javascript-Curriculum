// <i class=\'fa-solid fa-caret-down\'></i>
// <i class=\'fa-solid fa-caret-left\'></i>


const jsonFileUrl = './data.json'; // Local JSON Url

// ____________________________________________________________ Defining variables for the data objects
let languagesSpoken = [];
let workExperienceList = [];
let educationDictionary = [];
let codingLanguagesList = [];
let lvlDic = [];
let frameworksUsedList = [];
// ____________________________________________________________


// Fetching the JSON data
fetch(jsonFileUrl)
    .then(response => response.json())
    .then(data => { // Filling the created variables with objects (lists of objects)
        languagesSpoken = data.languagesSpoken;
        workExperienceList = data.workExperienceList;
        educationDictionary = data.educationDictionary;
        codingLanguagesList = data.codingLanguagesList;
        lvlDic = data.lvlDic;
        frameworksUsedList = data.frameworksUsedList;
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });

// Variables defining / Specifying elements from the html
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

let darkmode = true; // Default page dark mode activation

// Hamburger menu
let hamburgerMenuDeployed = false;
hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenuDeployed = !hamburgerMenuDeployed;

    let root = document.querySelector(':root'); // targetting root for the color shift

    let profilePicture = document.querySelector('#profilePicture');

    let lightLogo = document.querySelector('#light_switch_logo');

    // Creating the nav bar hamburger menu items
    let menuItemOne = document.createElement('li');
    let menuItemTwo = document.createElement('li');
    let menuItemThree = document.createElement('li');
    let menuItemFour = document.createElement('li');
    menuItemOne.textContent = "test";
    // menuItemOne.addEventListener('click', () => {
    //     open("https://samgaban.github.io/curriculum/"); // Actions when clicking on navbar items
    // })
    menuItemTwo.textContent = "plop";
    // menuItemTwo.addEventListener('click', () => {
    //     open("https://samgaban.github.io/curriculum/");
    // })
    menuItemThree.textContent = "Old CV";
    menuItemThree.addEventListener('click', () => {
        open("https://samgaban.github.io/curriculum/"); // OLD CV Test
    })
    if (darkmode) { // Setting for the toggle switch button to display properly if navbar closed and reopened
        menuItemFour.innerHTML = "<i class=\'fa-solid fa-sun\'></i> Night Mode <i class=\'fa-solid fa-toggle-on\'></i>";
    } else {
        menuItemFour.innerHTML = "<i class=\'fa-solid fa-sun\'></i> Night Mode <i class=\'fa-solid fa-toggle-off\'></i>";
    }

    menuItemFour.addEventListener('click', () => { // dark theme toggle off / on
        if (darkmode) { // Turning lightmode on
            menuItemFour.innerHTML = "<i class=\'fa-solid fa-sun\'></i> Night Mode <i class=\'fa-solid fa-toggle-off\'></i>";
            darkmode = !darkmode;
            root.style.setProperty('--font-color', '#333333');
            root.style.setProperty('--accent-color', '#FF9900');
            root.style.setProperty('--background-color', '#F5F5F5');
            root.style.setProperty('--highlight-color', '#0077B6');
            root.style.setProperty('--block-background-color', '#E0E0E0');
            root.style.setProperty('--block-hover-color', '#D3D3D3');

            profilePicture.setAttribute('src', './assets/images/profileL.png') // changing PP

            if (skillsTabOpened) { // changing graph color
                let skillGraph = document.querySelector('#skill_graph');
                skillGraph.setAttribute('src', './assets/images/graphL.png')
            }

            lightLogo.classList.remove('fa-moon');
            lightLogo.classList.add('fa-sun')

            hamburgerMenu.innerHTML = "";
            hamburgerMenuDeployed = false;


        } else { // Turning darkmode on
            menuItemFour.innerHTML = "<i class=\'fa-solid fa-sun\'></i> Night Mode <i class=\'fa-solid fa-toggle-on\'></i>";
            darkmode = !darkmode;
            root.style.setProperty('--font-color', '#EEEEEE');
            root.style.setProperty('--accent-color', '#00FF00');
            root.style.setProperty('--background-color', '#053B50');
            root.style.setProperty('--highlight-color', 'rgba(39, 77, 236, 0.5)');
            root.style.setProperty('--block-background-color', '#176B87');
            root.style.setProperty('--block-hover-color', '#64CCC5');

            profilePicture.setAttribute('src', './assets/images/profile.png') // changing PP

            if (skillsTabOpened) { // changing graph color
                let skillGraph = document.querySelector('#skill_graph');
                skillGraph.setAttribute('src', './assets/images/graph.png')
            }

            lightLogo.classList.remove('fa-sun')
            lightLogo.classList.add('fa-moon');

            hamburgerMenu.innerHTML = "";
            hamburgerMenuDeployed = false;
        }
    })

    if (hamburgerMenuDeployed) { // populating burger menu items
        hamburgerMenu.appendChild(menuItemOne);
        hamburgerMenu.appendChild(menuItemTwo);
        hamburgerMenu.appendChild(menuItemThree);
        hamburgerMenu.appendChild(menuItemFour);
    } else { // closing the burger menu if clicked when opened
        hamburgerMenu.innerHTML = "";
    }
});

// Closing the hamburger menu / navbar if clicked outside of it
document.addEventListener('click', function(event) {
    // Check if the clicked element is not part of the navbar
    let navbar = document.getElementById('navbar');
    let clickedElement = event.target;

    if (!navbar.contains(clickedElement)) {
        // Clicked outside of the navbar, so close it
        hamburgerMenu.innerHTML = "";
        hamburgerMenuDeployed = false;
    }
});

// Resetting Boxes function

const RefreshBoxToBasicState = () => { // emptying the box each category is appended to in order to refresh
    boxToAppendCategoriesTo.innerHTML = "";
    skillsTabOpened = false;
};


// Skills

let skillsTabOpened = false;
boxToClickSkills.addEventListener('click', () => { // When you click the "skills" tab
    RefreshBoxToBasicState();

    skillsTabOpened = true;

    let toAppend = document.createElement('div');
    toAppend.setAttribute('id', 'skillBoxList');
    let elementToAppend = document.createElement('img');
    elementToAppend.setAttribute('id', 'skill_graph');
    if (darkmode) { // Changing graph color to display relative to actual light mode (dark)
        elementToAppend.setAttribute('src', './assets/images/graph.png')
    } else { // Changing graph color to display relative to actual light mode (light)
        elementToAppend.setAttribute('src', './assets/images/graphL.png')
    }

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

let titleBoxOpenedState = ""; // State variable used to define is the specific title is already opened on click

// Function to populate the work experience tabs when clicking on titles
const PopulateWorkExperienceIndividual = (id) => {
    RefreshBoxToBasicState()
    PopulateWorkExperienceTitles()

    // creating a conditional that closes the titles if you click on them and
    // they are opened already

    if (titleBoxOpenedState === `open${id}`) { // If the "opened" state of the specific title is already on
        titleBoxOpenedState = "";
        RefreshBoxToBasicState(); // Refreshing / Closing => Reopening the tab (work experience)
        PopulateWorkExperienceTitles();
    } else { // If it's no already opened => Opening sequence
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

// Function to populate the Education specific titles with the full info

let educationBoxOpenedState = ""; // State variable to check opened state

const PopulateEducationIndividual = (id) => {

    if (educationBoxOpenedState === `open_${id}`) { // If already opened
        RefreshBoxToBasicState();
        PopulateEducationTitles();
        educationBoxOpenedState = "";
    } else { // else => opening sequence
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


const PopulateEducationTitles = () => { // Populating the education tab with clickable titles when opening tab

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

// Populating each code language title when clicking on it

let codeLanguageTabDisplaying = ""; // State check variable to see if specific title already opened

const PopulateCodingLanguagesIndividual = (id) => {

    if (codeLanguageTabDisplaying === `language${id}`) { // If specific title already opened => Refresh
        RefreshBoxToBasicState();
        PopulateCodingLanguagesTitles();
        codeLanguageTabDisplaying = "";
    } else { // If specific title not already opened, opening sequence for specific title

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
        let progression = xpCount - lvlDic[actualLvl].min; // calculating current xp, xp left before lvl up
        let percentage = ((progression / totalPointsInLevel) * 100).toFixed(2);

        if (0 <= percentage && percentage <= 15) { // Defining the img src of the xp bar related to current xp
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
        percentageDisplay.style.color = "white";
        percentageDisplay.classList.add('percentageLevel');

        let xpbar = document.createElement('div'); // xpbar is a background image of div
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

const PopulateCodingLanguagesTitles = () => { // Populating the "coding language" tab on click
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


// Frameworks used tab

const PopulateFrameworksTab = () => {
    RefreshBoxToBasicState();

    for (let i = 0; i < frameworksUsedList.length; i ++) {

        let box = document.createElement('div');
        box.classList.add('frameworks_used');

        let framework = document.createElement('h3');
        framework.innerHTML = `${frameworksUsedList[i]}`;

        box.appendChild(framework);

        box.addEventListener('mouseover', () => {
            box.classList.add('highlighted');
            box.classList.add('boxed');
        })

        box.addEventListener('mouseout', () => {
            box.classList.remove('highlighted');
            box.classList.remove('boxed');
        })

        boxToAppendCategoriesTo.appendChild(box);

    }
}

boxToClickFrameworks.addEventListener('click', () => {
    PopulateFrameworksTab();
})

// Hobbies