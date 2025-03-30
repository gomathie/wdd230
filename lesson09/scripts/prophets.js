// Define URL for the JSON data
const url =
    "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// Select the div where the cards will be displayed
const cards = document.querySelector("#cards");

// Define the async function to fetch data
async function getProphetData() {
    // Fetch the data from the URL
    const response = await fetch(url);

    // Convert the response to JSON
    const data = await response.json();

    // Check the data in the console
    console.table(data);

    // Pass the data to displayProphets function
    displayProphets(data.prophets);
}

// Define the displayProphets function
const displayProphets = (prophets) => {
    // Loop through each prophet to create and display cards
    prophets.forEach((prophet) => {
        // Create a section element for the card
        const card = document.createElement("section");
        card.classList.add("card");

        // Create an h2 element for the full name
        const fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create p elements for the birthdate and birthplace
        const birthdate = document.createElement("p");
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;

        const birthplace = document.createElement("p");
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Create an img element for the portrait
        const portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute(
            "alt",
            `${prophet.name} ${prophet.lastname} - ${prophet.order} Prophet`
        );
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "250");

        // Append the name, birthdate, birthplace, and image to the card
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        // Append the card to the cards div
        cards.appendChild(card);
    });
};

// Call the function to get data and display prophets
getProphetData();
