// arrow functions don’t have their own version of this.
// Instead, they close over the this of the context where they’re created, just like closing over a variable.

function Thingy(value) {
    this.value = value;
    this.showDelay = 1000;
}

Thingy.prototype.prep = function() {
    console.log("prep, value = " + this.value);
};

Thingy.prototype.show = function() {
    console.log("show, value = " + this.value);
};

// verbose arrow function for callback: 'this' closes over Thingy not. It is not 'this' of the function as in normal functions.
Thingy.prototype.delayedPrepAndShow = function() {
    this.showTimer = setTimeout(() => {
        this.prep(); // arrow functions don't have their own version of 'this'.
        this.show(); // 'this' refers to Thingy
    }, this.showDelay);
};

const t = new Thingy(42);
t.delayedPrepAndShow();

// prep, value = 42
// show, value = 42

// In ES5 you had to do something like:
Thingy.prototype.delayedPrepAndShow = function() {
    var self = this;  // self refers to a Thingy
    this.showTimer = setTimeout(function() {  // in callback one must use 'self'
        self.prep();
        self.show();
    }, this.showDelay);
};


// In chapter 4 we learn a new way to create methods without the prototype stuff.
