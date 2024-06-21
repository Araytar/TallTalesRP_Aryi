const starContainer = document.querySelector(".stars");
const maxStars = 150;
const starSizeClasses = ['small', 'medium', 'large'];

function initializeStars() {
    const docHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
                            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    
    for (let i = 0; i < maxStars; i++) {
        const star = createStar();
        starContainer.appendChild(star);
    }
}


function createStar() {
    const star = document.createElement("div");
    star.className = 'star';
    const randomSize = starSizeClasses[Math.floor(Math.random() * starSizeClasses.length)];
    star.classList.add(randomSize);
    
    star.style.top = `${Math.random() * document.documentElement.clientHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;

    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    return star;
}

//parralax effect in development :3

/* window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    container.style.transform = `translateY(${scrollY / 4}px)`;
});*/

initializeStars();