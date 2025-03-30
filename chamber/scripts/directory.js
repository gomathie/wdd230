const baseURL = "https://gomathie.github.io/wdd230/";
const membersURL = "https://gomathie.github.io/wdd230/chamber/data/members.json";

const directory = document.getElementById("directory");
const gridViewBtn = document.getElementById("gridView");
const listViewBtn = document.getElementById("listView");

async function loadMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    directory.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");


        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;
        directory.appendChild(card);
    });
}

// Add the event listeners for the view buttons
gridViewBtn.addEventListener("click", () => {
    directory.className = "grid";
});

listViewBtn.addEventListener("click", () => {
    directory.className = "list";
});

// Call loadMembers after everything is set up
loadMembers();


gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}





