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
const showOrderInfo = document.getElementById('show_totalorder');
const eachorder = document.getElementById('last')
const clear = document.getElementById('clear')


let lastTotalAtTheDay = []

let totalOrderarr = []

// shwarma button logic

let orderDet = 0;

let totalShawrmaByDay = 0;
let sh_temp = 0
let pizza_temp = 0;
let totalOrder = 0;

sh_sm.addEventListener('click', () => {
    totalOrderarr.push(6)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 6
    eachorder.textContent = `you add ${orderDet}`

})


sh_sm_remove.addEventListener('click', () => {
    totalOrderarr.push(-6)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 6
    eachorder.textContent = `you remove ${orderDet}`
})

sh_sm_ch.addEventListener('click', () => {
    totalOrderarr.push(7)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 7
    eachorder.textContent = `you add ${orderDet}`
    console.log(totalShawrmaByDay);
})

sh_sm_ch_remove.addEventListener('click', () => {
    totalOrderarr.push(-7)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 7
    eachorder.textContent = `you remove ${orderDet}`

})

sh_l.addEventListener('click', () => {
    totalOrderarr.push(9)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))

    orderDet += 9
    eachorder.textContent = `you add ${orderDet}`
})

sh_la_remove.addEventListener('click', () => {
    totalOrderarr.push(-9)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 9
    eachorder.textContent = `you remove ${orderDet}`
})

sh_l_ch.addEventListener('click', () => {
    totalOrderarr.push(11)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 11
    eachorder.textContent = `you add ${orderDet}`
})

sh_la_ch_remove.addEventListener('click', () => {
    totalOrderarr.push(-11)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 11
    eachorder.textContent = `you remove ${orderDet}`
})

sh_ar.addEventListener('click', () => {
    totalOrderarr.push(16)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 16
    eachorder.textContent = `you add ${orderDet}`
})

sh_ar_remove.addEventListener('click', () => {
    totalOrderarr.push(16)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 16
    eachorder.textContent = `you remove ${orderDet}`
})

sh_ar_ch.addEventListener('click', () => {
    totalOrderarr.push(18)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 18
    eachorder.textContent = `you add ${orderDet}`
})
ar_ch_remove.addEventListener('click', () => {
    totalOrderarr.push(-18)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 18
    eachorder.textContent = `you remove ${orderDet}`
})

frise.addEventListener('click', () => {
    totalOrderarr.push(6)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 6
    eachorder.textContent = `you add ${orderDet}`
})

fries_remove.addEventListener('click', () => {
    totalOrderarr.push(-6)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 6
    eachorder.textContent = `you remove ${orderDet}`
})

// pizza button

piiza_butoon.addEventListener('click', () => {
    totalOrderarr.push(16)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 16
    eachorder.textContent = `you add ${orderDet}`
});

pizza_remove.addEventListener('click', () => {
    totalOrderarr.push(-16)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 16
    eachorder.textContent = `you remove ${orderDet}`
})

chiken.addEventListener('click', () => {
    totalOrderarr.push(17)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 17
    eachorder.textContent = `you add ${orderDet}`
})

chic_remove.addEventListener('click', () => {
    totalOrderarr.push(-17)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 17
    eachorder.textContent = `you remove ${orderDet}`
})




// input.

let submitTotal = 0;

submit.addEventListener('click', () => {
    let inputValue = +input.value
    submitTotal += inputValue
    totalOrderarr.push()
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    input.value = '';
})

// pastries total 

let totalPastries = 0;

pa_five.addEventListener('click', () => {
    totalOrderarr.push(5)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 5
    eachorder.textContent = `you add ${orderDet}`
})

pastries5_remove.addEventListener('click', () => {
    totalOrderarr.push(-5)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 5
    eachorder.textContent = `you remove ${orderDet}`
})

pa_three.addEventListener('click', () => {
    totalOrderarr.push(3)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet += 3
    eachorder.textContent = `you add ${orderDet}`
})

pastries3_remove.addEventListener('click', () => {
    totalOrderarr.push(-3)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 3
    eachorder.textContent = `you remove ${orderDet}`
})



pa_tow.addEventListener('click', () => {
    totalOrderarr.push(2)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))

    orderDet += 2
    eachorder.textContent = `you add ${orderDet}`
})

pastries2_remove.addEventListener('click', () => {
    totalOrderarr.push(-2)
    localStorage.setItem('order', JSON.stringify(totalOrderarr))
    orderDet -= 2
    eachorder.textContent = `you add ${orderDet}`
})

clear.addEventListener('click', () => {
    eachorder.textContent = 'the next order is';
    orderDet = 0;
})


totalorder.addEventListener('click', () => {
    showOrderInfo.innerHTML = totalOrder
    totalOrder = 0
    console.log(totalOrder);
})

showOrderInfo.innerHTML = ' total order'

let totalDaySell = 0;
dayTotal.addEventListener('click', () => {
    // totalDaySell = totalShawrmaByDay + totalPastries + totalPizza + submitTotal;
    // console.log(totalDaySell);
    const arr = (JSON.parse(localStorage.getItem('order')))

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        totalDaySell += x
        console.log('its work ');
    }
    show.innerHTML = totalDaySell
    lastTotalAtTheDay.push(totalDaySell)
    localStorage.setItem('item1', JSON.stringify(lastTotalAtTheDay))

    // localStorage.removeItem('order')


    // localStorage.setItem('item1', JSON.stringify(lastTotalAtTheDay))
    // console.log(JSON.parse(localStorage.getItem('item1')));
})



rest.addEventListener('click', () => {
    // localStorage.length = 0
    // let storge = (JSON.parse(localStorage.getItem('order')))
    // const valueArry = storge.values();
    totalDaySell = 0

    totalOrderarr = []
    var order = []
    localStorage.setItem("order", JSON.stringify(order));

    //localStorage.removeItem('order')
    // const newArry = []
    // totalOrderarr = newArry


    show.textContent = 'Daily Sales'
    console.log(totalOrderarr);
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
    lastTotalAtTheDay = []

});


// eachorder.textContent = ` You enter ${totalShawrmaByDay}`

