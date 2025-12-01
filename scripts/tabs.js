// FinPath Tabs Script
// Handles tab switching functionality on the user dashboard

function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });
    
    // Activate first tab by default
    if (tabs.length > 0) {
        tabs[0].click();
    }
}

// Initialize tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', initTabs);

