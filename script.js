document.addEventListener('DOMContentLoaded', function() {
    const gamesCircle = document.getElementById('gamesCircle');
    
    if (gamesCircle) {
        
        gamesCircle.style.cursor = 'pointer';
        
        // Click event
        gamesCircle.addEventListener('click', function() {
            window.location.href = 'games.html';
        });
        
        // Hover effects
        gamesCircle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        gamesCircle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});