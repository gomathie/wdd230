const baseURL = "https://gomathie.github.io/wdd230/";
const membersURL = "https://gomathie.github.io/wdd230/data/members.json";




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

loadMembers();