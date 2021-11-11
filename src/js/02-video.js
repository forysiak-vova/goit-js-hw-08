import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const iframePlayer = new Vimeo.Player(iframe);
// const player = new Player('handstick', {
//     id: 236203659,
//     width: 640
     
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

//  player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
// =====================================================

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// // const lisener = document.addEventListener();

//    player.on('play', function() {
//         console.log(player);
//     });

//     player.on('eventName', function(data) {
//     // дані – це об’єкт, що містить властивості, характерні для цієї події
//        console.log(eventName);
// });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

// player.setCurrentTime(30.01);
//    // .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
// // }).catch(function(error) {
// //     switch (error.name) {
// //         case 'RangeError':
// //             // the time was less than 0 or greater than the video’s duration
// //             break;

// //         default:
// //             // some other error occurred
// //             break;
// //     }
// // });



// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
  
// };

// player.on('play', onPlay);
// ===========================================================================

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// const lisener = document.addEventListener();

   player.on('play', function() {
        console.log(player);
    });

    player.on('eventName', function(data) {
    // дані – це об’єкт, що містить властивості, характерні для цієї події
       console.log(eventName);
});

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    const onPlay = function(data) {
    // data is an object containing properties specific to that event
  
};

player.on('play', onPlay);

player.setCurrentTime(30.01);
   // .then(function (seconds) {
    // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });




