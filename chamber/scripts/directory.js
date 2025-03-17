document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    function loadMembers() {
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => displayMembers(data));
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

    gridViewBtn.addEventListener("click", () => directory.className = "grid");
    listViewBtn.addEventListener("click", () => directory.className = "list");

    loadMembers();
});
