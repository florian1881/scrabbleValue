const lettersValues = [
    ["a", 1],
    ["â", 1],
    ["à", 1],
    ["b", 3],
    ["c", 3],
    ["ç", 3],
    ["d", 2],
    ["e", 1],
    ["é", 1],
    ["è", 1],
    ["ê", 1],
    ["f", 4],
    ["g", 2],
    ["h", 4],
    ["i", 1],
    ["î", 1],
    ["j", 8],
    ["k", 10],
    ["l", 1],
    ["m", 2],
    ["n", 1],
    ["o", 1],
    ["ô", 1],
    ["p", 3],
    ["q", 8],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["u", 1],
    ["ù", 1],
    ["v", 4],
    ["w", 10],
    ["x", 10],
    ["y", 10],
    ["z", 10]
];

function scrabbleConvert() {
    let result = document.getElementById('insert');
    result.innerHTML = " "
    let myWord = document.getElementById('mot').value;
    myWord = myWord.toLowerCase();

    let points = 0;
    for (let i = 0; i < myWord.length; i++) {
        let letter = myWord[i];
        for (let j = 0; j < lettersValues.length; j++) {
            if (letter == lettersValues[j][0]) {
                points += lettersValues[j][1];
                result.innerHTML += `<h4>La lettre "${letter.toUpperCase()}" vaut ${lettersValues[j][1]}</h4><br>`
            } //endif
        } //endfor letterValue1
    } // endfor letter

    result.innerHTML += `<h2 class="mt-5">Le mot ${myWord} vaut ${points} point(s) au scrabble</h2>`

} //end function mot

function wordDouble() {
    let myWord = document.getElementById('mot').value;
    myWord = myWord.toLowerCase();
    let result = document.getElementById('insert');
    result.innerHTML = " "
    let points = 0;
    for (let i = 0; i < myWord.length; i++) {
        let letter = myWord[i];
        for (let j = 0; j < lettersValues.length; j++) {
            if (letter == lettersValues[j][0]) {
                points += (lettersValues[j][1] * 2);
                result.innerHTML += `<h4>La lettre "${letter.toUpperCase()}" vaut ${lettersValues[j][1]} x 2 (mot compte double)</h4><br>`
            } //endif
        } //endfor letterValue1
    } // endfor letter

    result.innerHTML += `<h2 class="mt-5">Le mot ${myWord} (compte double) vaut ${points} point(s) au scrabble</h2>`
}

function wordTriple() {
    let myWord = document.getElementById('mot').value;
    myWord = myWord.toLowerCase();
    let result = document.getElementById('insert');
    result.innerHTML = " "
    let points = 0;
    for (let i = 0; i < myWord.length; i++) {
        let letter = myWord[i];
        for (let j = 0; j < lettersValues.length; j++) {
            if (letter == lettersValues[j][0]) {
                points += (lettersValues[j][1] * 3);
                result.innerHTML += `<h4>La lettre "${letter.toUpperCase()}" vaut ${lettersValues[j][1]} x 3 (mot compte triple) </h4><br>`
            } //endif
        } //endfor letterValue1
    } // endfor letter

    result.innerHTML += `<h2 class="mt-5">Le mot ${myWord} (compte triple) vaut ${points} point(s) au scrabble</h2>`
}