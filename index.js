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
let portfolioDictionary = [];
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
        portfolioDictionary = data.portfolioDictionary;
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });

// Variables defining / Specifying elements from the html
const hamburgerMenuIcon = document.querySelector('#hamburger_icon');
const hamburgerMenu = document.querySelector('#deployable_menu');
const boxToAppendCategoriesTo = document.querySelector('#toggleAbleBox');
const underbox = document.querySelector('#underbox');
const boxToClickBio = document.querySelector('#bioBox');
const boxToClickSkills = document.querySelector('#skillBox');
const boxToClickWorkExperience = document.querySelector('#workExperienceBox');
const boxToClickEducation = document.querySelector('#educationBox');
const boxToClickCodingLanguages = document.querySelector('#codeLanguageBox');
const boxToClickFrameworks = document.querySelector('#frameworksBox');

 pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;


// Function to force scroll to end of page

const ScrollDown = () => {
    window.scrollTo(0, pageHeight);
};

let darkmode = true; // Default page dark mode activation

// Hamburger menu ____________________________________________________________________________________
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
    menuItemThree.textContent = "pwak";
    menuItemThree.addEventListener('click', () => {
        open("#"); // OLD CV Test
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
            root.style.setProperty('--highlight-color', 'rgba(0,119,182,0.4)');
            root.style.setProperty('--block-background-color', '#E0E0E0');
            root.style.setProperty('--block-hover-color', '#D3D3D3');
            root.style.setProperty('--img-slideshow-block-highlight', 'black');

            profilePicture.setAttribute('src', './assets/images/profileL.png') // changing PP

            if (skillsTabOpened) { // changing graph color
                let skillGraph = document.querySelector('#skill_graph');
                skillGraph.setAttribute('src', './assets/images/graphL.png')
            }

            lightLogo.classList.remove('fa-moon');
            lightLogo.classList.add('fa-sun')

            // hamburgerMenu.innerHTML = "";
            // hamburgerMenuDeployed = false;


        } else { // Turning darkmode on
            menuItemFour.innerHTML = "<i class=\'fa-solid fa-sun\'></i> Night Mode <i class=\'fa-solid fa-toggle-on\'></i>";
            darkmode = !darkmode;
            root.style.setProperty('--font-color', '#EEEEEE');
            root.style.setProperty('--accent-color', '#00FF00');
            root.style.setProperty('--background-color', '#053B50');
            root.style.setProperty('--highlight-color', 'rgba(39, 77, 236, 0.5)');
            root.style.setProperty('--block-background-color', '#176B87');
            root.style.setProperty('--block-hover-color', '#64CCC5');
            root.style.setProperty('--img-slideshow-block-highlight', 'white');

            profilePicture.setAttribute('src', './assets/images/profile.png') // changing PP

            if (skillsTabOpened) { // changing graph color
                let skillGraph = document.querySelector('#skill_graph');
                skillGraph.setAttribute('src', './assets/images/graph.png')
            }

            lightLogo.classList.remove('fa-sun')
            lightLogo.classList.add('fa-moon');

            // hamburgerMenu.innerHTML = "";
            // hamburgerMenuDeployed = false;
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
    underbox.innerHTML = "";
    boxToAppendCategoriesTo.innerHTML = "";
    skillsTabOpened = false;
};


// About me Tab ____________________________________________________________________________________


const switchPictureAndDescription = (id) => { // Function that makes it able to switch pictures and descriptions


    let image = document.querySelector(`#slideshow_pic_${id}`)
    let description = document.querySelector(`#slideshow_desc_${id}`);
    let overlay = document.querySelector('#overlay'); // Arrow overlay (next, back)
    let pageNumber = document.querySelector('#pageNumber');

    if (imageIndex < (portfolioDictionary[id].images.length - 1)) {
        imageIndex += 1;
        let src = portfolioDictionary[id].images[imageIndex];
        image.style.backgroundImage = `url('${src}')`;
        description.innerHTML = portfolioDictionary[id].description[imageIndex];
    } else {
        imageIndex = 0;
        let src = portfolioDictionary[id].images[imageIndex];
        image.style.backgroundImage = `url('${src}')`;
        description.innerHTML = portfolioDictionary[id].description[imageIndex];
    }

    if (imageIndex === portfolioDictionary[id].images.length - 1 && multiplePictures) { // Switches between next and back arrows if needed
        overlay.setAttribute('src', "./assets/images/back.png");
        pageNumber.innerHTML = `(${imageIndex + 1}/${portfolioDictionary[id].images.length})`;
    } else if (multiplePictures) {
        overlay.setAttribute('src', "./assets/images/next.png");
        pageNumber.innerHTML = `(${imageIndex + 1}/${portfolioDictionary[id].images.length})`;
    }

}

let imageIndex = 0;

let multiplePictures = false;

let imageBoxDeployed = "";

const PopulatePortfolioDetails = (id) => { // Populating details once a miniature is clicked
    PortofolioDeploy();

    if (imageBoxDeployed === `deployed_${id}`) { // Conditional that will close the box if you click it and its already
        imageBoxDeployed = "";
        RefreshBoxToBasicState();
        PortofolioDeploy();
        return
    }

    imageBoxDeployed = `deployed_${id}`;

    let pageNumber = document.createElement('p');
    pageNumber.setAttribute('id', "pageNumber");

    multiplePictures = false;

    imageIndex = 0;

    if (portfolioDictionary[id].images.length !== 1) {
        multiplePictures = true;
    }


    let miniature = document.querySelector(`#miniature_${id}`);
    miniature.classList.add('miniature_highlight');

    let arrow = document.createElement('img');
    arrow.setAttribute('id', 'overlay');
    arrow.setAttribute('src', './assets/images/next.png');

    let githubLink = document.createElement('a');
    githubLink.setAttribute('id', 'githublink');
    githubLink.setAttribute('href', `${portfolioDictionary[id].github}`);
    githubLink.textContent = "Github Link";


    let divToAppend = document.querySelector('#underbox');
    divToAppend.innerHTML = "";

    let imagesrc = portfolioDictionary[id].images[0];
    let titlesrc = portfolioDictionary[id].title;
    let descsrc = portfolioDictionary[id].description[0];

    let image = document.createElement('div');
    image.setAttribute('id', `slideshow_pic_${id}`);
    image.setAttribute('onclick', `switchPictureAndDescription(${id})`);
    let titled = document.createElement('h2');
    let description = document.createElement('p');
    description.setAttribute('id', `slideshow_desc_${id}`);

    image.style.backgroundImage = `url('${imagesrc}')`;
    if (multiplePictures) { // Setting the background image as the image to display, so it's behind the "next" arrow
        image.appendChild(arrow);
    }
    titled.innerHTML = titlesrc;
    description.innerHTML = descsrc;

    divToAppend.appendChild(image);
    if (multiplePictures) {
        pageNumber.innerHTML = `(${1}/${portfolioDictionary[id].images.length})`;
    }
    divToAppend.appendChild(pageNumber);
    divToAppend.appendChild(titled);
    divToAppend.appendChild(description);
    divToAppend.appendChild(githubLink);

    ScrollDown();

}

const PopulateBio = () => {
    let bio = document.createElement('div');
    bio.setAttribute('id', 'bio_box');
    bio.innerHTML = "<p><em>'A man of focus, commitment, and sheer will!'</em></p><br>\n<p>As I was getting bore" +
        "d of the monotonous routine I had stuck myself into, I looked at my computer, a companion that had alwa" +
        "ys been there for distraction and vain hobbies, and realised it was time I put to profit this proficienc" +
        "y I had built over the years using numeric tools.</p>\n<br>\n<p>Coming from 'on-the-field' jobs, having dea" +
        "lt with many difficult emergency situations, I can confidently affirm that I'm immune to the 'deadline st" +
        "ress', so, bring it on!</p>"

    boxToAppendCategoriesTo.appendChild(bio);
}



const PortofolioDeploy = () => { // Displaying the short bio and the miniature "slideshow" (rip)
    RefreshBoxToBasicState();

    let box = document.createElement('div');
    box.setAttribute('id', 'miniature_box');

    for (let i = 0; i < portfolioDictionary.length; i ++) {

        let smallsrc = `./assets/images/projectimgs/${portfolioDictionary[i].id}m.png`;


        let miniature = document.createElement('img');
        miniature.classList.add('all_miniatures');
        miniature.setAttribute('id', `miniature_${portfolioDictionary[i].id}`);
        miniature.setAttribute('src', smallsrc);

        miniature.setAttribute('onclick', `PopulatePortfolioDetails(${portfolioDictionary[i].id})`);


        box.appendChild(miniature);

    }

    PopulateBio();

    boxToAppendCategoriesTo.appendChild(box);

}


boxToClickBio.addEventListener('click', () => {
    RefreshBoxToBasicState();
    PortofolioDeploy();
    ScrollDown();
})



// Skills Tab ____________________________________________________________________________________

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

// Work Experience Tab ____________________________________________________________________________________

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
        containerToAppendTo.classList.add('boxed');
        containerToAppendTo.classList.add('continuouslyHighlighted');
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
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
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

// Education Tab _________________________________________________________________________________________________

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
        boxToAppendTo.classList.add('continuouslyHighlighted');

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


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
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

const timeSinceLast = (last) => { // Function to calculate time since last challenge
    const now = new Date().getTime();

    let timeElapsed = now - last.getTime();

    let seconds = (timeElapsed / 1000).toFixed();

    let minutes = (seconds - (seconds % 60)) / 60;

    let hours = (minutes - (minutes % 60)) / 60;

    let days = (hours - (hours % 24)) / 24;

    let finalHours = hours - (days * 24);

    let string = "";

    if (days > 1) {
        string = `Last challenge in this language ${days} days and ${finalHours} hours ago!`
    } else if (days === 1) {
        string = `Last challenge in this language ${days} day and ${finalHours} hours ago!`
    } else if (finalHours <= 0) {
        string = "Last challenge in this language minutes ago!"
    } else if (days <= 0 && finalHours > 0) {
        string = `Last challenge in this language ${finalHours} hours ago!`
    }

    return string;
}


// "Coding Languages" Tab _______________________________________________________________________________________

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

        const lastChall = new Date(codingLanguagesList[id].last);

        const interval = timeSinceLast(lastChall);

        let timeSince = document.createElement('p');
        timeSince.setAttribute('id', 'timesince');
        timeSince.textContent = interval;


        let title = document.querySelector(`#language_name_${codingLanguagesList[id].id}`);
        title.innerHTML = codingLanguagesList[id].language + " <i class=\'fa-solid fa-caret-down\'></i>";
        title.classList.add('centered');

        let box = document.querySelector(`#code_div_${id}`)
        box.classList.add('continuouslyHighlighted');
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

        let displayLevel = document.createElement('h4');
        displayLevel.classList.add('display_level');
        displayLevel.innerHTML = `Level ${actualLvl}`;

        let percentageDisplay = document.createElement('p');
        percentageDisplay.textContent = `${percentage}%`;
        percentageDisplay.style.color = "white";
        percentageDisplay.classList.add('percentageLevel');

        let xpbar = document.createElement('div'); // xpbar is a background image of div
        xpbar.classList.add('xpbar');

        xpbar.style.backgroundImage = `url('./assets/images/xpbar/${Math.floor(percentage)}.png')`;

        xpbar.appendChild(percentageDisplay);

        let leftBeforeNextLevel = document.createElement('h6');
        leftBeforeNextLevel.setAttribute('id', 'xp_left_before_next');
        leftBeforeNextLevel.textContent = `${(totalPointsInLevel - progression)} challenges left before level ${actualLvl + 1}`;

        box.appendChild(codingChallengesDisplay);
        box.appendChild(codingGameStats);
        box.appendChild(hackerRankStats);
        box.appendChild(leetCodeStats);
        box.appendChild(timeSince);
        box.appendChild(displayLevel);
        box.appendChild(xpbar);
        box.appendChild(leftBeforeNextLevel);

        ScrollDown();


    }
}
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

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


// Frameworks used tab ___________________________________________________________________________________________

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
});

// Hobbies _________________________________________________________________________________________________________


// Initialize ___________________________________________________________________________________________________
// PortofolioDeploy();