var answer = 'NO'

function setup(){
  createCanvas(windowWidth, windowHeight)
}

function draw(){
    background('red')
    textSize(32)
    fill('white')
    text('Is it the weekend? ' + answer, 40, 40)
}
var rightNow = new Date( ).toString( )

var nowArray = rightNow.split(" ")

var weekday = nowArray[ 0]

var dayNumber = nowArray[2]

var time = nowArray[4]


 if( weekday === 'sat'|| weekday === 'sun'){
 
   else(
     ){
       
     }
 }

