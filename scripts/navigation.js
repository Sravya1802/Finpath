// FinPath Navigation Script
// Handles page transitions, visa selection storage, and form pre-filling

// Store visa selection in localStorage
function selectVisa(visaType) {
    localStorage.setItem('selectedVisa', visaType);
    // Add visual feedback
    document.querySelectorAll('.visa-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
}

// Get selected visa from localStorage
function getSelectedVisa() {
    return localStorage.getItem('selectedVisa') || '';
}

// Navigate to visa dashboard
function navigateToDashboard() {
    const selectedVisa = getSelectedVisa();
    if (selectedVisa) {
        window.location.href = 'visa-selection.html';
    } else {
        alert('Please select a visa type first.');
    }
}

// Make selectVisa function globally accessible
window.selectVisa = selectVisa;
window.navigateToDashboard = navigateToDashboard;

// Pre-fill visa type in signup form
function prefillVisaType() {
    const visaType = getSelectedVisa();
    if (visaType) {
        const visaSelect = document.getElementById('visa-type');
        if (visaSelect) {
            visaSelect.value = visaType;
        }
    }
}

// Store user data in localStorage
function storeUserData(formData) {
    const userData = {
        name: formData.get('name'),
        age: formData.get('age'),
        dob: formData.get('dob'),
        visaType: formData.get('visa-type'),
        status: formData.get('status'),
        experience: formData.get('experience'),
        bankInfo: formData.get('bank-info')
    };
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Get user data from localStorage
function getUserData() {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
}

// Handle signup form submission
function handleSignupSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // No required fields - just store whatever data is provided
    storeUserData(formData);
    window.location.href = 'dashboard.html';
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Pre-fill visa type on signup page
    if (window.location.pathname.includes('signup.html')) {
        prefillVisaType();
    }
    
    // Set up visa card click handlers on visa selection page
    if (window.location.pathname.includes('visa-selection.html')) {
        document.querySelectorAll('.visa-card').forEach(card => {
            card.addEventListener('click', function() {
                const visaType = this.getAttribute('data-visa');
                selectVisa(visaType);
            });
        });
        
        // Highlight previously selected visa
        const selectedVisa = getSelectedVisa();
        if (selectedVisa) {
            document.querySelector(`[data-visa="${selectedVisa}"]`)?.classList.add('selected');
        }
    }
    
    // Set up signup form handler
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupSubmit);
    }
});

