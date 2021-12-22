var minutes = "25"
var seconds = "00"

var click = new Audio("click.mp3")
var bell = new Audio("bell.mp3")

function template() {
    document.getElementById('minute').innerHTML = minutes
    document.getElementById('second').innerHTML = seconds

}


function start() {
    click.play()
    var minutes = "24"
    var seconds = "59"
    document.getElementById('minute').innerHTML = minutes
    document.getElementById('second').innerHTML = seconds

    var minutesinter = setInterval(minutesCount, 60000);
    var secondsinter = setInterval(secondsCount, 1000);


    function minutesCount() {
        minutes = minutes - 1
        document.getElementById("minute").innerHTML = minutes


    }

    function secondsCount() {
        seconds = seconds - 1
        click.play()
        document.getElementById("second").innerHTML = seconds

        if (seconds <= 00) {
            if (minutes <= 00) {
                clearInterval(minutesinter)
                clearInterval(secondsinter)
                test()

                document.getElementById('minute').innerHTML = 25
                document.getElementById('second').innerHTML = 00




            }
            seconds = 60
        }
        var strt = document.getElementById('btn-restart')
        strt.onclick = function() {
            clearInterval(minutesinter)
            clearInterval(secondsinter)
            document.getElementById('minute').innerHTML = 25
            document.getElementById('second').innerHTML = 00

            var strtbtn = document.getElementById('btn-play')
            strtbtn.classList.remove("dbtn")
            var textbreakchange = document.getElementById('text-content')
            textbreakchange.classList.remove("test-break")

        }

        var btnPause = document.getElementById('btn-pause')
        btnPause.onclick = function() {
            clearInterval(minutesinter)
            clearInterval(secondsinter)
        }




    }






}






// change the text when time is over 
function test() {
    document.getElementById('text-content').innerHTML = "take a break"
    var textbreakchange = document.getElementById('text-content')
    textbreakchange.classList.toggle("test-break")
    bell.play()

}

var strt = document.getElementById('btn-play')
var strtbtn = document.getElementById('btn-play')

strt.onclick = function() {
    start()
    var strtbtn = document.getElementById('btn-play')
    strtbtn.classList.toggle("dbtn")
    var textbreakchange = document.getElementById('text-content')
    textbreakchange.classList.remove("test-break")



}