console.log('hello I am from src folder')
let content = document.querySelector('#content');
let para = document.createElement('p');
para.textContent = 'This is wonderful page';
let spaninfo = document.createElement('span');
spaninfo.textContent = "Yes it is ";
content.appendChild(para)
content.appendChild(spaninfo)