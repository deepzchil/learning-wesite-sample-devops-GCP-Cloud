// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const welcomeBtn = document.getElementById('welcomeBtn');

    welcomeBtn.addEventListener('click', () => {
        alert('Welcome to LearnHub! Ready to start your journey?');
        console.log('User clicked the Get Started button.');
    });
});