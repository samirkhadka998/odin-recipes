import contact from "./contact";
import home from "./home";
import menu from "./menu";
let nav = ['Home', 'Menu','Contact']


let content = document.querySelector('#content');

let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.textContent = nav[i]
    ul.appendChild(li);
    
}

content.appendChild(ul)
let approot = document.createElement('div');
approot.className = "approot"
content.appendChild(approot)

menu(approot)

let list = document.querySelectorAll('#content li');
Array.from(list).forEach(li => {
    li.addEventListener('click', showContent);
});

function showContent(e) {
    console.log(e.target.textContent)
    approot.textContent = '';
    switch (e.target.textContent) {
        case "Home":
            home(approot);
            break;
        case "Contact":
            contact(approot);
            break;
        case "Menu":
            menu(approot)
            break;
    
        default:
            break;
    }
}





