document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.card').classList.toggle('flipped');
    });
});

// Twinkling Stars Effect
const starContainer = document.querySelector('.stars');

for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;
    starContainer.appendChild(star);
}
