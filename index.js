if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js').then(registeration => {
        console.log("Service worker registered")
    }).catch(error => {
        console.log("Service worker registeration failed");
        console.log(error);
    })
}

const sh_sm = document.getElementById('small')
const sh_sm_count = document.getElementById('shawerma-small-count');
const sh_sm_add = document.getElementById('sh-sm-add')
const sh_sm_remove = document.getElementById("sh-sm-remove")
const sh_sm_ch = document.getElementById('small-cheese')
const sh_sm_ch_remove = document.getElementById('sh-sm-ch-remove')
const sh_l = document.getElementById('large')
const sh_la_remove = document.getElementById('sh-la-remove')
const sh_l_ch = document.getElementById('large-cheese')
const sh_la_ch_remove = document.getElementById('sh-la-ch-remove')
const sh_ar = document.getElementById("arabic")
const sh_ar_remove = document.getElementById('sh-ar-remove')
const sh_ar_ch = document.getElementById('arabic-cheese')
const ar_ch_remove = document.getElementById('ar-ch-remove')
const frise = document.getElementById('fries')
const fries_remove = document.getElementById('fries-remove')
const sh_total = document.querySelector('#shwarma-total')
const piiza_butoon = document.querySelector('#pizza')
const pizza_remove = document.getElementById('pizza_remove')
const pizza_total = document.querySelector('#pizza_total')
const chiken = document.getElementById('chiken')
const chic_remove = document.getElementById('chic_remove')
const pa_five = document.querySelector('#pa_5')
const pastries5_remove = document.getElementById('pastries5_remove')
const pa_three = document.querySelector('#pa_3')
const pastries3_remove = document.getElementById('pastries3_remove')
const pa_tow = document.querySelector('#pa_2')
const pastries2_remove = document.getElementById('pastries2_remove')
const square_total = document.querySelector('#square')
const dayTotal = document.getElementById('daytotal')
const show = document.getElementById('show-info')
const rest = document.getElementById("rest")
const byMonth = document.getElementById('getbymonth')
const month = document.getElementById('month')
let input = document.querySelector('input')
const submit = document.getElementById('submit')
const totalorder = document.getElementById('totalorder');
const showOrderInfo = document.getElementById('show_totalorder')


const lastTotalAtTheDay = []

// shwarma button logic

let totalShawrmaByDay = 0;
let sh_temp = 0
let pizza_temp = 0;
let totalOrder = 0;

sh_sm.addEventListener('click', () => {
    totalShawrmaByDay += 6
    totalOrder += 6
})


sh_sm_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 6

    totalOrder -= 6
})

sh_sm_ch.addEventListener('click', () => {
    totalShawrmaByDay += 7
    totalOrder += 7
    console.log(totalShawrmaByDay);
})

sh_sm_ch_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 7

    totalOrder -= 7

})

sh_l.addEventListener('click', () => {
    totalShawrmaByDay += 9

    console.log(totalShawrmaByDay);
    totalOrder += 9
})

sh_la_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 9


    totalOrder -= 9
})

sh_l_ch.addEventListener('click', () => {
    totalShawrmaByDay += 11

    console.log(totalShawrmaByDay);
    totalOrder += 11
})

sh_la_ch_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 11

    totalOrder -= 11
})

sh_ar.addEventListener('click', () => {
    totalShawrmaByDay += 16

    console.log(totalShawrmaByDay);
    totalOrder += 16
})

sh_ar_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 16


    totalOrder -= 16
})

sh_ar_ch.addEventListener('click', () => {
    totalShawrmaByDay += 18

    console.log(totalShawrmaByDay);
    totalOrder += 18
})
ar_ch_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 18
    totalOrder -= 18
})

frise.addEventListener('click', () => {
    totalShawrmaByDay += 6
    console.log(totalShawrmaByDay);
    totalOrder += 6
})

fries_remove.addEventListener('click', () => {
    totalShawrmaByDay -= 6

    totalOrder -= 6
})

// pizza button
let totalPizza = 0;
piiza_butoon.addEventListener('click', () => {
    totalPizza += 16
    totalOrder += 16
    console.log(totalPizza);
});

pizza_remove.addEventListener('click', () => {
    totalPizza -= 16
    totalOrder -= 16
    console.log(totalPizza);
})

chiken.addEventListener('click', () => {
    totalPizza += 17;
    totalOrder += 17
    console.log(totalPizza);
})

chic_remove.addEventListener('click', () => {
    totalPizza -= 17
    totalOrder -= 17
    console.log(totalPizza);
})




// input.

let submitTotal = 0;

submit.addEventListener('click', () => {
    let inputValue = +input.value
    submitTotal += inputValue
    console.log(inputValue);
    console.log(submitTotal);
})

// pastries total 

let totalPastries = 0;

pa_five.addEventListener('click', () => {
    totalPastries += 5
    totalOrder += 5
    console.log(totalPastries);
})

pastries5_remove.addEventListener('click', () => {
    totalPastries -= 5
    totalOrder -= 5
    console.log(totalPastries);
})

pa_three.addEventListener('click', () => {
    totalPastries += 3
    totalOrder += 3
    console.log(totalPastries);
})

pastries3_remove.addEventListener('click', () => {
    totalPastries -= 3
    totalOrder -= 3
    console.log(totalPastries);
})



pa_tow.addEventListener('click', () => {
    totalPastries += 2
    totalOrder += 2
    console.log(totalPastries);
})

pastries2_remove.addEventListener('click', () => {
    totalPastries -= 2
    totalOrder -= 2
    console.log(totalPastries);
})


totalorder.addEventListener('click', () => {
    showOrderInfo.innerHTML = totalOrder
    totalOrder = 0
})

showOrderInfo.innerHTML = ' total order'

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
    localStorage.removeItem('item1')


});




