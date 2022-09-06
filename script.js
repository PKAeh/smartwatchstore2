const dateText = document.getElementById('date')
const timeText = document.getElementById('time')
const bgColor = document.getElementById('bg')
const bgTime = 10

setInterval(() => {
    const day = dayjs().format('ddd D MMM YYYY').toUpperCase()
    const time = dayjs().format('HH:mm:ss')
    dateText.innerHTML = day
    timeText.innerHTML = time
}, 1000)


setInterval(() => {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    bgColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}, bgTime * 1000);