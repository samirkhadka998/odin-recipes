export default function menu(approot) {
    class Menu {
        heading = [];
        imgDetail = [];
        paragraph;
        ingredinents = [];
        step = []
    }


    let menu1 = new Menu();
    menu1.heading = ['Baguette Pizza', 'Ingredients', 'Steps'];
    menu1.imgDetail = ['./img/BaguettePizza.jpg', 'Baguette Pizza']
    menu1.paragraph = 'Take a regular baguette and split lengthwise to create a tasty pizza. Toppings can be as simple as sauce and cheese, or upgrade with pepperoni and sausage.';
    menu1.ingredinents = [
        '1 French baguette',
        '1/2 cup pizza sauce, or as needed',
        '2/3 cup shredded mozzarella cheese',
        '2 ounces cooked and crumbled sausage',
        '2 ounces mini pepperoni slices'
    ]
    menu1.step = [
        'Preheat the oven to 375 degrees F (190 degrees C).',
        'Split baguette in half lengthwise. Warm pizza sauce in a microwave-safe bowl until hot, about 45 seconds.',
        'Spread pizza sauce on baguette, sprinkle on cheese, and scatter sausage and pepperoni on top as desired.',
        'Place pizza onto a baking tray.',
        `Bake in the preheated oven until cheese is golden, about 18 minutes. Optional step: turn on the oven’s`,
        'broiler, set a rack 6 inches below the heating element, and broil the pizza for a deeper color, 1 to 2 minutes.',
        'Cut pizza crosswise into slices. Serve and enjoy.'
    ]


    let menu2 = new Menu();
    menu2.heading = ['Chicken Curry', 'Ingredients', 'Steps'];
    menu2.imgDetail = ['./img/chickenCooked.jpg', 'Chicken Curry']
    menu2.paragraph = `Take a regular baguette and split lengthwise to create a tasty pizza. Toppings can be as simple as sauce and cheese, or upgrade with pepperoni and sausage.`
    menu2.ingredinents = [
        `2 pounds skinless, boneless chicken breast halves`,
        `2 teaspoons salt`,
        `½ cup cooking oil`,
        `1 ½ cups chopped onion`,
        `1 tablespoon minced garlic`,
        `1 ½ teaspoons minced fresh ginger root`,
        `1 tablespoon curry powder`,
        `1 teaspoon ground cumin`,
        `1 teaspoon ground turmeric`,
        `1 teaspoon ground coriander`,
        `1 teaspoon cayenne pepper`,
        `1 tablespoon water`,
        `1 (15 ounce) can crushed tomatoes`,
        `1 cup plain yogurt`,
        `1 tablespoon chopped fresh cilantro`,
        `1 teaspoon salt`,
        `½ cup water`,
        `1 teaspoon garam masala`,
        `1 tablespoon chopped fresh cilantro`,
        `1 tablespoon fresh lemon juice`,
    ]
    menu2.step = [
        `Gather all ingredients.`,
        `Sprinkle the chicken breasts with 2 teaspoons salt.`,
        `Heat oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned on all sides. Transfer browned chicken breasts to a plate and set aside.`,
        `Reduce the heat to medium and add onion, garlic, and ginger to the oil remaining in the skillet. Cook and stir until onion turns soft and translucent, 5 to 8 minutes. Stir curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring.`,
        `Add tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt to the mixture; stir to combine.`,
        `Return chicken breast to the skillet along with any juices on the plate. Pour in 1/2 cup water and bring to a boil, turning the chicken to coat with the sauce. Sprinkle garam masala and 1 tablespoon cilantro over the chicken.`,
        `Cover the skillet and simmer until chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Drizzle with lemon juice to serve.`,
    ]

    let menu3 = new Menu();
    menu3.heading = ['Home Fries', 'Ingredients', 'Steps'];
    menu3.imgDetail = ['./img/homeFries.jpg', 'Home Fries']
    menu3.paragraph = `Home fries are cubed, wedged, or sliced potatoes that are pan- or skillet-fried. In America, home fries are traditionally served for breakfast in place of hash browns.`
    menu3.ingredinents = [
        `3 medium russet potatoes, cubed`,
        `3 tablespoons butter or margarine`,
        `salt and ground black pepper to taste`
    ]
    menu3.step = [
        `Rinse potato cubes with cold water and drain well.`,
        `Melt butter in a large skillet over medium heat. Place potatoes in the skillet and season with salt and pepper; mix well. Cover and cook for 10 minutes.`,
        `Remove the lid and cook, turning frequently, until brown and crisp on all sides, about 10 more minutes.`
    ]

    let menuList = [menu1, menu2, menu3];

    let div = document.createElement('div');

    menuList.forEach(e => {
        let headerOne = document.createElement('h1');
        headerOne.textContent = e.heading[0];
        div.appendChild(headerOne);
        let image = document.createElement('img');
        image.src = e.imgDetail[0];
        image.alt = e.imgDetail[1];
        div.appendChild(image);
        let headerTwo = document.createElement('h2');
        headerTwo.textContent = e.heading[1];
        div.appendChild(headerTwo);

        let ulIngredient = document.createElement('ul');
        e.ingredinents.forEach(i => {
            let li = document.createElement('li');
            li.textContent = i;
            ulIngredient.appendChild(li);
        })
        div.appendChild(ulIngredient);

        let headerThree = document.createElement('h2');
        headerThree.textContent = e.heading[2];
        div.appendChild(headerThree);

        let ulSteps = document.createElement('ul');
        e.step.forEach(i => {
            let li = document.createElement('li');
            li.textContent = i;
            ulSteps.appendChild(li);
        })
        div.appendChild(ulSteps);


    });

    approot.appendChild(div);

}