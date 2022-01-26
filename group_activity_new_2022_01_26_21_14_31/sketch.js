//original text with / to split up lines
let source_text = 'Hello, it\'s me \nI was wondering if after all these years you\'d like to meet \nTo go over everything \nThey say that time\'s supposed to heal ya \nBut I ain\'t done much healing \nHello, can you hear me? \nI\'m in California dreaming about who we used to be \nWhen we were younger and free \nI\'ve forgotten how it felt before the world fell at our feet \nThere\'s such a difference between us \nAnd a million miles \nHello from the other side \nI must\'ve called a thousand times \nTo tell you I\'m sorry for everything that I\'ve done \nBut when I call, you never seem to be home';


let search_word = 'Hello';
//changed to goodbye due to it being essentially the exact opposite of hello, changing the message of the original to the exact opposite
let replace_word = "Goodbye";

function setup() {
  createCanvas(640, 600);
  altered_text = source_text. replaceAll(search_word, replace_word);
  fill(240, 130, 50)
  // made text orange most likely as it can be seen as a "gloomy color"
  textFont("Helvetica");
  //font helvetica to keep it readable and to test which fonts work
  textSize(20);
  text(source_text, 10, 10, 400);
}

function draw() {
  //backround is pinkish to match with the sort of romantic tone of the original song
  background(500, 200, 500);

  
  let new_text = source_text.replaceAll(search_word, replace_word);
  
  let show_text;
  if(mouseIsPressed){show_text = altered_text;}
  else{show_text = source_text;}
  
  text(show_text, 10, 10, width * 0.9);
}