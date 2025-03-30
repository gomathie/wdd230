
const baseURL = "https://gomathie.github.io/wdd230/";
const linksURL = "https://gomathie.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons); // Call the function and pass the JSON data
}

function displayLinks(weeks) {
    const lessonList = document.querySelector("#learningactivities");

    weeks.forEach(week => {
        const weekLesson = document.createElement('li');
        weekLesson.textContent = `Lesson ${week.lesson}: `;

        week.links.forEach((link, index) => {
            const weeklink = document.createElement("a");
            weeklink.href = baseURL + link.url; //Set the link's URL or Combine the base URL with the link path
            weeklink.textContent = link.title;
            weekLesson.appendChild(weeklink);

            if (index < week.links.length - 1) {
                weekLesson.appendChild(document.createTextNode(" | "));
            }

        });

        lessonList.appendChild(weekLesson);

    });

}

getLinks();


