// Trailing Commas in Parameter Lists and Function Calls

// if you need to add more parameters or arguments, the line above does not show up as you don't need to add a comma - good for git diffs

function example(
    question,
    answer, // trailing comma
) {
    console.log("question: " + question);
    console.log("answer: " + answer);
}
example(
    "Do you like building software?",
    "Big time!",  // trailing comma
);
