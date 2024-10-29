// Register the service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered:', registration);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

// Call-to-action button functionality
document.getElementById('cta-button').onclick = function() {
    alert("Redirecting to your offers!");
    window.location.href = 'https://www.cpalead.com/link-to-offer'; // Replace with your CPAlead link
};
