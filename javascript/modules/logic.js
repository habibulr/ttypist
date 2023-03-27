import Config from "./config.js";
import { Sentence, Word } from "./container.js";
import * as Const from "./const.js";
import * as Element from "./element.js";
import * as Misc from "./misc.js"
import { Timer, StopWatch } from "./time.js";

let sentence = new Sentence(Misc.wordelements(['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxyz']));
let word = new Word(sentence.activeword);

class Utility {

  constructor() {
		Element.input.addEventListener("keydown", registerkeydown);
		Element.input.addEventListener("keyup", registerkeyup);
	}
	
  finishedtyping() {
    const islastword = word.activeletterindex === word.size - 1;
    const islastletter = sentence.activewordindex === sentence.size - 1;
    return islastword && islastletter;
  }

  addcaretto(letterelement) {
    letterelement.setAttribute("id", Config.caret.type);
  }

  removecaretfrom(letterelement) {
    letterelement.setAttribute("id", "");
  }
  
  putcaret_onprevletter() {
    removecaretfrom(word.activeletter);
    addcaretto(word.prevletter);
  }

  putcaret_onnextletter() {
  	removecaretfrom(word.activeletter);
    addcaretto(word.nextletter);	
  }
	isspace(letter) {
		return letter?.textContent.charCodeAt(0) === Config.whitespace.code;
	}
}

const util = new Utility();

const charstat = {
	typedchar: "",
	totypechar: "",

  keydown: 0,
  keyup: 0,
  repeated: false,

  reset() {
		this.typedchar = "";
		this.totypechar = "";
    this.keydown = 0;
    this.keyup = 0;
    this.repeated = false;
  }
};

const keystroketime = {
  symbol: new Map([
    ["a", []], ["b", []], ["c", []], ["d", []], ["e", []], ["f", []], ["g", []],
    ["h", []], ["i", []], ["j", []], ["k", []], ["l", []], ["m", []], ["n", []],
    ["o", []], ["p", []], ["q", []], ["r", []], ["s", []], ["t", []], ["u", []],
    ["v", []], ["w", []], ["x", []], ["y", []], ["z", []],
    ["A", []], ["B", []], ["C", []], ["D", []], ["E", []], ["F", []], ["G", []],
    ["H", []], ["I", []], ["J", []], ["K", []], ["L", []], ["M", []], ["N", []],
    ["O", []], ["P", []], ["Q", []], ["R", []], ["S", []], ["T", []], ["U", []],
    ["V", []], ["W", []], ["X", []], ["Y", []], ["Z", []],
    ["0", []], ["1", []], ["2", []], ["3", []], ["4", []], ["5", []], ["6", []],
    ["7", []], ["8", []], ["9", []], ["`", []], ["~", []], ["!", []], ["@", []],
    ["#", []], ["$", []], ["%", []], ["^", []], ["&", []], ["*", []], ["(", []],
    [")", []], ["-", []], ["_", []], ["=", []], ["+", []], ["[", []], ["]", []],
    ["{", []], ["}", []], [";", []], [":", []], ["'", []], ["|", []],
    ["\"",[]], ["\\",[]],
    [",", []], ["<", []], [".", []], [">", []], ["/", []], ["?", []],
  ]),
  
  log(sym, time) {
    this.symbol.get(sym)?.push(time);
  },
  
  show() {
    for ( const [sym, value] of this.symbol.entries() ) {
      console.log(sym, value);
    }
  },

  reset() {
    for ( const [sym, _] of this.symbol.entries() ) {
      this.symbol.set(sym, new Array());
    }
  }
}

let typedchar = "", totypechar = "";
let keydown = 0, keyup = 0, repeated = false;

const stat = {
	teststart: 0,
	testend: 0,
	testduration() {
		return this.testend - this.teststart;
	},
	reset() {
		this.teststart = 0;
		this.testend= 0;
	}
}

// goal is to first implement insertion and deletion of extra letter like texteditor
function registerkeydown(evt) {
  evt.preventDefault(); // typedchars are not displayed in input field
  evt.stopPropagation();

  if ( !evt.isTrusted ) return;

	if ( !Config.ttypist.istyping ) {
		stat.teststart = performance.now();
		Config.ttypist.istyping = true;
	}
	
  typedchar = evt.key;
	totypechar = word.activeletter.textContent;

	if ( typedchar === 'Tab' ) {
    Element.input.blur();
    Element.setting.restart.button.focus();
		// now its restart button handler's code to restart a new test
  }	

	if ( util.isspace(word.activeletter) && typedchar === " " ) { // space is typed
		// remove caret from active
		// increment word index in sentence object (add and remove letter/word highlight)
		// word index should be reset
	} else if ( typedchar === totypechar ) { // correct char is typed
		// remove any error (ui - error highlights)
		// go to next letter
		// 		- remove caret from active letter
		// 		- increment letter index
		//		- add caret to active letter
		//
		// check if all words are typed i.e, active letter is the last letter of 
		// last word of the sentence
		// 		- if it is then log test end time
		//	  - remove caret from active letter
		//		- remove letter/word highlight from active letter/word (ui change)
		// 		- remove keydown & keyup eventlisteners from input field
		//		- show stats like speed, accuracy etc
		// 		- make ttypist ready for new test (load new words, add keydown & keyup listeners back)
	} else if ( evt.metaKey && typedchar === "Backspace" ) { // deletion (meta + backspace)
		
	}
}

function registerkeyup(evt) {
  evt.stopPropagation();
}