export default {
  ttypist: {
    istyping: false,
    hastypedeveryword: false,
    deviceinformation: "comma,separated,value",
  },
  warning: {
    off: true,
    capslock: false,
    outoffocus: false,
  },
  caret: {
    off: false,
    type: "line", // line | underline | box | block
  },
  pacecaret: {
    off: true,
    type: "line", // line | underline | box | block
  },
  inputbox: false,
  oppositeshift: false, // ignore B, Y, ^
  endtestwithspace: false,
  underline: false, // underline active word
  fliptextcolor: false, // brightness of typed & future texts
  highlight: {
    off: false,
    mode: {
      word: false,
      letter: true,
    },
  },
  confidence: {
    off: true,
    mode: {
      pro: false, // can fix current word errors, but cannot previous words
      max: false, // if true then don't allow backspace at all to fix errors (backspace.off = true)
    }
  },
  backspace: {
    off: false,
    modifier: {
       alt: true,
      ctrl: true,
      meta: false,
    },
  },
  // easy is classical typing experience, expert ends test if incorrect word is submitted,
  // master ends test if single incorrect letter is submitted
  difficulty: "noob", // noob | expert | master
  error: {
    off: false,
    insert: true, // insert extra incorrect letter
    forgive: true, // delete all inserted extra letters as soon user types correct letter
    stop: {
      word: false,
      letter: false,
    },
  },
  phrase: {
    word: {
      type: "dictionary", // dictionary | rootwords | lorem epsum
      length: "medium", // small(<5) | medium(>=5, <8), | large(>=8, <13) | extra large(>=13)
      count: 25,
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // include punctuation characters along with words
    },
  },
  theme: "molokai",
  language: "english", // english | hindi | bengali | arabic | russian
  keyboard: {
    layout: "qwerty", // qwerty | dvorak | workman | colemak
    emulate: false,
  },
};

const learn = {
  off: true,
  guidedlessions: false, // guided lessons
  providecustomtext: false, // custom text provided by user

  numrow: false, // number row digits and symbols
  numpad: false, // number pad digits and arithmetic operations with expression
  alphanumeric: false, // ascii characters only
  
  brackets: false, // {[(<>)]}
  arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
  functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
  specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
}