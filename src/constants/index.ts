const SLIGHTLY_UNHAPPY = 'Slightly Sad';
const UNHAPPY = 'Sad';
const NEUTRAL = 'Neutral';
const HAPPY = 'Happy';
const SLIGHTLY_HAPPY = 'Slightly Happy';

const FACE_NAME = [
  [UNHAPPY, HAPPY],
  [UNHAPPY, NEUTRAL, HAPPY],
  [UNHAPPY, SLIGHTLY_UNHAPPY, SLIGHTLY_HAPPY, HAPPY],
  [UNHAPPY, SLIGHTLY_UNHAPPY, NEUTRAL, SLIGHTLY_HAPPY, HAPPY],
];

const IMAGE_FACE = [
  [
    require('../assets/unhappy.png'),
    require('../assets/happy.png'),
    require('../assets/unhappy-hit.png'),
    require('../assets/happy-hit.png'),
  ],
  [
    require('../assets/unhappy.png'),
    require('../assets/neutral.png'),
    require('../assets/happy.png'),
    require('../assets/unhappy-hit.png'),
    require('../assets/neutral-hit.png'),
    require('../assets/happy-hit.png'),
  ],
  [
    require('../assets/unhappy.png'),
    require('../assets/slightly-unhappy.png'),
    require('../assets/slightly-happy.png'),
    require('../assets/happy.png'),
    require('../assets/unhappy-hit.png'),
    require('../assets/slightly-unhappy-hit.png'),
    require('../assets/slightly-happy-hit.png'),
    require('../assets/happy-hit.png'),
  ],
  [
    require('../assets/unhappy.png'),
    require('../assets/slightly-unhappy.png'),
    require('../assets/neutral.png'),
    require('../assets/slightly-happy.png'),
    require('../assets/happy.png'),
    require('../assets/unhappy-hit.png'),
    require('../assets/slightly-unhappy-hit.png'),
    require('../assets/neutral-hit.png'),
    require('../assets/slightly-happy-hit.png'),
    require('../assets/happy-hit.png'),
  ],
];
export {FACE_NAME, IMAGE_FACE};
