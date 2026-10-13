'use strict';

const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const chars = '!@#$%&*?';

function generatePassword(length = 9, usechars = false) {
  let psw = '';
  const letter = usechars ? alph + chars : alph;

  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * letter.length);

    let digit = letter[rand];
    psw += digit;
  }
  return psw;
}

module.exports = generatePassword;
