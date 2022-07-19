const MORSE_DICTIONARY = {
	A: ".-",
	B: "-...",
	C: "-.-.",
	D: "-..",
	E: ".",
	F: "..-.",
	G: "--.",
	H: "....",
	I: "..",
	J: ".---",
	K: "-.-",
	L: ".-..",
	M: "--",
	N: "-.",
	O: "---",
	P: ".--.",
	Q: "--.-",
	R: ".-.",
	S: "...",
	T: "-",
	U: "..-",
	V: "...-",
	W: ".--",
	X: "-..-",
	Y: "-.--",
	Z: "--..",
	" ": "/",
};

const ENG_DICTIONARY = Object.entries(MORSE_DICTIONARY).reduce(
	(obj, [key, value]) => {
		obj[value] = key;
		return obj;
	},
	{}
);

// translate a line of english text to morse code.
function english_to_morse(text) {
	return text
		.toUpperCase()
		.split("")
		.map((char) => MORSE_DICTIONARY[char] || "")
		.join(" ");
}

// translate a line of morse code to english text.
function morse_to_english(line) {
	return line
		.split("/")
		.map((word) =>
			word
				.split(" ")
				.map((letter) => ENG_DICTIONARY[letter] || "")
				.join("")
		)
		.join(" ");
}

// translate the text in the english box to morse code.
function translate_english() {
	let line = document.getElementById("english").value;
	document.getElementById("morse").value = english_to_morse(line);
}

// translate the text in the morse code box to english.
function translate_morse() {
	let line = document.getElementById("morse").value;
	document.getElementById("english").value = morse_to_english(line);
}

exports.english_to_morse = english_to_morse;
exports.morse_to_english = morse_to_english;
