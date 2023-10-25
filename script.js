// قائمة الأحرف
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

// تحويل الأحرف إلى مصفوفة
let lettersArry = Array.from(letters);

// العنصر الذي سيحتوي على الأحرف
let lettersDiv = document.querySelector('.letters');

// إضافة الأحرف كعناصر فرعية إلى العنصر
lettersArry.forEach(letter => {
    let span =  document.createElement('span');
    span.textContent = letter;
    span.classList.add('letter-box');
    lettersDiv.appendChild(span);
});

// كائن يحتوي على الكلمات
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// الحصول على مفاتيح الكائن
let allKeys = Object.keys(words);

// اختيار عشوائي لمفتاح
let randomProp = allKeys[Math.floor(Math.random() * allKeys.length)];

// عرض المفتاح العشوائي كاسم الفئة
document.querySelector('.category span').textContent = randomProp;

// اختيار كلمة عشوائية من الفئة
let randomValue = words[randomProp][Math.floor(Math.random() * words[randomProp].length)];

// تحويل الكلمة إلى مصفوفة من الأحرف
let randomValueArray = Array.from(randomValue.toUpperCase());

// العنصر الذي سيحتوي على تخمين الحروف
let lettersGuess = document.querySelector('.lettersGuess');

// إضافة عناصر تخمين الحروف
randomValueArray.forEach((letter) => {
    let span = document.createElement('span');

    // إذا كانت الحرف مسافة (مكان للفراغ)
    if (letter === ' ') {
        span.classList.add('with-space');
    }
    
    // إضافة عنصر تخمين الحرف إلى العنصر الخاص بالتخمين
    lettersGuess.appendChild(span);
});

let theWrongNum = 0;

document.addEventListener(('click'),function (e) {
    
    let theStatus = false;
    
    if (e.target.classList.contains('letter-box')) {
        
        e.target.classList.add('clicked');
        console.log(e.target.textContent)

        randomValueArray.forEach((ele,index) =>{
            if (e.target.textContent == ele) {
                
                theStatus = true;
                

                console.log(`found ${ele} in ${index}`)

                let letterGuess = document.querySelectorAll('.lettersGuess span');
                
                letterGuess[index].textContent = e.target.textContent
            }

        
        })

        if (theStatus !== true) {

            theWrongNum++;

            document.querySelector('.hangman-draw').classList.add(`wrong-${theWrongNum}`)

            if (theWrongNum === 7) {
                
                lettersDiv.classList.add('finish')

                endGame()
            }

            document.getElementById('wrong').play();
        }
        else{
            document.getElementById('win').play();

        }
    }
    
    
})

function endGame() {
    
    let endDiv = document.createElement('div')
    let endDivSpan = document.createElement('span')

    endDiv.textContent = `The Game Is End The Word Is ... ${randomValue.toUpperCase()} ...`;
    endDivSpan.textContent = ` The Wrong Traies Is ${theWrongNum}`

    endDiv.className = 'endGameDiv'
    endDivSpan.className = 'endGameSpan'
    
    endDiv.appendChild(endDivSpan)
    document.body.appendChild(endDiv)


    setTimeout(() => {
        document.addEventListener('click',() =>{
            location.reload()
        })
    }, 3000);
}





















