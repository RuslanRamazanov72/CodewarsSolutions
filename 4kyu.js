
// Dependency Injection

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
    this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    var methods = func.toString().match(/function\s?\((.+)\)\s?{/);
    methods = methods && methods[1].split(",").map(function(i) { return i.replace(/\s+/, ''); });
    var funcs = [];

    for (var i = 0; methods && i < methods.length; i++) {
        funcs.push(this.dependency[methods[i]]);
    }

    return function() {
        return func.apply(func, funcs);
    };
}