// Apply button functionality
document.getElementById('apply-filters').addEventListener('click', function() {
    filterDoctors();
});

// Reset button functionality
document.getElementById('reset-filters').addEventListener('click', function() {
    // Uncheck all the checkboxes
    document.querySelectorAll('.city-filter, .facility-filter, .experience-filter').forEach(function (checkbox) {
        checkbox.checked = false;
    });

    // Reset the doctor list to show all doctors
    filterDoctors();
});

function filterDoctors() {
    // Get all selected filters
    const selectedCities = Array.from(document.querySelectorAll('.city-filter:checked')).map(el => el.value);
    const selectedFacilities = Array.from(document.querySelectorAll('.facility-filter:checked')).map(el => el.value);
    const selectedExperiences = Array.from(document.querySelectorAll('.experience-filter:checked')).map(el => el.value);

    // Filter each doctor card
    document.querySelectorAll('.doctor-card').forEach(function (card) {
        const city = card.getAttribute('data-city');
        const facility = card.getAttribute('data-facility');
        const experience = parseInt(card.getAttribute('data-experience')); // Convert experience to a number

        // Check if doctor matches the selected filters
        const matchesCity = selectedCities.length === 0 || selectedCities.includes(city);
        const matchesFacility = selectedFacilities.length === 0 || selectedFacilities.includes(facility);
        const matchesExperience = selectedExperiences.length === 0 || selectedExperiences.some(exp => {
            if (exp === "0-5") return experience >= 0 && experience <= 5;
            if (exp === "5-15") return experience > 5 && experience <= 15;
            if (exp === "15+") return experience > 15;
        });

        // Show or hide the card based on the filter match
        if (matchesCity && matchesFacility && matchesExperience) {
            card.style.display = 'flex'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}
