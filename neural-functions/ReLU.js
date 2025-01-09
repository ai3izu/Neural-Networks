class ReLU{
    calc(x){ return Math.max(0, x)}

    drev(x){ return x > 0 ? 1 : 0 }
}