const grids = document.querySelectorAll('.grid');


function blackPen() {
  grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
      grid.classList.remove('erase')
      grid.classList.add('black');
    });
  });
}

function erase() {
  grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
      grid.classList.remove('black');
      grid.classList.add('erase');
    });
  });
}

function penSelector() {
  const blackBtn = document.querySelector('.blackPen');
  const eraser = document.querySelector('.erase');
  blackBtn.addEventListener('click', () => {
    blackPen();
  });
  eraser.addEventListener('click', () => {
    erase();
  });
}

function fourBox() {
  const foursBtn = document.querySelector('#fours')
  foursBtn.addEventListener('click', () =>{
    
  })
}

penSelector();