let currentYear = new Date().getFullYear();


document.querySelector('#currentYear').textContent = currentYear;

let lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last modified: ${lastModifiedDate}`;