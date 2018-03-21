$(document).ready(function() {
    // //digital clock
    setInterval(function() {
        let date = moment().format('h:mm:ss a');
        $('#clock').html(date)
    }, 1000)

    //rgb color ticker  
    var r=0;
    var g=0;
    var b=0;
    setInterval(function() {
        b++
        if (b === 255) {b = 0; g++;}
        if (g === 255) {g = 0; r++;}
        if (r === 256) {r = 0; g = 0; b = 0;}
        $('#rgb p').html(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`)
        $('#rgb').css('background-color', `rgb(${r},${g},${b})`)
    }, 10)

    //analog clock
    function setLocalTime() {
        var seconds = moment().format('ss');
        var minutes = moment().format('mm');
        var hours = moment().format('h');
        // Create an object with each hand and it's angle in degrees
        var hands = [
            {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
            },
            {
                hand: 'minutes',
                angle: (minutes * 6)
            },
            {
                hand: 'seconds',
                angle: (seconds * 6)
            }
        ];
        // Loop through each of these hands to set their angle
        for (var j = 0; j < hands.length; j++) {
            var elements = $(`.${hands[j].hand}`);
            for (var k = 0; k < elements.length; k++) {
                elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
            }
        }
    }

    setLocalTime();
    
})