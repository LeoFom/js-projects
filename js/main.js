// #1 - Timer
const hourValue = document.querySelector('.hour')
const minuteValue = document.querySelector('.minute')
const secondValue = document.querySelector('.second')
const millisecondValue = document.querySelector('.millisecond')

const startButton = document.querySelector('.button-start')
const pauseButton = document.querySelector('.button-pause')
const resetButton = document.querySelector('.button-reset')

// Listener
startButton.addEventListener('click',()=>{
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click',()=>{
    clearInterval(interval)
})

resetButton.addEventListener('click',()=>{
    millisecond=0
    millisecondValue.innerText="00"
    second=0
    secondValue.innerText="00"
    minute=0
    minuteValue.innerText="00"
    hour=0
    hourValue.innerText="00"
})

// Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval;

function startTimer(){
    millisecond++

    // Milliseconds
    if (millisecond<9){
        millisecondValue.innerText = "0"+millisecond
    }
    if (millisecond>9){
        millisecondValue.innerText = millisecond
    }
    if (millisecond>99){
        second++
        secondValue.innerText="0"+ second
        millisecond=0
        millisecondValue.innerText="0"+millisecond
    }

    // Seconds
    if (second<9){
        secondValue.innerText= "0" +second
    }
    if (second>9){
        secondValue.innerText=second
    }
    if (second>59){
        minute++
        minuteValue.innerText="0"+minute
        second=0
        secondValue.innerText="0"+second
    }

    // Minutes
    if (minute<9){
        minuteValue.innerText="0"+minute
    }
    if (minute>9){
        minuteValue.innerText=minute
    }
    if (minute>59){
        hour++
        hourValue.innerText="0"+hour
        minute=0
        minuteValue.innerText="0"+minute
        second=0
        secondValue.innerText="0"+second
        millisecond=0
        millisecondValue.innerText="0"+millisecond
    }

    // Hours
    if (hour<9){
        hourValue.innerText="0"+hour
    }
    if (hour>9){
        hourValue.innerText=hour
    }
    if (hour>23){
        hour=0
        hourValue.innerText="0"+hour
        minute=0
        minuteValue.innerText="0"+minute
        second=0
        secondValue.innerText="0"+second
        millisecond=0
        millisecondValue.innerText="0"+millisecond
    }
}

// #2 - Clock
const hourClock=document.querySelector('.clock-hour'),
    minuteClock=document.querySelector('.clock-minute'),
    secondClock=document.querySelector('.clock-second')

function clockTime(){
    const dateTime = new Date()
    h = dateTime.getHours()
    m = dateTime.getMinutes()
    s = dateTime.getSeconds()

    hourClock.innerText=h
    minuteClock.innerText=m
    secondClock.innerText=s
    if (s<9){
        secondClock.innerText= "0" +s
    }
    if (s>9){
        secondClock.innerText=s
    }
    if (s>59){
        m++
        minuteClock.innerText="0"+m
        s=0
        secondClock.innerText="0"+s
    }

    // Minutes
    if (m<9){
        minuteClock.innerText= "0" +m
    }
    if (m>9){
        minuteClock.innerText= m
    }
    if (m>59){
        h++
        hourClock.innerText="0"+h
        m=0
        minuteClock.innerText="0"+m
        s=0
        secondClock.innerText="0"+s
    }

    // Hours
    if (h<9){
        hourClock.innerText="0"+h
    }
    if (h>9){
        hourClock.innerText=h
    }
    if (h>23){
        h=0
        hourClock.innerText="0"+h
        m=0
        minuteClock.innerText="0"+m
        s=0
        secondClock.innerText="0"+s
    }
}
setInterval(clockTime, 10)

// #3 - Calendar


const date = new Date()

const calendarDo =()=>{

const monthDays = document.querySelector(".calendar-day");
const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}
const lastDays = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();

const prevDays= new Date(
    date.getFullYear(),
    date.getMonth(),
    0
).getDate()
const prevWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
    ).getDay() // Скільки днів у пройшовшому місяці від понеділка
const nextWeek = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0
).getDay();


const months =  [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
]

document.querySelector('.calendar-date h1').innerText=months[date.getMonth()]
document.querySelector(".calendar-date p").innerText = date.toLocaleDateString('uk-UA', options)

// (Days)
let days = ""
for(let x=prevWeek; x>0; x--){
    days +=`<div class="prev-day">${prevDays - x +1 }</div>`
}

for (let i = 1; i<=lastDays; i++){
    if ( i === new Date().getDate() && 
    date.getMonth() === new Date().getMonth()){
        days += `<div class="today">${i}</div>`
    }
    else {
        days +=`<div>${i}</div>`
    }
}

for (let y=1; y<=7-nextWeek; y++){
    days +=`<div class="next-day">${y}</div>`
    // day.innerHTML = days
    monthDays.innerHTML=days
}
}

const plusB=document.querySelector('.plus')
const minuseB=document.querySelector('.minuse')
minuseB.addEventListener('click', ()=>{
    date.setMonth(date.getMonth()-1)
    calendarDo()
})
plusB.addEventListener('click', ()=>{
    date.setMonth(date.getMonth()+1)
    calendarDo()
})
calendarDo()


// #4 - Calculator

// let a='',
//     b='',
//     Use=0
// const tablo = document.querySelector('.clalculator-board-tablo h1')
// const CButton=document.querySelector('.calculator-board-buttons')

// CButton.addEventListener('click', function(event){
//     const value=event.target.innerText

//     switch(value){
//         case 'AC':
//             tablo.innerText=""
//             break
//         case '=':
//             tablo.innerText=eval().toFixed(2)
//     }
//     tablo.innerText+=value

//     // if(event.target.innerText=='AC'){
//     //     tablo.innerText="0"
//     //     a=''
//     //     b=''
//     //     Use=0
//     // }
//     // console.log(event.target.innerText)
    
//     // №1 Нажата цифра, записывается в переменную - a
    
//     // if(event.target.innerText=="1","2","3","4","5","6","7","8","9","0"){
//     //     tablo.innerText+=value
//     //     console.log("Num!")
        
//     // }
//     // №2 Нажато действие, Use=1

//     // №3 После Use=1, записываеть в переменную - b

//     // При нажатии '=', Use=0, подсчитать a+действие+b
// })
// if (Use==0){
// }


// #5 - Drum pad

// for(let i=0;i<6;i++){
//     document.querySelector(".drumpad-board-buttons").addEventListener('click', function(){
//         let text=this.innerText
//         console.log(text)

        
// })}

function play(event){
    console.dir(`я знаю, ${event.code}`)
}
switch(document.addEventListener('keyup',play)){
    case 'KeyQ':
}


