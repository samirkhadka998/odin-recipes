export default function home(approot) {
    class Day{
        constructor(day, opening, closing){
            this.day = day;
            this.opening = opening;
            this.closing = closing;
        }
    }

    let schedule = [
        new Day("Sunday", "7:00", "19:00"),
        new Day("Monday", "7:00", "19:00"),
        new Day("Tuesday", "7:00", "19:00"),
        new Day("Wednesday", "7:00", "19:00"),
        new Day("Thrusday", "7:00", "19:00"),
        new Day("Friday", "7:00", "15:00"),
        new Day("Saturday", "7:00", "9:00")
    ]

    let subDiv = document.createElement('div');

    let section = document.createElement('div');
    section.className = "homesection"
    let headerTwo = document.createElement('h2');
    headerTwo.textContent = 'Opening Time';
    section.appendChild(headerTwo);

    let ul= document.createElement('ul');
    schedule.forEach(i => {
        let li = document.createElement('li');
        li.textContent = `${i.day} - ${i.opening} : ${i.closing}`;
        ul.appendChild(li);
    })
    section.appendChild(ul);
    subDiv.appendChild(section);
    approot.appendChild(subDiv);
}