let sounds = [
"1.mp3",
"2.mp3",
"3.mp3",
"4.mp3",
"5.mp3",
"6.mp3",
"7.mp3",
"8.mp3",
"9.mp3",
"10.mp3",
"11.mp3",
"12.mp3",
"13.mp3",
"14.mp3",
"15.mp3",
"16.mp3",
"17.mp3",
"18.mp3",
"19.mp3",
"20.mp3",
"21.mp3",
"22.mp3",
"23.mp3",
"24.mp3",
"q1.mp3",
"q2.mp3",
"q3.mp3",
"q4.mp3",
"q5.mp3",
"q6.mp3",
"q7.mp3",
"q8.mp3",
"q9.mp3",
"q10.mp3",
"q11.mp3",
"q12.mp3",
"q13.mp3",
"q14.mp3",
"q15.mp3",
"q16.mp3",
"q17.mp3",
"q18.mp3",
"q19.mp3",
"q20.mp3",
"q21.mp3",
"q22.mp3",
"q23.mp3",
"q24.mp3",
"w1.mp3",
"w2.mp3",
"w3.mp3",
"w4.mp3",
"w5.mp3",
"w6.mp3",
"w7.mp3",
"w8.mp3",
"w9.mp3",
"w10.mp3",
"w11.mp3",
"w12.mp3",
"w13.mp3",
"w14.mp3",
"w15.mp3",
"w16.mp3",
"w17.mp3",
"w18.mp3",
"w19.mp3",
"w20.mp3",
"w21.mp3",
"w22.mp3",
"w23.mp3",
"w24.mp3",
];

/** 
 * Sounds:
 * 1-24     - quarternotes from A to two octaves up
 * q1-q24   - half notes
 * w1-w24   - whole notes
 */

let testinappi = document.getElementById('soita');
testinappi.addEventListener('mouseup', () => play(Math.floor(Math.random()*72)));

function soundLoader() {
    // console.log("ASDASD");
    for (i = 0; i < sounds.length; i++) {
        let loader = new Audio(`sounds/${sounds[i]}`);
        // console.log(loader);
    }
}

soundLoader();

function play(chosen) {
    if (chosen == '.') return;
    let audio = new Audio(`sounds/${sounds[chosen]}`);
    audio.play();
}

// let riffi = [0, 3, 5, 2, 7, 7, 5, 3, 0, 4, 5, 6, 1, 4, 0, 1];
let tempo = 240;

function soitto(riffi) {
    let playSequence = noteCheck(riffi);
    console.log(playSequence);
    let noteLength = 1;
    let timeKeeper = 0;
    for (let i = 0; i < playSequence.length; i++) {
        if (playSequence[i] > 23) noteLength = 2;
        else if (playSequence[i] > 47) noteLength = 4;
        setTimeout(() => play(playSequence[i]), timeKeeper)
        timeKeeper += tempo*noteLength;
        // console.log(i, playSequence[i], timeKeeper);
        noteLength = 1;
    }
}

function noteCheck(riffi) {
    let parsedRiff = [];
    for (let i = 0; i < riffi.length; i++) {
        if (riffi[i] == '.') parsedRiff.push('.');
        else if (!isNaN(riffi[i]) && !isNaN(riffi[i+1])) parsedRiff.push(riffi[i])
        else if (!isNaN(riffi[i]) && riffi[i+1] === '.') parsedRiff.push(riffi[i])
        else if (!isNaN(riffi[i]) && riffi[i+1] === '-' && riffi[i+2] === '-' && riffi[i+3] === '-') parsedRiff.push(riffi[i]+48)
        else if (!isNaN(riffi[i]) && riffi[i+1] === '-' && riffi[i+2] === '-') parsedRiff.push(riffi[i]+24, '.')
        else if (!isNaN(riffi[i]) && riffi[i+1] === '-') parsedRiff.push(riffi[i]+24)
        else if (!isNaN(riffi[i]) && riffi[i+1] == null) parsedRiff.push(riffi[i])
    }

    return parsedRiff;
}