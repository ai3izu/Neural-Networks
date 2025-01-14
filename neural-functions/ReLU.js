class ReLU {
    static activate(x) {
        return Math.max(0, x);
    }
}

export default ReLU;