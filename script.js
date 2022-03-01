const textInput = document.getElementById("txt-input")
const textOutput = document.getElementById("txt-output")
const BtnUpper = document.getElementById("btn-uppercase")
const BtnLower = document.getElementById("btn-lowercase")
const BtnTitle = document.getElementById("btn-titlecase")
const BtnCopy = document.getElementById("btn-copy")
const BtnClear = document.getElementById("btn-clear")

BtnUpper.addEventListener("click", function(){ 
    // Declare text value
    let text = textInput.value
    // Change text to uppercase 
    text = text.toUpperCase()
    // Set text output value to the changed text
    textOutput.innerHTML = text
})

BtnLower.addEventListener("click", function(){ 
    // Declare text value
    let text = textInput.value 
    // Change text to lowercase
    text = text.toLowerCase()
    // Set text output value to the changed text
    textOutput.innerHTML = text
})

BtnTitle.addEventListener("click", function(){ 
    // Declare text value
    let text = textInput.value

    // Proceed to create a function for title case
    // For the text value to be updated with the result
    text = 
        // Step 1: Change text to lowercase
        // Step 2: Split the text by space
        text.toLowerCase().split(" ")
        /* Step 3: Use the map() method
        The map() method creates a new array with the results of 
        calling a provided function on every element in this array. 
        Using map will call a provided callback function once for each element in an array, 
        in order, and constructs a new array from the results. */
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(" ")

    // Set text output value to the changed text
    textOutput.innerHTML = text
})

BtnCopy.addEventListener("click", function(){
    // Select the text field 
    textOutput.select();
    textOutput.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the text inside the text field 
    navigator.clipboard.writeText(textOutput.value);
  
    // Alert the copied text
    alert("Copied the text: " + textOutput.value);
})

BtnClear.addEventListener("click", function(){
    textInput.value = ""
    textOutput.innerHTML = ""
})

/* Map process (if string is "i'm a little tea pot")
    1st word: "i'm"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                                "I"                     +     "'m";
                          return "I'm";
    2nd word: "a"      => (word.charAt(0).toUpperCase() + word.slice(1));
                          "a".charAt(0).toUpperCase()   + "".slice(1);
                                "A"                     +     "";
                          return "A";
    3rd word: "little" => (word.charAt(0).toUpperCase()    + word.slice(1));
                          "little".charAt(0).toUpperCase() + "little".slice(1);
                                "L"                        +     "ittle";
                          return "Little";
    4th word: "tea"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "tea".charAt(0).toUpperCase() + "tea".slice(1);
                                "T"                     +     "ea";
                          return "Tea";
    5th word: "pot"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "pot".charAt(0).toUpperCase() + "pot".slice(1);
                                "P"                     +     "ot";
                          return "Pot";                                                        
    End of the map() method */
