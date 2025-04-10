
document.addEventListener('DOMContentLoaded', function () {
    // Only execute on the rentals page
    if (document.querySelector('.rentals-page')) {
        loadRentalData();
    }

    async function loadRentalData() {
        try {
            const response = await fetch('https://github.com/gomathie/wdd230/blob/main/scoots/data/rentals.json');

            const data = await response.json();

            if (data && data.rentalTypes) {
                populateRentalTable(data.rentalTypes);
            }
        } catch (error) {
            console.error('Error loading rental data:', error);
            document.getElementById('rental-table-body').innerHTML = '<tr><td colspan="6">Error loading rental data</td></tr>';
        }
    }

    function populateRentalTable(rentals) {
        const tableBody = document.getElementById('rental-table-body');

        if (!tableBody) return;

        tableBody.innerHTML = '';

        rentals.forEach(rental => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${rental.type}</td>
                <td>${rental.maxPersons}</td>
                <td>$${rental.reservationHalfDay}</td>
                <td>$${rental.reservationFullDay}</td>
                <td>$${rental.walkInHalfDay}</td>
                <td>$${rental.walkInFullDay}</td>
            `;

            tableBody.appendChild(row);
        });
    }
});