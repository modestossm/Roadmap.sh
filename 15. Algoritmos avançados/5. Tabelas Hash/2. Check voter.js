const voted = {};

const checkVoter = name => {
  if (voted[name]) {
    console.log("kick them out!");
  } else {
    voted[name] = true;
    console.log("let them vote!");
  }
};

checkVoter("tom"); // False -> True
checkVoter("mike"); // False -> True
checkVoter("mike");  // True