
const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function rpsls(player) {
  player = player.toLowerCase();
  
  if (!weapons.includes(player)) {
    console.error(`${player} is out of range. Valid options are: ${weapons.join(', ')}`);
    return;
  }

  const opponent = weapons[Math.floor(Math.random() * weapons.length)];
  const result = determineResult(player, opponent);

  return {
    player,
    opponent,
    result,
  };
}

function determineResult(player, opponent) {
  if (player === opponent) {
    return 'tie';
  } else if (
    (player === 'rock' && (opponent === 'scissors' || opponent === 'lizard')) ||
    (player === 'paper' && (opponent === 'rock' || opponent === 'spock')) ||
    (player === 'scissors' && (opponent === 'paper' || opponent === 'lizard')) ||
    (player === 'lizard' && (opponent === 'paper' || opponent === 'spock')) ||
    (player === 'spock' && (opponent === 'rock' || opponent === 'scissors'))
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

export { rpsls };

