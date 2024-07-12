// imagehover.js

document.addEventListener('DOMContentLoaded', (event) => {
    const customCursorElements = document.querySelectorAll('.custom-cursor');

    customCursorElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            document.body.style.cursor = 'url("custom-cursor.png") 125 125, auto';
        });

        element.addEventListener('mouseout', () => {
            document.body.style.cursor = 'auto';
        });
    });
});
