const lyrics ='Tumi bondhu kala pakhi. Bosonto kale bolte pari ni. Kala kala kala pakhi. bosonto';

const parts = lyrics.split(' ');
const sentence = lyrics.split('.')
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);

// console.log(partial2);

    
const lines = [
    'Tumi bondhu kala pakhi',
    ' Bosonto kale bolte pari ni',
    ' Kala kala kala pakhi',
    ' bosonto'
  ] ;

  const newSong = lines.join(',');

  console.log(newSong);