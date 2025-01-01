class ReLU{
    calc(x){ return x > 0 ? x : 0 }

    drev(x){ return x > 0 ? 1 : 0 }
}