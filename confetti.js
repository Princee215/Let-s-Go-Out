document.addEventListener('DOMContentLoaded', function() {
    // Get the confetti container
    var confettiContainer = document.getElementById('confetti-container');

    // Function to create a confetti particle
    function createConfettiParticle() {
        var particle = document.createElement('div');
        particle.className = 'confetti-particle';
        var colors = ['#f00', '#0f0', '#00f', '#ff0']; // You can customize the colors
    
        // Set random position, color, and size
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = Math.random() * 20 + 'px';
        particle.style.height = particle.style.width;
    
        // Add particle to the container
        confettiContainer.appendChild(particle);
    
        // Animate the particle
        anime({
            targets: particle,
            translateY: [0, window.innerHeight],
            translateX: [0, Math.random() * window.innerWidth - window.innerWidth / 2], // Add X-axis randomness
            rotate: () => Math.random() * 360, // Random rotation
            duration: 3000 + Math.random() * 1500, // Vary duration for a more natural look
            easing: 'easeInOutQuart', // Use easing for a smoother animation
            complete: function(anim) {
                // Remove the particle after animation
                confettiContainer.removeChild(particle);
            }
        });
    }

    // Function to generate confetti
    function generateConfetti() {
        // Create confetti particles at intervals
        var confettiInterval = setInterval(function() {
            for (var i = 0; i < 50; i++) { // Adjust the number of particles created in each interval
                createConfettiParticle();
            }
        }, 500); // Adjust the interval as needed (e.g., every 500 milliseconds)
    
        // Optionally, stop the confetti after a certain duration (e.g., 10000 milliseconds or 10 seconds)
        setTimeout(function() {
            clearInterval(confettiInterval);
        }, 10000);
    }

    // Trigger confetti animation
    generateConfetti();
});