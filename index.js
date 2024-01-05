

console.log("oi")


function horas()
{
    document.getElementById('hora').innerHTML = new Date().getHours()
    document.getElementById('minuto').innerHTML = new Date().getMinutes()
    document.getElementById('segundo').innerHTML = new Date().getSeconds()
}

setInterval(horas, 1000)