class Sigmoid {
    static activate(x) {
        return 1 / (1 + Math.exp(-x));
    }
}

export default Sigmoid;