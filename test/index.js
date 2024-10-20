var assert = require("node:assert");
var { describe, it } = require("node:test");
var Callable = require("../index");

describe("Callable", function() {
    it("should be a function", function() {
        assert.equal(typeof Callable, "function");
    });

    it("should be callable", function() {
        assert.equal(typeof new Callable(), "function");
    });

    it("should throw an error when calling", function() {
        assert.throws(() => (new Callable())());
    });
});

describe("derived Callable", function() {
    it("should call function of derived class", function() {
        class Derived extends Callable {
            calling() {
                return "Hello World";
            }
        }
        var derived = new Derived();
        assert.equal(derived(), "Hello World");
    });
    
    it("should call function of derived class with arguments", function() {
        class Derived extends Callable {
            calling(a, b) {
                return a + b;
            }
        }
        var derived = new Derived();
        assert.equal(derived(1, 2), 3);
    });

    it("should call function of derived class with arguments and context", function() {
        class Derived extends Callable {
            constructor() {
                super();
                this.b = 2;
            }
            calling(a) {
                return a + this.b;
            }
        }
        var derived = new Derived();
        assert.equal(derived(1), 3);
    });
});
