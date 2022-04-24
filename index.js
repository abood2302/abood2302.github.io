if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js').then(registeration=>{
        console.log("Service worker registered")
    }).catch(error=>{
        console.log("Service worker registeration failed");
        console.log(error);
    })
}

const sh_sm = document.getElementById('small')
const sh_sm_count = document.getElementById('shawerma-small-count');
const sh_sm_add = document.getElementById('sh-sm-add')
const sh_sm_remove = document.getElementById("sh-sm-remove")

const sh_sm_ch = document.getElementById('small-cheese')


const sh_l = document.getElementById('large')


const sh_l_ch = document.getElementById('large-cheese')


const sh_ar = document.getElementById("arabic")


const sh_ar_ch = document.getElementById('arabic-cheese')


const frise = document.getElementById('fries')


const sh_total = document.querySelector('#shwarma-total')
const piiza_butoon = document.querySelector('#pizza')
const pizza_total = document.querySelector('#pizza_total')
const pa_five = document.querySelector('#pa_5')
const pa_three = document.querySelector('#pa_3')
const pa_tow = document.querySelector('#pa_2')
const square_total = document.querySelector('#square')
const dayTotal = document.getElementById('daytotal')
const show = document.getElementById('show-info')
const rest = document.getElementById("rest")
const byMonth = document.getElementById('getbymonth')
const month = document.getElementById('month')
let input = document.querySelector('input')
const submit = document.querySelector('.submit')

// get current month and update button text dynamically
const currentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const d = new Date();
let monthtext = currentMonth[d.getMonth()];

byMonth.textContent = monthtext + " sales report"

currentdate = new Date()
datestringelement = document.getElementById('datestring')
dateString = `${new Date().toLocaleDateString('en-GB', { weekday: 'short' })} ${currentdate.getDate()} ${monthtext} ${currentdate.getFullYear()}`
datestringelement.textContent = dateString



const lastTotalAtTheDay = []

// shwarma button logic

let totalShawrmaByDay = 0;
var sh_sm_temp = 0

sh_sm.addEventListener('click', () => {
    totalShawrmaByDay += 6
    sh_sm_temp = sh_sm_temp + 1
    if (sh_sm_temp>0) {
        sh_sm_count.textContent = sh_sm_temp
    } else {
        sh_sm_count.textContent = '0'
    }
})

sh_sm_add.addEventListener('click', () => {
    totalShawrmaByDay += 6
    sh_sm_temp = sh_sm_temp + 1
    if (sh_sm_temp>0) {
        sh_sm_count.textContent = sh_sm_temp
    } else {
        sh_sm_count.textContent = '0'
    }
})

sh_sm_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 6
    sh_sm_temp = sh_sm_temp -1
    if (sh_sm_temp>0) {
        sh_sm_count.textContent = sh_sm_temp
    } else {
        sh_sm_count.textContent = '0'
    }
})

sh_sm_ch.addEventListener('click', () => {
    totalShawrmaByDay += 7
    console.log(totalShawrmaByDay);
})

sh_l.addEventListener('click', () => {
    totalShawrmaByDay += 9
    console.log(totalShawrmaByDay);
})

sh_l_ch.addEventListener('click', () => {
    totalShawrmaByDay += 11
    console.log(totalShawrmaByDay);
})

sh_ar.addEventListener('click', () => {
    totalShawrmaByDay += 16
    console.log(totalShawrmaByDay);
})

sh_ar_ch.addEventListener('click', () => {
    totalShawrmaByDay += 18
    console.log(totalShawrmaByDay);
})

frise.addEventListener('click', () => {
    totalShawrmaByDay += 6
    console.log(totalShawrmaByDay);
})

// pizza button
let totalPizza = 0;
piiza_butoon.addEventListener('click', () => {
    totalPizza += 16 - 1 // pizza button decrement to accomadate for the starting value of 1
    console.log(totalPizza);
});


// input.

let submitTotal = 0;

submit.addEventListener('click', () => {
    let inputValue = +input.value
    submitTotal += inputValue
    // console.log(submitTotal.typeof);
    console.log(inputValue);
    console.log(submitTotal);
})

// pastries total 

let totalPastries = 0;

pa_five.addEventListener('click', () => {
    totalPastries += 5
    console.log(totalPastries);
})

pa_three.addEventListener('click', () => {
    totalPastries += 3
    console.log(totalPastries);
})


pa_tow.addEventListener('click', () => {
    totalPastries += 2
    console.log(totalPastries);
})


let totalDaySell = 0;
dayTotal.addEventListener('click', () => {
    totalDaySell = totalShawrmaByDay + totalPastries + totalPizza + submitTotal;
    console.log(totalDaySell);
    show.innerHTML = totalDaySell
    lastTotalAtTheDay.push(totalDaySell)
    // localStorage.setItem('item1', JSON.stringify(lastTotalAtTheDay))
    localStorage.setItem('item1', JSON.stringify(lastTotalAtTheDay))

    // localStorage.setItem('item1', JSON.stringify(lastTotalAtTheDay))
    // console.log(JSON.parse(localStorage.getItem('item1')));
})

rest.addEventListener('click', () => {
    totalPastries = 0
    totalPizza = 0
    totalShawrmaByDay = 0
    submitTotal = 0
    // reset counter text
    sh_sm_count.textContent ='';
    // reset temp variables
    sh_sm_temp = 0
    // fix xss bug
    show.textContent = 'Daily Sales'

})
let monthSell = 0;


// console.log(newArry);
// console.log(lastTotalAtTheDay);
byMonth.addEventListener('click', () => {


    const arr = (JSON.parse(localStorage.getItem('item1')))
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        monthSell += x
    }
    month.innerHTML = monthSell
    console.log(arr);


});




