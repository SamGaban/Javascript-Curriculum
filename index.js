// Variables defining
const hamburgerMenuIcon = document.querySelector('#hamburger_icon');
const hamburgerMenu = document.querySelector('#deployable_menu');


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
        console.log("test");
        hamburgerMenu.appendChild(menuItemOne);
        hamburgerMenu.appendChild(menuItemTwo);
        hamburgerMenu.appendChild(menuItemThree);
    } else {
        console.log('yop');
        hamburgerMenu.innerHTML = "";
    }
});