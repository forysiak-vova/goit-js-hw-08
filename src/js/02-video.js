import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// const iframe = document.querySelector('iframe');
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
 function onPlay(date) {
    // дані – це об’єкт, що містить властивості, характерні для цієї події
        // console.log(date);
     
     const resultSeconds = date.seconds;
    localStorage.setItem("videoplayer-current-time", resultSeconds);
     const resultLocalStorage = localStorage.getItem("videoplayer-current-time");
     console.log(resultLocalStorage);
};

       player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
        //  seconds = фактичний час, який шукав гравець;

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


