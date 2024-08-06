
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "CS student ";
    }, 0);
    setTimeout(() => {
        text.textContent = "mathematics lover ";
    }, 4000);
    setTimeout(() => {
        text.textContent = "robotics enthusiast ";
    }, 8000);
    setTimeout(() => {
        text.textContent = "software developer ";
    }, 12000);
}
textLoad();
setInterval(textLoad, 16000);

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.accordion-header');
    const content = document.querySelector('.accordion-content');

    header.addEventListener('click', function() {
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
