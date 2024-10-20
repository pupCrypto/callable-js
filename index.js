class Callable extends Function {
    constructor() {
        super();
        return new Proxy(this, {
            apply: (target, thisArg, args) => {
                return target._calling(...args);
            }
        });
    }

    _calling() {
        throw new Error("Not implemented");
    }
}

module.exports = Callable;
