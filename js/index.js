//Get a seat
document.querySelector('.form input[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.form').innerHTML = '<h2>Thanks for the reservation!</h2>';
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            document.querySelector('.form').innerHTML += '<h2>Error, please try again!</h2>';
        }
    }
    xhr.open('POST', 'reservation.php', true);
    const form = document.querySelector('.form');
    const data = new FormData(form);
    xhr.send(data);

}

//Youtube    
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player',{
        height: '360',
        width: '640',
        videoId: 'Y-BNGdD_mDQ',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

const done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 97000);
    }
}
function stopVideo() {
    player.stopVideo();
}
