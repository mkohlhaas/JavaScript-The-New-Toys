// it even works when using a function as a default parameter value.

(function(callback = function() {}) {
    console.log(callback.name); // "callback"
})();
