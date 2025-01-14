class Input {
    constructor(values) {
        this.values = values;
    }

    getValues() {
        return this.values;
    }

    setValues(values) {
        this.values = values;
    }
}

class ReLU {
    static activate(x) {
        return Math.max(0, x);
    }
}

class Sigmoid {
    static activate(x) {
        return 1 / (1 + Math.exp(-x));
    }
}

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

const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');

let inputNodes = 2;
let hiddenLayers = 1;
let hiddenNodes = [2];
let outputNodes = 1;
let layers = [];

function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = Math.max(400, (inputNodes + hiddenNodes.reduce((a, b) => a + b, 0) + outputNodes + 1) * 50);
}

function drawNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const inputPositions = drawLayer(inputNodes, 200, 'lightblue', 30);
    
    let previousLayerPositions = inputPositions;

    for (let i = 0; i < hiddenLayers; i++) {
        const hiddenPositions = drawLayer(hiddenNodes[i], 380 + (i * 150), 'rgba(255, 165, 0, 0.5)', 30);
        drawConnections(previousLayerPositions, hiddenPositions);
        previousLayerPositions = hiddenPositions;
    }

    const outputPositions = drawLayer(outputNodes, 400 + (hiddenLayers * 150), 'lightgreen', 30);
    drawConnections(previousLayerPositions, outputPositions);
}

function drawLayer(nodes, xPos, color, radius) {
    const ySpacing = canvas.height / (nodes + 1);
    const positions = [];

    for (let i = 1; i <= nodes; i++) {
        const yPos = i * ySpacing;
        drawNode(xPos, yPos, color, radius);
        positions.push({ x: xPos, y: yPos });
    }
    return positions; 
}

function drawConnections(fromPositions, toPositions) {
    fromPositions.forEach(from => {
        toPositions.forEach(to => {
            ctx.beginPath();
            ctx.moveTo(from.x + 30, from.y);
            ctx.lineTo(to.x - 30, to.y); 
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    });
}

function drawNode(x, y, color, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function addInput() {
    if (inputNodes < 3) {
        inputNodes++;
        updateInputFields();
        resizeCanvas();
        drawNetwork();
    }
    else {
        alert("Maksymalna liczba wejści: 3");
    }
}

function removeInput() {
    if (inputNodes > 1) {
        inputNodes--;
        updateInputFields();
        resizeCanvas();
        drawNetwork();
    }
    else {
        alert("Minimalna liczba wejści: 1");
    }
}

function updateInputFields() {
    const inputFieldsContainer = document.getElementById('input-fields-container');
    inputFieldsContainer.innerHTML = '';

    for (let i = 0; i < inputNodes; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.className = 'input-field';
        inputField.placeholder = `Wejście ${i + 1}`;
        inputFieldsContainer.appendChild(inputField);
    }
}

function addHiddenLayer() {
    if (hiddenLayers < 3) {
        hiddenLayers++;
        hiddenNodes.push(2);
        updateHiddenLayersControls();
        drawNetwork();
    } else {
        alert("Maksymalna liczba warstw ukrytych: 3");
    }
}

function removeHiddenLayer() {
    if (hiddenLayers > 1) {
        hiddenLayers--;
        hiddenNodes.pop();
        updateHiddenLayersControls();
        resizeCanvas();
        drawNetwork();
    } else {
        alert("Minimalna liczba warstw ukrytych: 1");
    }
}

function addOutput() {
   if (outputNodes < 3) {
        outputNodes++;
        resizeCanvas();
        drawNetwork();
    }
    else {
        alert("Maksymalna liczba wyjść: 3");
    }
}

function removeOutput() {
    if (outputNodes > 1) {
        outputNodes--;
        resizeCanvas();
        drawNetwork();
    }
    else {
        alert("Minimalna liczba wyjść: 1");
    }
}

function addNeuronToLayer(layerIndex) {
   if (hiddenNodes[layerIndex] < 4) {
        hiddenNodes[layerIndex]++;
        drawNetwork();
    }
    else {
        alert("Maksymalna liczba neuronów na warstwie: 4");
    }
}

function removeNeuronFromLayer(layerIndex) {
    if (hiddenNodes[layerIndex] > 1) {
        hiddenNodes[layerIndex]--;
        resizeCanvas();
        drawNetwork();
    }
    else {
        alert("Minimalna liczba neuronów na warstwie: 1");
    }
}

function updateHiddenLayersControls() {
    const controls = document.getElementById('hidden-layers-controls');
    controls.innerHTML = '';

    for (let i = 0; i < hiddenLayers; i++) {
        const layerControl = document.createElement('div', 'class="hidden-layers-controls"');
        layerControl.innerHTML = `
            Warstwa ${i + 1}:
            <button onclick="addNeuronToLayer(${i})">Dodaj neuron</button>
            <button onclick="removeNeuronFromLayer(${i})">Usuń neuron</button>
        `;
        id="hidden-layers-controls"
        controls.appendChild(layerControl);
    }
}

function randomizeWeights() {
    layers = []; 
    
    const inputLayer = new Layer(inputNodes, 0); 
    layers.push(inputLayer);

    for (let i = 0; i < hiddenLayers; i++) {
        const neuronCount = hiddenNodes[i];
        const inputSize = (i === 0) ? inputNodes : hiddenNodes[i - 1]; 
        const layer = new Layer(neuronCount, inputSize);
        layers.push(layer);
    }

    const outputLayer = new Layer(outputNodes, hiddenNodes[hiddenLayers - 1] || inputNodes);
    layers.push(outputLayer);

    alert("Wagi zostały losowo zainicjowane!");
}

function runSimulation() {
    const inputValues = getInputValues();
    const input = new Input(inputValues);

    let currentOutputs = input.getValues();

    let outputDetails = '<h5>Dane wejściowe:</h5><p>' + inputValues.join(', ') + '</p>';
    outputDetails += '<h5>Wagi:</h5>';

    for (let layerIndex = 1; layerIndex < layers.length; layerIndex++) {
        outputDetails += `<h6>Warstwa ${layerIndex}:</h6>`;
        const layer = layers[layerIndex];
        layer.neurons.forEach((neuron, neuronIndex) => {
            outputDetails += `<p>Neuron ${neuronIndex + 1}: wagi = [${neuron.weights.join(', ')}], bias = ${neuron.bias} </p>`;
        });
    }

    for (let i = 1; i < layers.length - 1; i++) {
        currentOutputs = layers[i].forward(currentOutputs);
    }

    const finalOutputs = layers[layers.length - 1].forwardOutput(currentOutputs);
    outputDetails += '<h5>Wyniki wyjściowe:</h5><p>' + finalOutputs.join(', ') + '</p>';

    document.getElementById('output-details').innerHTML = outputDetails; 
}

function getInputValues() {
    const inputFields = document.querySelectorAll('.input-field');
    return Array.from(inputFields).map(field => parseFloat(field.value) || 0);
}

resizeCanvas();
drawNetwork();
updateHiddenLayersControls(); 