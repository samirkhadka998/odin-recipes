export default function menu(approot) {
    let div = document.createElement('div');
    div.innerHTML = ` <h1>Baguette Pizza</h1>
    <img src="../img/BaguettePizza.jpg" alt="Baguette Pizza">
    <h2>Description</h2>
    <p>Take a regular baguette and split lengthwise to create a tasty pizza. Toppings can be as simple as sauce and cheese, or upgrade with pepperoni and sausage.</p>
    
    <h2>Ingredients</h2>
    <ul>
        <li>1 French baguette</li>
        <li> 1/2 cup pizza sauce, or as needed</li>
        <li> 2/3 cup shredded mozzarella cheese</li>
        <li>2 ounces cooked and crumbled sausage</li>
        <li>2 ounces mini pepperoni slices</li>
    </ul>

    <h2>Steps</h2>
    <ol>
        <li>Preheat the oven to 375 degrees F (190 degrees C).</li>
        <li>Split baguette in half lengthwise. Warm pizza sauce in a microwave-safe bowl until hot, about 45 seconds.

        </li>
        <li>Spread pizza sauce on baguette, sprinkle on cheese, and scatter sausage and pepperoni on top as desired.
            Place pizza onto a baking tray.</li>
        <li>Bake in the preheated oven until cheese is golden, about 18 minutes. Optional step: turn on the oven’s
            broiler, set a rack 6 inches below the heating element, and broil the pizza for a deeper color, 1 to 2
            minutes.</li>
        <li>Cut pizza crosswise into slices. Serve and enjoy.

        </li>
    </ol>
    <button><a href="../index.html">Go Back</a></button>
    <br>
    <h1>Chicken Curry</h1>
    <img src="../img/chickenCooked.jpg" alt="ChickenCurry">
    <h2>Description</h2>
    <p>Enjoy the lavishly delicious taste of chicken curry at home with this easy-to-follow recipe. Bold spices like
        ginger, cumin, and curry powder add rich layers of flavor to succulent chicken coated in a creamy tomato-based
        sauce.</p>
    <p>Fill your kitchen with the delightful fragrance of a creamy, spicy, and filling curry that the whole family will
        love.
    </p>

    <h2>Ingredients</h2>
    <ul>
        <li>2 pounds skinless, boneless chicken breast halves </li>

        <li>2 teaspoons salt  </li>

        <li>½ cup cooking oil </li>

        <li>1 ½ cups chopped onion </li>

        <li>1 tablespoon minced garlic </li>

        <li>1 ½ teaspoons minced fresh ginger root </li>

        <li>1 tablespoon curry powder </li>

        <li>1 teaspoon ground cumin </li>

        <li>1 teaspoon ground turmeric </li>

        <li>1 teaspoon ground coriander </li>

        <li>1 teaspoon cayenne pepper </li>

        <li>1 tablespoon water </li>

        <li>1 (15 ounce) can crushed tomatoes </li>

        <li>1 cup plain yogurt </li>

        <li>1 tablespoon chopped fresh cilantro </li>

        <li>1 teaspoon salt </li>

        <li>½ cup water </li>

        <li>1 teaspoon garam masala </li>

        <li>1 tablespoon chopped fresh cilantro </li>

        <li>1 tablespoon fresh lemon juice </li>
    </ul>

    <h2>Steps</h2>
    <ol>
        <li>Gather all ingredients.</li>
        <li>Sprinkle the chicken breasts with 2 teaspoons salt.</li>
        <li>Heat oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned on all sides. Transfer browned chicken breasts to a plate and set aside.</li>
        <li>Reduce the heat to medium and add onion, garlic, and ginger to the oil remaining in the skillet. Cook and stir until onion turns soft and translucent, 5 to 8 minutes. Stir curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring.</li>
        <li>Add tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt to the mixture; stir to combine.</li>
        <li>Return chicken breast to the skillet along with any juices on the plate. Pour in 1/2 cup water and bring to a boil, turning the chicken to coat with the sauce. Sprinkle garam masala and 1 tablespoon cilantro over the chicken.</li>
        <li>Cover the skillet and simmer until chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Drizzle with lemon juice to serve.</li>
    </ol>
    <button><a href="../index.html">Go Back</a></button>
    <br>
    <h1>Home Fries</h1>
    <img src="../img/homeFries.jpg" alt="Home Fries">
    <h2>Description</h2>
    <p>Home fries are cubed, wedged, or sliced potatoes that are pan- or skillet-fried. In America, home fries are traditionally served for breakfast in place of hash browns. </p>
    
    <h2>Ingredients</h2>
    <ul>
        <li>3 medium russet potatoes, cubed</li>
        <li>3 tablespoons butter or margarine</li>
        <li>salt and ground black pepper to taste</li>
    </ul>

    <h2>Steps</h2>
    <ol>
        <li>Rinse potato cubes with cold water and drain well.</li>
        <li>Melt butter in a large skillet over medium heat. Place potatoes in the skillet and season with salt and pepper; mix well. Cover and cook for 10 minutes.
        </li>
        <li>Remove the lid and cook, turning frequently, until brown and crisp on all sides, about 10 more minutes.</li>
    </ol>
    <button><a href="../index.html">Go Back</a></button>
`;
    approot.appendChild(div);

    return div;
}