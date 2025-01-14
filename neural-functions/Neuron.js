import ReLU from './ReLU.js';
import Sigmoid from './Sigmoid.js';

class Neuron {
    constructor(inputSize) {
        this.weights = Array.from({ length: inputSize }, () => Math.random());
        this.bias = Math.random();
    }

    activate(inputs) {
        const weightedSum = inputs.reduce((sum, input, index) => sum + input * this.weights[index], this.bias);
        return ReLU.activate(weightedSum); 
    }

    activateOutput(input) {
        const weightedSum = input.reduce((sum, inputValue, index) => sum + inputValue * this.weights[index], this.bias);
        return Sigmoid.activate(weightedSum); 
    }
}

export default Neuron;