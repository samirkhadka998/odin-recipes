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

let list = document.querySelectorAll('#content li');
Array.from(list).forEach(li => {
    li.addEventListener('click', showContent);
});

function showContent(e) {
    console.log(e.target.textContent)
    switch (e.target.textContent) {
        case "Home":
            home();
            break;
        case "Contact":
            contact();
            break;
        case "Menu":
            menu();
            break;
    
        default:
            break;
    }
}





