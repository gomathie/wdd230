
const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${currentYear} Your Company Name`;


const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = `Last modified: ${lastModifiedDate}`;
