// Constructor functions fill in the newly constructed object, which is passed to the function as 'this'.
// Arrow functions cannot be constructors as they don't have their own 'this'.
const Doomed = () => {};
const d = new Doomed(); // TypeError: Doomed is not a constructor
