

document.addEventListener('DOMContentLoaded', function () {
    // Only execute on the rentals page
    if (document.querySelector('.rentals-page') || document.querySelector('.rentals-content')) {
        loadRentalData();
    }

    async function loadRentalData() {
        try {
            const response = await fetch('https://github.com/gomathie/wdd230/blob/main/scoots/data/rentals.json');
            const data = await response.json();

            if (data && data.rentalTypes) {
                populateRentalTable(data.rentalTypes);
                populateModelLists(data.rentalTypes);
            }
        } catch (error) {
            console.error('Error loading rental data:', error);
            document.getElementById('rental-table-body').innerHTML = '<tr><td colspan="4">Error loading rental data</td></tr>';
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
                <td>$${rental.halfDay}</td>
                <td>$${rental.fullDay}</td>
            `;

            tableBody.appendChild(row);
        });
    }

    function populateModelLists(rentals) {
        // Group rentals by category
        const scooters = rentals.filter(rental => rental.category === 'scooter');
        const jeeps = rentals.filter(rental => rental.category === 'jeep');
        const atvs = rentals.filter(rental => rental.category === 'atv');

        // Populate scooter models
        const scootersList = document.getElementById('scooter-models');
        if (scootersList) {
            populateList(scootersList, scooters);
        }

        // Populate jeep models
        const jeepsList = document.getElementById('jeep-models');
        if (jeepsList) {
            populateList(jeepsList, jeeps);
        }

        // Populate ATV models
        const atvsList = document.getElementById('atv-models');
        if (atvsList) {
            populateList(atvsList, atvs);
        }
    }

    function populateList(listElement, items) {
        listElement.innerHTML = '';

        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${item.type}</strong> - ${item.description}
                <br>
                <span class="price-info">Half Day: $${item.halfDay} | Full Day: $${item.fullDay}</span>
            `;
            listElement.appendChild(listItem);
        });
    }
});