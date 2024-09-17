document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const message = document.getElementById('message');

    // Event listener for "Yes" button
    yesButton.addEventListener('click', () => {
        message.textContent = "I knew you would say yes :3 🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺";
        showHearts(); // Trigger the heart animation after clicking Yes
    });

    // Event listener for "No" button to make it move
    noButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * window.innerWidth - noButton.clientWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight - noButton.clientHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Function to create heart animation
    function showHearts() {
        const heartContainer = document.createElement('div');
        heartContainer.classList.add('heart-container');
        document.body.appendChild(heartContainer);

        // Create 50 pink hearts
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            heart.style.animationDuration = `${3 + Math.random() * 3}s`; // Faster speed (3-6 seconds)
            heart.style.backgroundColor = 'pink'; // All hearts are pink
            heartContainer.appendChild(heart);

            // Remove the heart after the animation ends
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }

        // Remove the heart container after the animation ends
        setTimeout(() => {
            heartContainer.remove();
        }, 7000); // Adjust the removal time for faster animations
    }
});
