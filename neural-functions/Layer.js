import Neuron from './Neuron.js';

class Layer {
    constructor(neuronCount, inputSize) {
        this.neurons = Array.from({ length: neuronCount }, () => new Neuron(inputSize));
    }

    forward(inputs) {
        return this.neurons.map(neuron => neuron.activate(inputs));
    }

    forwardOutput(inputs) {
        return this.neurons.map(neuron => neuron.activateOutput(inputs));
    }
}

export default Layer;