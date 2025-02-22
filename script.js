document.addEventListener('DOMContentLoaded', function() {
    const gamesCircle = document.getElementById('gamesCircle');
    
    if (gamesCircle) {
        
        gamesCircle.style.cursor = 'pointer';
        
        // Click event
        gamesCircle.addEventListener('click', function() {
            window.location.href = 'games.html';
        });
        gamescircle1.addEventListener("click", function() {
            window.location.href = "profile-card.html";
        });
        
        // Hover effects
        gamesCircle.addEventListener('mouseenter', function() {
            
            this.style.transition = 'transform 0.3s ease';
        });
        
        gamescircle1.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});