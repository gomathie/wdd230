// Select the span element where the visit count will be displayed
const visitDisplay = document.querySelector('.visits');

// Check if 'visitCount' is stored in local storage
let visitCount = localStorage.getItem('visitCount');

// If no previous count exists, start at 0; otherwise, convert stored value to a number and increment
if (visitCount === null) {
    visitCount = 0;
} else {
    visitCount = Number(visitCount) + 1;
}

// Store the updated count back in local storage
localStorage.setItem('visitCount', visitCount);

// Display the visit count in the span element
visitDisplay.textContent = visitCount;