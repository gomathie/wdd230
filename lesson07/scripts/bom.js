const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Retrieve chapters from localStorage or initialize an empty array
let chaptersArray = getChapterList() || [];

// Populate the list from localStorage on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Event listener for the button click
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {  // Ensure input is not empty
        displayList(input.value.trim()); // Display new chapter
        chaptersArray.push(input.value.trim());  // Add to array
        setChapterList(); // Update localStorage
        input.value = ''; // Clear input
        input.focus(); // Refocus input
    }
});

// Allow users to add chapters by pressing "ENTER"
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== '') {
        displayList(input.value.trim());
        chaptersArray.push(input.value.trim());
        setChapterList();
        input.value = '';
        input.focus();
    }
});

// Function to display a list item
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // Style button using CSS

    li.append(deleteButton);
    list.append(li);

    // Delete chapter when delete button is clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Remove from array & localStorage
        input.focus();
    });
}

// Function to update localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter from array & update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove '❌' from text
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove from array
    setChapterList(); // Update localStorage
}

const el = document.getElementById('button');
console.log(el.ariaLabel);
el.ariaLabel = 'Add a Chapter';
console.log(el.ariaLabel);
