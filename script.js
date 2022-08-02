//grid outline
const gridArea = document.querySelector('.grid');
gridArea.addEventListener('mouseenter',()=>{
    gridArea.style.outline = '8px solid blue';
});

gridArea.addEventListener('mouseleave',()=>{
    gridArea.style.outline = '';
});

//Random color generator
const randCol = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}


// Get all cells
const cell = document.querySelectorAll('.cell');

// For each cell, add event listeners
cell.forEach((cell)=>{
    cell.addEventListener('mouseenter',()=>{
        cell.style.outline ='2px solid red';
    });

    cell.addEventListener('mouseleave', ()=>{
        cell.style.outline = '';
    })

    cell.addEventListener('click',()=>{

        if(cell.style.backgroundColor){
            cell.style.backgroundColor = '' ;
        }else {
            cell.style.backgroundColor = `#${randCol()}` ;
        }

        console.log(cell.style.backgroundColor);
    });
});

const body = document.querySelector('body');

body.addEventListener("keydown",(event)=> {
    console.log(event.code);

    if(event.code === 'KeyA'){
        body.style.backgroundColor === ''
            ? body.style.backgroundColor = `#${randCol()}`
            : body.style.backgroundColor = '' ;
    }
});