let Visual = 0;
let Aural = 0;
let Verbal = 0;
let Physical = 0;
let Logical = 0;
let Social = 0;
let Solitary = 0;
let slideIndex = 1;
const test = document.querySelectorAll('.aq1');
const consoles = document.querySelectorAll('.questions');
const othertest = document.querySelector('#two');
let slides = document.querySelectorAll('.mySlides');
let dots = document.querySelectorAll('.dot');
let box = document.querySelector('.box');
let number = document.querySelector('h1');
let link = document.createElement('BUTTON');
let display = document.querySelector('.Display');
let funWords = [
  'Hmm... a tough one!',
  'Wow who comes up with these things?',
  "The answer is always B isn't it?",
  'How long is this test anyway?',
  'Choose carefully, young padawan...',
  'The answers are the scope in your soul...',
  "I hope you're not a bad test taker",
  "You're not supposed to be able to fail this test...right?"
];

link.className = 'buttonstyle';

const darkMode = () => {
  let words7 = document.querySelector('.seven');
  let change = document.querySelector('#dark');
  let spacebody = document.querySelector('body');
  if (change.innerText == 'Wooden Mode') {
    spacebody.className = 'spacebody';
    box.className = 'spacebox';
    words7.style.color = 'white';
    // change.setAttribute = 'wooden';
    change.innerText = 'SPACE MODE';
  } else if (change.innerText == 'SPACE MODE') {
    spacebody.className = 'body';
    box.className = 'box';
    words7.style.color = 'black';
    change.innerText = 'Wooden Mode';
  }
};

const aural = (x) => {
  return (Aural += x);
};
const visual = (x) => {
  return (Visual += x);
};

const verbal = (x) => {
  return (Verbal += x);
};

const physical = (x) => {
  return (Physical += x);
};

const logical = (x) => {
  return (Logical += x);
};

const social = (x) => {
  return (Social += x);
};

const solitary = (x) => {
  return (Solitary += x);
};

const results = () => {
  let a = document.createElement('a');
  if (
    Physical > Visual &&
    Physical > Logical &&
    Physical > Solitary &&
    Physical > Aural &&
    Physical > Verbal &&
    Physical > Social
  ) {
    link.innerText = `You're a Physical learner! Click me to learn more`;
    a.appendChild(link);
    a.href =
      'file:///Users/calvin/ga_seir/unit1/homework/u1Personality%20Quiz%20Project/physical.html';
    box.appendChild(a);
  } else if (
    Visual > Logical &&
    Visual > Solitary &&
    Visual > Aural &&
    Visual > Physical &&
    Visual > Verbal &&
    Visual > Social
  ) {
    link.innerText = `You're a Visual learner! Click me to learn more`;
    a.appendChild(link);
    a.href =
      'file:///Users/calvin/ga_seir/unit1/homework/u1Personality%20Quiz%20Project/visual.html';
    box.appendChild(a);
  } else if (
    Logical > Solitary &&
    Logical > Aural &&
    Logical > Physical &&
    Logical > Verbal &&
    Logical > Visual &&
    Logical > Social
  ) {
    link.innerText = `You're a Logical learner! Clcik me to learn more`;
    a.appendChild(link);
    a.href =
      'file:///Users/calvin/ga_seir/unit1/homework/u1Personality%20Quiz%20Project/logical.html';
    box.appendChild(a);
  } else if (
    Solitary > Aural &&
    Solitary > Logical &&
    Solitary > Social &&
    Solitary > Visual &&
    Solitary > Physical &&
    Solitary > Verbal
  ) {
    link.innerText = "You're a Solitary learner! Click me to learn more";
    a.appendChild(link);
    a.href =
      'file:///Users/calvin/ga_seir/unit1/homework/u1Personality%20Quiz%20Project/soiltary.html';
    box.appendChild(a);
  } else if (
    Aural > Logical &&
    Aural > Visual &&
    Aural > Verbal &&
    Aural > Physical &&
    Aural > Solitary &&
    Aural > Social
  ) {
    link.innerText = `You're a Aural learner! Click me to learn more`;
    a.appendChild(link);
    a.href =
      'file:///Users/calvin/ga_seir/unit1/homework/u1Personality%20Quiz%20Project/aural.html';
    box.appendChild(a);
  } else if (
    Social > Solitary &&
    Social > Verbal &&
    Social > Physical &&
    Social > Aural &&
    Social > Logical &&
    Social > Visual
  ) {
    link.innerText = `You're a Social learner! Click me to learn more`;
    a.appendChild(link);
    a.href =
      'file:///Users/calvin/ga_seir/unit1/homework/u1Personality%20Quiz%20Project/social.html';
    box.appendChild(a);
  } else if (
    Verbal > Solitary &&
    Verbal > Visual &&
    Verbal > Logical &&
    Verbal > Social &&
    Verbal > Aural &&
    Verbal > Physical
  ) {
    link.innerText = `You're a Verbal learner! Click me to learn more`;
    a.appendChild(link);
    a.href =
      'file:///Users/calvin/ga_seir/unit1/homework/u1Personality%20Quiz%20Project/verbal.html';
    box.appendChild(a);
  }

  console.log(Aural + ' Aural');
  console.log(Verbal + ' Verbal');
  console.log(Physical + ' Physical');
  console.log(Social + ' Social');
  console.log(Solitary + ' Solitary');
  console.log(Logical + ' Logical');
  console.log(Visual + ' Visual');
};

const questions = () => {
  switch (slideIndex) {
    case 2:
      box.innerText =
        'Which of the following describes the most effective way you have been able to learn?';
      break;
    case 3:
      box.innerText =
        'What would be the first way you would go about teaching something new to someone?';
      break;
    case 4:
      box.innerText = 'In your childhood you were more...';
      break;
    case 5:
      box.innerText =
        'Which of the following would you most prefer to have in your personal work environment?';
      break;
    case 6:
      box.innerText = 'Which is your most preferred movie genre?';
      break;
    case 7:
      box.innerText =
        'Which of the following is the most useful app on your phone?';
      break;
    case 8:
      box.innerText =
        'When faced with an extremely difficult problem you are most likely to...';
      break;
    case 9:
      box.innerText =
        'Which of the following is the most difficult situation for you to be in?';
      break;
    case 10:
      box.innerText = 'Which is the best compliment you could recieve?';
      break;
    case 11:
      box.innerText =
        'Which of the following sounds like the most appealing place to go with friends?';
      break;
    case 12:
      box.innerText = 'What are the most memorable moments in life for you?';
      break;
    case 13:
      box.innerText =
        'Which of the following has been the best resource for you to use in this course?';
      break;
    case 14:
      box.innerText = `The best film directors are the ones's who can most effectively...`;
      break;
    case 15:
      box.innerText =
        "Which of these activities do you most often do when you're by yourself?";
      break;
    case 16:
      box.innerText =
        'Before you wanted to come to GA, what career choice were you most attracted to?';
      break;
    case 17:
      box.innerText =
        'Which of these is the easiest for you to do on a regular basis?';
      break;
    case 18:
      box.innerText =
        "The best way to support you when you're faced with a new challenge is to...";
      break;
    case 19:
      box.innerText = 'What was your favorite subject in grade school?';
      break;
    case 20:
      box.innerText =
        'Which lesson have you been the most comfortable with thus far?';
      break;
  }
};

showSlides(slideIndex);

// Next/previous controls
const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  number.innerText = 'Question ' + slideIndex;
  display.innerText = funWords[Math.floor(Math.random() * funWords.length)];
}
