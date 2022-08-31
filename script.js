const dateText = document.getElementById('date')
const timeText = document.getElementById('time')


setInterval(() => {
    const day = dayjs().format('ddd D MMM YYYY').toUpperCase()
    const time = dayjs().format('HH:mm:ss')
    dateText.innerHTML = day
    timeText.innerHTML = time
}, 1000)