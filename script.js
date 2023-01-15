//question 1 to 10 are rating questions (1-5) 
//'p' denotes physical health and 'm' denotes mental health
var p1 = "1. How was your day?";
var p2 = "2. How tired do you feel? Really take a second to assess yourself.";
var m3 = "3. How do you rate your physical health?";
var m4 = "4. How would you rate your mental health?";
var p5 = "5. How much time do you spend seated?";
var m6 = "6. How happy do you feel with your relationships?";
var p7 = "7. How much do you exercise?";
var m8 = "8. How positively do you feel about your life?";
var m9 = "9. How well are you handling your current responsibilities?";
var m10 = "10. How much control do you feel you have over your life?";
//question 11 to 14 are true and false questions
var p11 = "11. Have you drank water recently?";
var p12 = "12. What about eating food?";
var p13 = "13. Do you get at least 8 hours of sleep per day?";
var m14 = "14. Are you going through a tough emotional situation?";

//arrays that store all the questions 
var allQuestions = [p1,p2,m3,m4,p5,m6,p7,m8,m9,m10,p11,p12,p13,m14];
var physicalQuestions = [p1,p2,p5,p7,p11,p12,p13];//array that store all physical questions
var mentalQuestions = [m3,m4,m6,m8,m9,m10,m14];//array that store all mental questions
var trueAndFalse = [p11,p12,p13,m14];
var ratingQuestions = [p1,p2,m3,m4,p5,m6,p7,m8,m9,m10];

var sum = 0; //sum adds up all the rating from the user
var currentIndex = 0; //currentIndex stores the current index for allQuestions
var currentTrueFalse = 0;

// booleans for special prompts, 0 is false, 1 is true
var journal = 0;
var sitting = 0;
var sleep = 0;

//recommendation messages 
var didJournal = ["Human Negativity Bias","Humans have a natural negativity bias. Study after study has found that humans tend to be more motivated by fear of loss than desire for gain. Everyone has felt sometimes that like things are going mostly badly in their lives, and during those times it can help to take a second and shift your attention to the positives. <br></br>One way to do this is gratitude journaling, taking some time each week to note down the fortune in your life.<br></br><a class=hyperlink href=https://ggia.berkeley.edu/practice/gratitude_journal>https://ggia.berkeley.edu/practice/gratitude_journal</a><br></br>Further Reading<br></br><a class=hyperlink href=https://greatergood.berkeley.edu/article/item/how_to_overcome_your_brains_fixation_on_bad_things>https://greatergood.berkeley.edu/article/item/how_to_overcome_your_brains_fixation_on_bad_things</a>"];
var didSitting = ["Sitting's Adverse Impacts","By sitting for too long, you could put yourself at risk for vascular problems, skeletal problems, heart disease, weight gain, even cancer. It’d be good if you could get a standing desk that you can transition to every once in a while. Alternatively, take a break from sitting every thirty minutes or so, try stretching, or taking a walk. <br></br>Here are some simple stretches you can follow along with.<br></br><a class=hyperlink href=https://www.youtube.com/watch?=vNyJuQuuMC8>https://www.youtube.com/watch?v=vNyJuQuuMC8</a><br></br>For further reading, consult the following sites.<br></br><a class=hyperlink href=https://www.yalemedicine.org/news/sitting-health-risks>https://www.yalemedicine.org/news/sitting-health-risks</a>"];
var didSleep = ["Sleep and Cognition","There’s a clear link between sleep and long-term memory formation. In addition to memory, sleep deprivation also has effects on decision-making and attentiveness. If you’re trying to learn something, do good work, or become more adept at a certain task, make sure you are getting enough good sleep. Sporadic naps don’t count!<br></br>Be sure to set alarms to make sure you get enough sleep if you have problems keeping track, and see if you can’t plan or negotiate to be done with your commitments earlier.<br></br>For further reading, consult the following sites.<br></br><a class=hyperlink href=https://news.mit.edu/2009/memories-0624>https://news.mit.edu/2009/memories-0624</a><br></br><a class=hyperlink href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2656292/>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2656292/</a>"];

var messages = [["16","35","Hey! We think that you've been having a tough time recently. Maybe you should talk to a certified professional or trusted adult."],["36","70","You're doing fine! But make sure to keep on top of your health daily."],["71","100","You're doing great! Keep up the great work, but don't forget to check in tomorrow!"]]

function switchQuestion(num){
  if (currentIndex<ratingQuestions.length) {
    currentIndex++;
  
  //the answer can be both numerical(1-5) or boolean (true/false)
  var id = "ratings"+num;
  var answer = document.getElementById(id).value;//need to assign the ID as rating in HTML 
  var value = parseInt(answer);
  console.log(value);  
  sum += value;
  console.log(sum); 

  if(currentIndex == 1 && answer <= 2){
    journal = 1;
  }

  if(currentIndex == 5 && answer <= 2){
    sitting = 1;
  }

  if(currentIndex == 1){
    document.getElementById("h2").innerHTML = "1 being very tired and 5 being pretty free";
  }else if(currentIndex == 4){
    document.getElementById("h2").innerHTML = "1 being long seating and 5 being barely any seating";
  }else if(currentIndex == 6){
    document.getElementById("h2").innerHTML = "1 being little exercise and 5 being exercising extensively";
  }else if(currentIndex == 9){
    document.getElementById("h2").innerHTML = "1 being no control and 5 being under control";
  }else{
    document.getElementById("h2").innerHTML = "1 being awful and 5 being awesome.";
  }
  
  if(currentIndex == 10){
    sessionStorage.setItem('sum', sum);
    sessionStorage.setItem('journal', journal);
    sessionStorage.setItem('sitting', sitting);
    sessionStorage.setItem('sleep', sleep);
    
    window.location.href = "haveyoudrankenoughwatertoday.html";
  }else{
    document.getElementById("question").innerHTML = allQuestions[currentIndex];
  }
  }
}

function switchTrueFalse(num, id){
  if (currentTrueFalse == 0) {
    journal = parseInt(sessionStorage.getItem('journal'));
    sitting = parseInt(sessionStorage.getItem('sitting'));
    sleep = parseInt(sessionStorage.getItem('sleep'));
    sum = parseInt(sessionStorage.getItem('sum'));
  }
  if (currentTrueFalse<trueAndFalse.length) {
    currentTrueFalse++;
  

  sum += num;
  console.log(sum);


  if(currentTrueFalse == 3 && num == 0){
    sleep = 1;
  }
  
  //if(answer.localeCompare("No") && currentTrueFalse == 0){
    //var s = "Does this happen often?";
    //document.getElementById("truefalse").innerHTML = s;
  //}
    
  if(currentTrueFalse == 4){
    sessionStorage.setItem('sum', sum);
    sessionStorage.setItem('journal', journal);
    sessionStorage.setItem('sitting', sitting);
    sessionStorage.setItem('sleep', sleep);
    window.location.href = "results.html";
  }else{
    document.getElementById("truefalse").innerHTML = trueAndFalse[currentTrueFalse];
  }
  }
}

function updateSum() {
  journal = parseInt(sessionStorage.getItem('journal'));
  sitting = parseInt(sessionStorage.getItem('sitting'));
  sleep = parseInt(sessionStorage.getItem('sleep'));
  sum = parseInt(sessionStorage.getItem('sum'));
  console.log(journal);
  console.log(sitting);
  console.log(sleep);
  console.log(sum);
  return sum;
}

function testButton() {
  console.log(sum);
}

function showMessage(){
  console.log("Hello World");
  if(journal == 1){
    document.getElementById("outputtitle1").innerHTML = didJournal[0];
    document.getElementById("description1").innerHTML = didJournal[1];
  }
  if(sitting == 1){
    document.getElementById("outputtitle2").innerHTML = didSitting[0];
    document.getElementById("description2").innerHTML = didSitting[1];
  }
  if(sleep == 1){
    document.getElementById("outputtitle3").innerHTML = didSleep[0];
    document.getElementById("description3").innerHTML = didSleep[1];
  }
  document.getElementById("meter").value = sum/62;
  document.getElementById("score").innerHTML = `You scored ${Math.round((sum/62)*100)} out of 100`;
  for (const i of messages) {
    console.log(i);
    if (Math.round((sum/62)*100) >= parseInt(i[0]) && Math.round((sum/62)*100) <= parseInt(i[1])) {
      document.getElementById("message").innerHTML = i[2];
    }
  }
  if(journal == 0 && sitting == 0 && sleep == 0){
    document.getElementById("suggestions").innerHTML = "We've got no suggestions for you.";
  }
}