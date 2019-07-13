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

kulli = () => Math.floor(Math.random()*72)

testinappi.addEventListener('mouseup', () => play(kulli()));

function play(chosen) {
    let audio = new Audio(`sounds/${sounds[chosen]}`);
    audio.play();
}

let riffi = [0, "‒", "‒", "‒", 7, 7, ".", ".", ".", 4, ".", 6, ".", 4, "‒", 1];