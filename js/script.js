document.addEventListener("DOMContentLoaded", function() {
    function animateText() {
        const textContainer = document.getElementById("text-container");
        const words = textContainer.dataset.words.split(" ");
        textContainer.innerHTML = ""; 

        for (let i = 0; i < words.length; i++) {
            const span = document.createElement("span");
            span.textContent = words[i];
            span.style.animationDelay = `${i * 0.5}s`; 
            textContainer.appendChild(span);

            if (i < words.length - 1) {
                const space = document.createTextNode(" ");
                textContainer.appendChild(space);
            }
        }
    }
    animateText();

    setInterval(animateText, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function() {
        document.documentElement.scrollTop = 0; 
    });
});
