//these are the differnt text's meant to appear as the little climber goes up, also I just used a mountain as the metaphor for all of this just because I thought it would be fun to make a mountain and a little dude going up it
let first_text = 'I would consider living life to be like climbing a mountain';

let second_text = 'The path up may be rocky, dangerous, and tiring';

let third_text ='You may fall down or slip a couple of times on the way up'

let fourth_text ='but once you hit the peak it feels so amazing.' 




function setup() {
  createCanvas(400, 400);
  
  
  
  fill(0, 0, 0);
  
  

 
}

function draw() {
  background(100, 180, 200);
  noStroke()
  
  // the slope is the line that the little dude follows in order to go up
  let slope = (400-30) / (300-20)
  
  // the rest of these values are used for constrain so that the little guy only goes up to certain point, value names and some of the math was from the P5 example for constrain
  let leftWall = 20
  let rightWall = 300
  
  let xc = constrain(mouseX, leftWall, rightWall);
  
  let xValue = map(mouseX, 0, width, 0, 2);
  
  let y = (height -(xc * slope));
  
  
  
  // these values are for the ground, sun, and cloud
  stroke(25, 100, 80)
  fill('green')
  ellipse(200, 400, 600, 200)
  
  stroke(60, 160, 200)
  fill(500)
  ellipse(40, -30, 420, 250)

  stroke(255, 204, 0);
  fill('yellow')
  circle(290, 80, 130)
  
  
  //this string of if and else's are to make sure the text spawns in past a certain point, the text being what I formed at the beginning 
  stroke(200, 200, 300)
  if (xc > 299){
    fill(0)
  textSize(20);
  text(fourth_text, 10, 10, 200);
  } else if (xc > 200){
    fill(0)
  textSize(20);
  text(third_text, 10, 10, 200);
  } else if (xc > 100) {
    fill(0)
  textSize(20);
  text(second_text, 10, 10, 200);
  } else if (xc > 20) {
    fill(0)
  textSize(20);
  text(first_text, 10, 10, 200);
  } else if (xc = 20) {
    fill(0)
  textSize(20);
  text(first_text, 10, 10, 200);
  }
  
//these triangles make up the mountain and the snow on the mountain
  stroke(80, 80, 80)
  fill(200, 200, 200)
  triangle(20, 400, 300, 30, 400, 400);
  
  
  
  
  
  fill(400, 400, 400)
  triangle(246, 100, 300, 30, 332, 150)
  
  fill(90, 90, 90)
  triangle(320, 400, 300, 30, 400, 400);
  
  fill(150, 150, 200)
  triangle(305, 132, 300, 30, 333, 150)
  
  
  
  
  

// these elliplses and the arc are the essiential components of the little dude who climbs the mountain
  fill(100, 140, 360);
  ellipse(xc, y + 13, 8, 20);
  
  fill(100, 240, 160);
 ellipse(xc, (y - 0), 15, 15);
  
  fill(0)
  arc(xc, (y - 0), 15, 15, 0, PI + 100);

  
  
  //to get the age to match up to go straight from 1 to 18 as the little person goes up the mountain by messing with what numbers dividing xc by would get a staight shot from 1 to 18 with no decimals, the variable legend and the int(nfc) equation are from the P5 ref for exp()
  let legend = 'Age ' + 1 * int(nfc(xc / 16)) 
  
  // searched up what fonts work with P5 and thought this one would fit the best for the tone
  fill(0)
  textFont('Monotype Corsiva')
  text(legend, (xc + 20), (y + 20));
  
  
  
 
  
  
}