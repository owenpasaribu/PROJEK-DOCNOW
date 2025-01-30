// Filter Doctors by Name or Specialization
const doctorSearchInput = document.getElementById('doctorSearch');
const doctorCards = document.querySelectorAll('.doctor-card');

doctorSearchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    doctorCards.forEach(card => {
        const doctorName = card.querySelector('p').textContent.toLowerCase();
        if (doctorName.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Filter Hospitals by Name or Distance
const hospitalSearchInput = document.getElementById('hospitalSearch');
const hospitalCards = document.querySelectorAll('.hospital-card');

hospitalSearchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    hospitalCards.forEach(card => {
        const hospitalName = card.querySelector('.card-title').textContent.toLowerCase();
        const hospitalDistance = card.querySelector('.card-text').textContent.toLowerCase();
        if (hospitalName.includes(searchText) || hospitalDistance.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
