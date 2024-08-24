document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    slider.addEventListener('mousedown', startDrag);
    slider.addEventListener('mouseup', endDrag);
    slider.addEventListener('mouseleave', endDrag);
    slider.addEventListener('mousemove', drag);

    function startDrag(event) {
        isDragging = true;
        startPos = event.pageX - slider.offsetLeft;
        animationID = requestAnimationFrame(animation);
    }

    function endDrag() {
        isDragging = false;
        cancelAnimationFrame(animationID);
    }

    function drag(event) {
        if (isDragging) {
            const currentPosition = event.pageX - slider.offsetLeft;
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }

    function animation() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
        if (isDragging) requestAnimationFrame(animation);
    }
});
