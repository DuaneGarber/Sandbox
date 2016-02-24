'use strict';

function spiral (num) {
  let grid = [];
  let middle = Math.floor(num / 2);
  let current = middle;
  let i, j;
  for (i = 0; i < num; i++) {
    let row = [];
    for (j = 0; j < num; j++) {
      row.push(' ');
    }
    grid.push(row);
  }

  grid[current][current] = '*';
  let nextCycle = {
    'down': 'right',
    'right': 'up',
    'up': 'left',
    'left': 'down'
  };

  let instruction = {
    down: (coords) => coords.y--,
    right: (coords) => coords.x--,
    up: (coords) => coords.y++,
    left: (coords) => coords.x++
  };
  let currentCycle = 'down';

  let index = 0;
  let coords = {
    x: current,
    y: current
  };

  while (true) {
    for (i = 0; i < index; i++) {
      instruction[currentCycle](coords);
      grid[coords.x][coords.y] = '*';
    }

    currentCycle = nextCycle[currentCycle];

    if (index + 1 >= num) {
      break;
    }
    index++;
  }

  return grid;
}

let endGrid = spiral(14);

for (let i = 0; i < endGrid.length; i++) {
  let str = endGrid.join(' ');
  console.log(str);
}
