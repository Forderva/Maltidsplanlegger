const meals = [
    { name: "Pytt i panne og speilegg", ingredients: ["poteter", "egg", "løk", "bacon"], isFavorite: false },
    { name: "Quesadillas", ingredients: ["tortilla", "ost", "kylling", "salsa"], isFavorite: false },
    { name: "Spaghetti Bolognese", ingredients: ["spaghetti", "kjøttdeig", "tomatsaus", "løk"], isFavorite: false },
    { name: "Grønnsakssuppe", ingredients: ["gulrot", "potet", "selleri", "purre"], isFavorite: false },
    { name: "Pizza", ingredients: ["pizzadeig", "tomatsaus", "ost", "pepperoni"], isFavorite: false },
    { name: "Fiskepinner og potetmos", ingredients: ["fiskepinner", "potetmos", "gulrot"], isFavorite: false },
    { name: "Biff med bearnaisesaus", ingredients: ["biff", "bearnaisesaus", "potet", "grønnsaker"], isFavorite: false },
    { name: "Taco", ingredients: ["tortilla", "kjøttdeig", "salsa", "ost", "salat"], isFavorite: false },
    { name: "Lasagne", ingredients: ["pasta", "kjøttsaus", "ost", "hvit saus"], isFavorite: false },
    { name: "Risotto med sopp", ingredients: ["ris", "sopp", "buljong", "parmesan"], isFavorite: false },
    { name: "Kylling med wokede grønnsaker", ingredients: ["kylling", "brokkoli", "gulrot", "soya saus"], isFavorite: false },
    { name: "Pannekaker", ingredients: ["mel", "egg", "melk", "smør"], isFavorite: false },
    { name: "Karri kyllinggryte", ingredients: ["kylling", "karri", "kokosmelk", "ris"], isFavorite: false },
    { name: "Fiskesuppe", ingredients: ["fisk", "fløte", "gulrot", "purre", "potet"], isFavorite: false },
    { name: "Kjøttboller og pasta", ingredients: ["kjøttboller", "pasta", "tomatsaus", "parmesan"], isFavorite: false },
    { name: "Chili con carne", ingredients: ["kjøttdeig", "bønner", "tomatsaus", "ris"], isFavorite: false },
    { name: "Omelett med skinke og ost", ingredients: ["egg", "skinke", "ost", "grønnsaker"], isFavorite: false },
    { name: "Grillpølser og potetstappe", ingredients: ["grillpølser", "potetstappe", "ketchup"], isFavorite: false },
    { name: "Stekt laks med grønnsaker", ingredients: ["laks", "brokkoli", "gulrot", "potet"], isFavorite: false },
    { name: "Kylling tikka masala", ingredients: ["kylling", "tikka masala saus", "ris", "naanbrød"], isFavorite: false },

    // New meals from screenshots
    { name: "Fiskeboller", ingredients: ["fiskeboller", "hvit saus", "poteter", "gulrot"], isFavorite: false },
    { name: "Pasta carbonara", ingredients: ["pasta", "fløte", "bacon", "parmesan"], isFavorite: false },
    { name: "Indrefilet med fløtegratinerte poteter", ingredients: ["indrefilet", "fløtegratinerte poteter", "grønnsaker"], isFavorite: false },
    { name: "Tandoori kylling med naan", ingredients: ["kylling", "tandoori krydder", "yoghurt", "naanbrød"], isFavorite: false },
    { name: "Pasta Classico gratinert", ingredients: ["pasta", "kjøttdeig", "tomatsaus", "ost"], isFavorite: false },
    { name: "Steaklets med bearnaisesaus", ingredients: ["steaklets", "bearnaisesaus", "poteter", "grønnsaker"], isFavorite: false },
    { name: "Hjemmelaget pizza", ingredients: ["pizzadeig", "tomatsaus", "ost", "valgfri topping"], isFavorite: false },
    { name: "Lapskaus", ingredients: ["kjøtt", "poteter", "gulrot", "kålrot", "sellerirot"], isFavorite: false },
    { name: "Hamburger med potetbåter og aioli", ingredients: ["hamburger", "potetbåter", "aioli", "salat"], isFavorite: false },
    { name: "Kjøttkaker", ingredients: ["kjøttdeig", "poteter", "brunsaus", "grønnsaker"], isFavorite: false },
    { name: "Hjemmelaget kyllingnuggets med ris", ingredients: ["kylling", "panering", "ris", "grønnsaker"], isFavorite: false },
    { name: "TORO pasta rød", ingredients: ["TORO pasta mix", "vann", "kjøttdeig"], isFavorite: false },
    { name: "Fiskekaker i brun saus", ingredients: ["fiskekaker", "brunsaus", "poteter", "gulrot"], isFavorite: false },
    { name: "Pølsegrateng", ingredients: ["pølse", "pasta", "hvit saus", "ost"], isFavorite: false },
    { name: "Tomatsuppe", ingredients: ["tomat", "vann", "løk", "buljong"], isFavorite: false },
    { name: "Mexicansk gryterett med hvitløksbrød", ingredients: ["kjøttdeig", "bønner", "kryddermix", "hvitløksbrød"], isFavorite: false },
    { name: "Tacolefse pizza", ingredients: ["lefse", "kjøttdeig", "ost", "salsa"], isFavorite: false },
    { name: "Svenske kjøttboller", ingredients: ["kjøttboller", "brunsaus", "potetmos"], isFavorite: false },
    { name: "Spaghetti", ingredients: ["spaghetti", "kjøttdeig", "tomatsaus"], isFavorite: false },
    { name: "Grandis", ingredients: ["frossenpizza"], isFavorite: false }
];
    

// Variables to store ingredients based on the generated menu
let selectedIngredients = [];

// Tab switching functionality
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("#navbar a");
    const sections = document.querySelectorAll("section");

    tabs.forEach(tab => {
        tab.addEventListener("click", (event) => {
            event.preventDefault();

            // Hide all sections
            sections.forEach(section => section.style.display = "none");

            // Show the selected section
            const targetSection = document.querySelector(tab.getAttribute("href"));
            targetSection.style.display = "block";
        });
    });

    const generateMenuButton = document.getElementById("generate-menu");
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");
    const menuOutput = document.getElementById("menu-output");

    generateMenuButton.addEventListener("click", () => {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        if (startDate && endDate && startDate <= endDate) {
            const daysBetween = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
            if (daysBetween > 31) {
                menuOutput.textContent = "Please select a period of up to 1 month.";
            } else {
                generateMenu(daysBetween);
            }
        } else {
            menuOutput.textContent = "Please select a valid date range.";
        }
    });
});

// Function to generate the menu and display the button
function generateMenu(days) {
    const menuOutput = document.getElementById("menu-output");
    menuOutput.innerHTML = "<h3>Generated Menu:</h3><ul>";

    selectedIngredients = []; // Reset ingredients list for each generation

    // Randomly select meals
    const randomMeals = getRandomMeals(days);

    // Display each meal in the generated menu
    randomMeals.forEach((meal, index) => {
        menuOutput.innerHTML += `<li>Day ${index + 1}: ${meal.name}</li>`;
        selectedIngredients = selectedIngredients.concat(meal.ingredients);
    });

    // Remove duplicate ingredients
    selectedIngredients = [...new Set(selectedIngredients)];

    // Add "Take me to my Shopping List" button
    const shoppingListButton = document.createElement("button");
    shoppingListButton.textContent = "Take me to my Shopping List";
    shoppingListButton.id = "shopping-list-button";
    shoppingListButton.addEventListener("click", () => showShoppingList());

    menuOutput.appendChild(shoppingListButton);
}

// Helper function to get a random selection of meals
function getRandomMeals(count) {
    const shuffledMeals = meals.slice().sort(() => Math.random() - 0.5);
    return shuffledMeals.slice(0, count);
}

function showShoppingList() {
    // Hide all sections, then show the Shopping List section
    document.querySelectorAll("section").forEach(section => section.style.display = "none");
    document.getElementById("shopping-list").style.display = "block";

    // Display the dropdown menu inside the shopping list frame
    const shoppingListOutput = document.getElementById("shopping-list-output");
    shoppingListOutput.innerHTML = `
        <h3>Your Shopping List:</h3>
        <div id="dropdown-menu">
            <button id="dropdown-button">Show All Items</button>
            <div id="dropdown-content">
                <button id="toggle-hide-marked">Hide Marked Items</button>
            </div>
        </div>
    `;

    // Add event listener for the dropdown toggle button
    document.getElementById("toggle-hide-marked").addEventListener("click", toggleHideMarkedItems);

    // Create the list and add items
    const ul = document.createElement("ul");
    selectedIngredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        listItem.classList.add("shopping-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("change", () => toggleCheck(listItem, checkbox));

        listItem.insertBefore(checkbox, listItem.firstChild);
        ul.appendChild(listItem);
    });

    shoppingListOutput.appendChild(ul);
}

// Function to toggle checked items and move them to the bottom
function toggleCheck(item, checkbox) {
    const ul = item.parentElement;

    if (checkbox.checked) {
        item.classList.add("checked");
        ul.appendChild(item); // Move checked item to the bottom
        if (hideMarked) item.style.display = "none"; // Immediately hide if "Hide Marked Items" is active
    } else {
        item.classList.remove("checked");
        item.style.display = "flex"; // Show item again if unchecked
        const uncheckedItems = Array.from(ul.children).filter(child => !child.classList.contains("checked"));
        ul.insertBefore(item, uncheckedItems[uncheckedItems.length - 1]?.nextSibling || ul.firstChild);
    }
}

// Function to toggle visibility of marked items
let hideMarked = false;

function toggleHideMarkedItems() {
    const items = document.querySelectorAll(".shopping-item.checked");
    hideMarked = !hideMarked;

    items.forEach(item => {
        item.style.display = hideMarked ? "none" : "flex";
    });

    // Update button text to show active state
    document.getElementById("dropdown-button").textContent = hideMarked ? "Show All Items" : "Hide Marked Items";
    document.getElementById("toggle-hide-marked").textContent = hideMarked ? "Show All Items" : "Hide Marked Items";
}
// Function to interact with the backend API
async function askChatGPT(question) {
    const response = await fetch("https://maltidbackend.onrender.com/api/ask-chatgpt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
    });
    const data = await response.json();
    return data.trim(); // Assuming backend returns the response text directly
}

// Function to handle chat interaction
async function handleSendMessage() {
    const userInput = document.getElementById("user-input");
    const chatWindow = document.getElementById("chat-window");
    const message = userInput.value.trim();

    if (message) {
        // Display user's message
        chatWindow.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        userInput.value = "";

        // Fetch and display ChatGPT's response
        const chatGPTResponse = await askChatGPT(message);
        chatWindow.innerHTML += `<p><strong>ChatGPT:</strong> ${chatGPTResponse}</p>`;

        // Attempt to parse a recipe from ChatGPT's response
        parseAndAddRecipe(chatGPTResponse);
    }
}

// Function to parse recipes from ChatGPT's response and add to meals array
function parseAndAddRecipe(response) {
    // Basic parsing to find a recipe (assuming response contains "Ingredients:" and a list)
    const recipeMatch = response.match(/Ingredients:\s([\s\S]*?)(?:Instructions:|$)/i);
    if (recipeMatch) {
        const recipeName = response.split("\n")[0].trim();
        const ingredientsList = recipeMatch[1]
            .split(/\n|,/)
            .map(item => item.trim())
            .filter(item => item);

        const newMeal = {
            name: recipeName,
            ingredients: ingredientsList,
            isFavorite: false
        };

        // Add to meals array
        meals.push(newMeal);

        // Optional: Display feedback to user
        document.getElementById("chat-window").innerHTML += `<p>Added "${recipeName}" to your meal options!</p>`;
    }
}


// Event listener for sending chat messages
document.getElementById("send-message").addEventListener("click", handleSendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleSendMessage();
    }
});
