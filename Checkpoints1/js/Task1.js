function readsentence(str) {
         
    // Get the input text value
    var text = str;
 
    // Initialize the word counter
    var numWords = 0;
   
    // defining vowels
    const vowels = ["a", "e", "i", "o", "u", "y"]
    // Initialize the vowels  counter
 var numvowels = 0;
    // Loop through the text
    // and count spaces in it
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i].toLowerCase();
 
        // Check if the character is a space
        if (currentCharacter == " ") {
            numWords += 1;
        }
        else if (vowels.includes(currentCharacter)) {
    numvowels +=1;
}
   else if (currentCharacter == ".") {
    break;
}      
    }
 
    // Add 1 to make the count equal to
    // the number of words
    // (count of words = count of spaces + 1)
    numWords += 1;
    // Display it as output
    let dispaly="The number of words is : " + numWords +" words " + " and The number of vowels is : " + numvowels +" vowels "
return dispaly;

}