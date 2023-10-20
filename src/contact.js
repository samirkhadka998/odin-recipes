export default function contact(approot) {
    let subDiv = document.createElement('div');

    let section = document.createElement('div');
    section.className = "contactsection"
    let headerTwo = document.createElement('h2');
    headerTwo.textContent = 'Contact';
    section.appendChild(headerTwo);

    let ul= document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = `Contact # : 98495939292`
    ul.appendChild(li);
    let li1 = document.createElement('li');
    li1.textContent = `Address # : 12 street NewCastle`
    ul.appendChild(li1)


    section.appendChild(ul);
    subDiv.appendChild(section);
    approot.appendChild(subDiv);
}