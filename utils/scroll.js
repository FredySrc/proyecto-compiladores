const rightButtons = Array.from(document.getElementsByClassName('next'));
const leftButtons = Array.from(document.getElementsByClassName('prev'));
const containers = Array.from(document.getElementsByClassName('carousel'));

let index = 0;
for (const rightButton of rightButtons) {
    const container = containers[index];
    rightButton.addEventListener("click", function () {
        container.scrollLeft += 250;
    });
    index++;
}

index = 0;
for (const leftButton of leftButtons) {
    const container = containers[index];
    leftButton.addEventListener("click", function () {
        container.scrollLeft -= 150;
    });
    index++;
}