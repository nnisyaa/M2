
let reverseButton = document.querySelector('.greyArrowDown')
let sortButton = document.querySelector('.greyArrowUp')






const button = document.querySelector('button');
button.onclick = function () {
    div = document.createElement('div')
    div.innerHTML = `
    <input class="input-space" name="input" type="text" required>
    <button class="greyx"><img src="/image/GreyX.svg"  alt="Not found" class="greyx-picture"></button>
    `
}














const arrow  = document.querySelector('.greyArrowDown');

arrow.addEventListener('mouseover', (event) => {
    event.target.src="/image/greyArrowUp.svg";
});

arrow.addEventListener('mouseout', (event) => {
    event.target.src="/image/greyArrowDown.svg" ;
});
