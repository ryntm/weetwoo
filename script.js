let person = 'georgia';

$('#weet-button').click(() => {
    console.log(person);
    // play sound
    // 
})

// on down click play a sound and change image source
 
// on up click play another sound and change image source


$('#georgia').click(() => {
    person = 'georgia';
    $('#weet-button').attr('style', "background-image: url(wee.jpg)")

})

let trackNumber

$('#weet-button').mousedown(() => {

    if (person == 'georgia') {
        $('#weet-button').attr('style', "background-image: url(twoo.jpg)")
        trackNumber = Math.ceil(Math.random() * 4)
        $('#weetwoo').attr('src', `weetwoo${trackNumber}.mp3`)
        console.log(trackNumber)
        let audio = $("#weetwoo")[0];
        audio.play();
    } else {
        trackNumber = Math.ceil(Math.random() * 2)
        $('#weet-button').attr('style', "background-image: url(ren.jpg)")
        $('#weetwoo').attr('src', `karen${trackNumber}.mp3`)
        console.log(trackNumber)
        let audio = $("#weetwoo")[0];
        audio.play();
    }
})

document.getElementById('weet-button').addEventListener('touchstart', () => {
    if (person == 'georgia') {
        $('#weet-button').attr('style', "background-image: url(twoo.jpg)")
        trackNumber = Math.ceil(Math.random() * 4)
        $('#weetwoo').attr('src', `weetwoo${trackNumber}.mp3`)
        console.log(trackNumber)
        let audio = $("#weetwoo")[0];
        audio.play();
    } else {
        trackNumber = Math.ceil(Math.random() * 2)
        $('#weet-button').attr('style', "background-image: url(ren.jpg)")
        $('#weetwoo').attr('src', `karen${trackNumber}.mp3`)
        console.log(trackNumber)
        let audio = $("#weetwoo")[0];
        audio.play();
    }
});

document.getElementById('weet-button').addEventListener('touchend', () => {
    if (person == 'georgia') {
        $('#weet-button').attr('style', "background-image: url(wee.jpg)")
    } else {
        $('#weet-button').attr('style', "background-image: url(ka.jpg)")
    }
});

// $('#weet-button').taphold(() => {
//     if (person == 'georgia') {
//         $('#weet-button').attr('style', "background-image: url(wee.jpg)")
//         // $('#weetwoo').attr('src', `woo${trackNumber}.mp3`)
//         // let audio = $("#weetwoo")[0];
//         // audio.play();
//     } else {
//         $('#weet-button').attr('style', "background-image: url(ka.jpg)")

//     }
// })

$('#weet-button').mouseup(() => {
    if (person == 'georgia') {
        $('#weet-button').attr('style', "background-image: url(wee.jpg)")
        // $('#weetwoo').attr('src', `woo${trackNumber}.mp3`)
        // let audio = $("#weetwoo")[0];
        // audio.play();
    } else {
        $('#weet-button').attr('style', "background-image: url(ka.jpg)")

    }
})

$('#karen').click(() => {
    person = 'karen';
    $('#weet-button').attr('style', "background-image: url(ka.jpg)")

})

$('.button-div').click(() => {

})