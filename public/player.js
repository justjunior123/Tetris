const player = {
  pos: {x:0, y:0},
  matrix: null,
  score: 0,
};

function playerMove(dir){
  player.pos.x += dir;
  if (collide(arena,player)) {
    player.pos.x -= dir;
  }
}

function playerReset() {
  const pieces = 'ILJOTSZ';
  player.matrix = creatPiece(pieces [pieces.length * Math.random() | 0 ]);
  player.pos.y = 0;
  player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
}
