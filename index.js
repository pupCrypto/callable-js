class Callable extends Function {
    constructor() {
        super();
        return new Proxy(this, {
            apply: (target, thisArg, args) => {
                return target.calling(...args);
            }
        });
    }

    calling() {
        throw new Error("Not implemented");
    }
}

module.exports = Callable;
