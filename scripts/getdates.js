let currentYear = new Date().getFullYear();

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZoneName: 'short',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
};
document.querySelector('#currentYear').textContent = currentYear.toLocaleString('en-us', options);

let lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last modified: ${lastModifiedDate}`;