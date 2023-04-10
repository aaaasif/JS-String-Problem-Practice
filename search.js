const lyrics ='Tumi bondhu kala pakhi, Bosonto kale bolte pari ni, Kala kala kala pakhi, bosonto';
// const doesExist = lyrics.includes('pakhi')
const doesExist = lyrics.includes('Kala')
// console.log (doesExist);

const searchString = 'PaKhi'

const lyricsLowerCasee = lyrics.toLowerCase();

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExistOneLine);

// -------------------------------------------------------------------------------------------
// indexof

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('2mi'));

if (lyrics.indexOf('kalu') !== -1) {
    console.log('Kala Exist');
}

else{
    console.log('kala Not Found')
}

// startWith

console.log(lyrics.startsWith('tmi'))

// endWith

const fileName = 'myBiodata.pdf';
const otherFile = 'myNayokPicure.png';

console.log(fileName.endsWith('.pdf'));