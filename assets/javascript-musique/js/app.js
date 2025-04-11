let listButtons = document.getElementsByTagName('button');
console.log(listButtons)

for(let i =  0; i < listButtons.length; i++) {
    listButtons[i].addEventListener('click', function(){
        let buttonText = this.innerHTML;
        makeSound(buttonText);
    }  )
}

// KEYPRESS

document.addEventListener('keypress', function(e){
    let keyPressed = e.key;
    makeSound(keyPressed)

})

function makeSound(letterClickedOrPressed) {

    switch (letterClickedOrPressed) {
        case 'w':
            let tom1 = new Audio('/sounds/w.mp3 ');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('/Users/alex/Desktop/DIW61/tp-lms/RESSOURCES SUPPORT TP JAVASCRIPT EN MUSIQUE-20230109/ressources TP javascrip en musique/sounds/a.mp3 ');
            tom2.play();
            break;
        
        case 's':
            let tom3 = new Audio('/Users/alex/Desktop/DIW61/tp-lms/RESSOURCES SUPPORT TP JAVASCRIPT EN MUSIQUE-20230109/ressources TP javascrip en musique/sounds/s.mp3 ');
            tom3.play();
            break;
        
        case 'd':
            let tom4 = new Audio('/Users/alex/Desktop/DIW61/tp-lms/RESSOURCES SUPPORT TP JAVASCRIPT EN MUSIQUE-20230109/ressources TP javascrip en musique/sounds/d.mp3 ');
            tom4.play();
            break;
        

        case 'j':
            let tom5 = new Audio('/Users/alex/Desktop/DIW61/tp-lms/RESSOURCES SUPPORT TP JAVASCRIPT EN MUSIQUE-20230109/ressources TP javascrip en musique/sounds/j.mp3 ');
            tom5.play();
            break;
       
        case 'k':
            let tom6 = new Audio('/Users/alex/Desktop/DIW61/tp-lms/RESSOURCES SUPPORT TP JAVASCRIPT EN MUSIQUE-20230109/ressources TP javascrip en musique/sounds/k.mp3 ');
            tom6.play();
            break;
        
        case 'l':
            let tom7 = new Audio('/Users/alex/Desktop/DIW61/tp-lms/RESSOURCES SUPPORT TP JAVASCRIPT EN MUSIQUE-20230109/ressources TP javascrip en musique/sounds/l.mp3 ');
            tom7.play();
            break;
              
        default:
            break;
    }
    buttonAnimation(letterClickedOrPressed);
}

function buttonAnimation(letterClickedOrPressed) {

    let button = document.getElementsByClassName(letterClickedOrPressed)[0];
    button.classList.add('pressed');

    setTimeout(function(){
        button.classList.remove('pressed');
    }, 200);
}