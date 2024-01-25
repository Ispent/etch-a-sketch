const grids = document.querySelectorAll('.grid');
const gridContainer = document.querySelector('.grid-container');
const rainbow = document.querySelector('.rainbow')
let currentTool = 'blackPen';

function removeAllClassesExceptGrid(element) {
  const classListArray = Array.from(element.classList);
  classListArray.forEach(className => {
    if (className !== 'grid') {
      element.classList.remove(className);
    }
  });

  const stylePropertiesToKeep = ['height', 'width'];

  for (const property in element.style) {
    if (element.style.hasOwnProperty(property) && !stylePropertiesToKeep.includes(property)) {
      element.style[property] = '';
    }
  }
}

function handleGridMouseover(grid) {
  removeAllClassesExceptGrid(grid);
  if (currentTool === 'blackPen') {
    grid.classList.add('black');
  } else if (currentTool === 'eraser') {
    grid.classList.add('erase');
  } else if (currentTool === 'rainbowPen') {
    const randomBackgroundColor = randomColor();
    grid.classList.add('rainbow');
    grid.style.backgroundColor = randomBackgroundColor;
  }
}

function randomColor() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function penSelector() {
  const blackBtn = document.querySelector('.blackPen');
  const eraser = document.querySelector('#erase');
  const rainbowPen = document.querySelector('#rainbowPen');

  blackBtn.addEventListener('click', () => {
    currentTool = 'blackPen';
  });
  eraser.addEventListener('click', () => {
    currentTool = 'eraser';
  });
  rainbowPen.addEventListener('click', () => {
    currentTool = 'rainbowPen';
  });
}

function fourBox() {
  const foursBtn = document.querySelector('#fours');
  foursBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid');
      gridContainer.appendChild(cell);
      cell.style.height = '125px';
      cell.style.width = '125px';
      cell.addEventListener('mouseover', () => {
        handleGridMouseover(cell);
      });
    }
  });
}

function customBoxSizeSelector() {
  const customBtn = document.querySelector('#customBox');
  const inputText = document.querySelector('.customInput');

  customBtn.addEventListener('click', () => {
    let input = inputText.value;
    if (input > 100) {
      alert('Too big!')
    } else {
      customBoxCreater(input);
    }
  });
}

function customBoxCreater(size) {
  gridContainer.innerHTML = '';
  const cellSize = `${500 / size}px`

  for (let i = 0; i < (size * size); i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid');
    cell.style.height = cellSize;
    cell.style.width = cellSize;
    gridContainer.appendChild(cell);

    cell.addEventListener('mouseover', () => {
      handleGridMouseover(cell);
    });
  }
};

fourBox();
penSelector();
customBoxSizeSelector();