const greyArrowDown = document.querySelector('.greyArrowDown');

greyArrowDown.addEventListener('mouseover', (event) => {
    event.target = '';
});
greyArrowDown.addEventListener('mouseout', (event) => {
    event.target = 'green';
});
















let addContex= document.querySelector('.')
let lists = document.querySelector('.newAddSpaces')
let input = document.querySelector('.')



let array = []
addContex.onclick= function(){
    if (input.value.length==0){
        alert('The space cant be empty')
    }
}





