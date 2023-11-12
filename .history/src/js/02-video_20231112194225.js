import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const handleThrottle = function (data) {
  const timeInSeconds = data.seconds;
  console.log(timeInSeconds);
  localStorage.setItem('videoplayer-current-time', timeInSeconds);
};

player.on('timeupdate', throttle(handleThrottle, 1000));
