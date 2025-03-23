function displayBanner() {
    const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    if (today >= 1 && today <= 3) { // Monday (1), Tuesday (2), Wednesday (3)
        document.getElementById('meet-and-greet-banner').style.display = 'block';
    }
}

function closeBanner() {
    document.getElementById('meet-and-greet-banner').style.display = 'none';
}

displayBanner(); // Call the function to check and display

document.getElementById('close-btn').addEventListener('click', closeBanner);
