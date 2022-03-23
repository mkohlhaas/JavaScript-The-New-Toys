let answer; // The outer 'answer'
function hoisting() {
    answer = 42; // ReferenceError: 'answer' is not defined   --
    console.log(answer); //                                    | TDZ = Temporal Dead Zone ( answer cannot be used at all
    let answer; // The inner 'answer'                         --
}
hoisting();
