
export function rps(shot) {
  const elements = [ 'rock','paper','scissors'];
  
 
  if (shot == null) {
    var rand_zero_to_two = Math.floor(Math.random() * 3);
    var some_element = elements[rand_zero_to_two];
    return {player:some_element};
  }
  
 
  shot = shot.toLowerCase();
  
  
  if (!elements.includes(shot)) {
    console.error(shot + " is out of range");
    console.log(`Rules for Rock Paper Scissors:
    
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    process.exit(1);
  }
  
  var rand_zero_to_two_opp = Math.floor(Math.random() * 3);
  const opp_shot = elements[rand_zero_to_two_opp];
  var outcome;
  
  if (shot == opp_shot) {
    outcome = "tie";
  } else if ((shot == "rock" && opp_shot == "scissors") || (shot == "paper" && opp_shot == "rock") || (shot == "scissors" && opp_shot == "paper")) {
      outcome = "win";
  } else {
      outcome = "lose";
  }
  
  return {player:shot, opponent:opp_shot, result:outcome};
}


export function rpsls(shot) {
  const elements = [ 'rock','paper','scissors','lizard','spock'];
  
  if (shot == null) {
    var rand_zero_to_five = Math.floor(Math.random() * 5);
    var some_element = elements[rand_zero_to_five];
    return {player:some_element};
  }
  
  shot = shot.toLowerCase();
  
  if (!elements.includes(shot)) {
    console.error(shot + " is out of range");
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    process.exit(1);
  }
  
  var rand_zero_to_five_opp = Math.floor(Math.random() * 5);
  const opp_shot = elements[rand_zero_to_five_opp];
  var outcome;
  
  if (shot == opp_shot) {
    outcome = "tie";
  } else if ((shot == "rock" && (opp_shot == "scissors" || opp_shot == 'lizard')) || 
             (shot == "paper" && (opp_shot == "rock" || opp_shot == 'spock')) ||
             (shot == "scissors" && (opp_shot == "paper" || "lizard")) ||
             (shot == "lizard" && (opp_shot == "spock" || opp_shot == "paper")) ||
             (shot == "spock" && (opp_shot == "scissors" || opp_shot == "rock"))) {
      outcome = "win";
  } else {
      outcome = "lose";
  }
  
  return {player:shot, opponent:opp_shot, result:outcome};
}
