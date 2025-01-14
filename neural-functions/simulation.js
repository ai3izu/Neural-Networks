
/*
reprezentacja danych wejsciowych dla sieci neuronowej
ustawia, zwraca oraz ustawia nowe wartosci wejsciowe
*/
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

// implementacja klasy aktywacji ReLU - zwraca max(0, x)
class ReLU {
    static activate(x) {
        return Math.max(0, x);
    }
}
// implementacja klasy aktywacji Sigmoid - zwraca 1 / (1 + exp(-x))
class Sigmoid {
    static activate(x) {
        return 1 / (1 + Math.exp(-x));
    }
}

/*
reprezentuje pojedynczy neuron sieci neuronowej
przechowuje losowe wagi i bias 
zawiera metody 
- activate(inputs) ktora aktywuje neuron uzywajac funkcji relu
- activateOutput(input) ktora aktywuje neuron na wyjsciu uzywajac funkcji sigmoid
*/
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
/* 
reprezentuje warstwe sieci neuronowej
przechowuje tablice neuronow
zawiera metody :
foward(inputs) ktora przesyla dane wejsciowe przez warstwe i zwraca wyjscia neuronow
forwardOutput(inputs) ktora przesyla dane wejsciowe przez warstwe wyjsciowa
*/
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

// ustwienia canvasa 
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');

let inputNodes = 2; // domyslna liczba wejsc
let hiddenLayers = 1; // domyslna liczba warstw ukrytych
let hiddenNodes = [2]; // domyslna liczba neuronow na warstwie
let outputNodes = 1; // domyslna liczba wyjsc
let layers = []; // tablica do przechowywania warstw sieci

// funckja do dostosowywania rozmiaru canvasa do rozmiaru okna
function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = Math.max(400, (inputNodes + hiddenNodes.reduce((a, b) => a + b, 0) + outputNodes + 1) * 50);
}

// funkcja do rysowania sieci 
function drawNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const inputPositions = drawLayer(inputNodes, 200, 'lightblue', 30); // rysowanie wejscia

    let previousLayerPositions = inputPositions;

    // rysowanie warstw ukrytych
    for (let i = 0; i < hiddenLayers; i++) {
        const hiddenPositions = drawLayer(hiddenNodes[i], 380 + (i * 150), 'rgba(255, 165, 0, 0.5)', 30);
        drawConnections(previousLayerPositions, hiddenPositions); // rysowanie polaczen
        previousLayerPositions = hiddenPositions;
    }
    // rysowanie wyjscia
    const outputPositions = drawLayer(outputNodes, 400 + (hiddenLayers * 150), 'lightgreen', 30);
    // rysowanie polaczenia do wartswy wyjsciowej
    drawConnections(previousLayerPositions, outputPositions);
}

// funkcja do rysowania pojedynczej warstwy ukrytej neuronow
function drawLayer(nodes, xPos, color, radius) {
    const ySpacing = canvas.height / (nodes + 1);
    const positions = [];

    for (let i = 1; i <= nodes; i++) {
        const yPos = i * ySpacing;
        drawNode(xPos, yPos, color, radius); // rysowanie pojedynczego neuronu dla tej warstwy
        positions.push({ x: xPos, y: yPos });
    }
    return positions;
}

// funckja do rysowania polaczen miedzy neuronami dla roznych warstw
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

// funkcja rysuje pojedynczy okrag
function drawNode(x, y, color, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}
/*
 funkcja do dodawania nowego wejscia do sieci  
 akutalizuje pola wejsciowe w interfejsie uzytkownika
 rysuje siec na nowo
*/
function addInput() {
    if (inputNodes < 3) {
        inputNodes++;
        updateInputFields();
        drawNetwork();
    }
    else {
        alert("Maksymalna liczba wejści: 3");
    }
}
/*
 funkcja do usuniecia  wejscia w sieci  
 akutalizuje pola wejsciowe w interfejsie uzytkownika
 rysuje siec na nowo
*/
function removeInput() {
    if (inputNodes > 1) {
        inputNodes--;
        updateInputFields();
        drawNetwork();
    }
    else {
        alert("Minimalna liczba wejści: 1");
    }
}

/* 
funkcja do aktualiacji pol wejsciowych w interfejsie uzytkownika
czysci poprzednie pola
ustawia miejsce na tekst i dodaje pole do kontenera
*/
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
/*
funkcja do dodawania kolejnej warstwy ukrytej do sieci
dodaje ona nowa warstwe bazowo z 2 neuronami 
aktualizuje kontroli dla warstw ukrytych oraz rysuje siec na nowo 
*/
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

/* 
funkcja do usuwania warstwy ukrytej 
usuwa ona ostatnio dodana warstwe ukrytna 
aktualizuje wszystkie kontrolki dla warstw ukrytych oraz rysuje siec na nowo
*/
function removeHiddenLayer() {
    if (hiddenLayers > 1) {
        hiddenLayers--;
        hiddenNodes.pop();
        updateHiddenLayersControls();
        drawNetwork();
    } else {
        alert("Minimalna liczba warstw ukrytych: 1");
    }
}

// funkcja do dodawania wyjscia na koncu sieci
function addOutput() {
    if (outputNodes < 3) {
        outputNodes++;
        drawNetwork();
    }
    else {
        alert("Maksymalna liczba wyjść: 3");
    }
}

// funkcja do usuwania wyjscia z konca sieci
function removeOutput() {
    if (outputNodes > 1) {
        outputNodes--;
        drawNetwork();
    }
    else {
        alert("Minimalna liczba wyjść: 1");
    }
}

/* 
funkcja do dodania pojedynczego neuronu do warstwy ukrytej
zwieksza ona liczbe neuronow w danej warstwie o 1
rysuje siec na nowo
*/
function addNeuronToLayer(layerIndex) {
    if (hiddenNodes[layerIndex] < 4) {
        hiddenNodes[layerIndex]++;
        drawNetwork();
    }
    else {
        alert("Maksymalna liczba neuronów na warstwie: 4");
    }
}

/* 
funkcja do usuniecia pojedynczego neuronu z warstwy ukrytej
zmniejsza ona liczbe neuronow w danej warstwie o 1
rysuje siec na nowo
*/
function removeNeuronFromLayer(layerIndex) {
    if (hiddenNodes[layerIndex] > 1) {
        hiddenNodes[layerIndex]--;
        drawNetwork();
    }
    else {
        alert("Minimalna liczba neuronów na warstwie: 1");
    }
}

/* 
funkcja do aktualizacji kontrolek dla warstw ukrytych w interfejsie uzytkownika
czysci poprzednie kontrolki
oraz dodaje nowe kontrolki do kontenera
*/
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
        id = "hidden-layers-controls"
        controls.appendChild(layerControl);
    }
}
/*
funckja do losowej inicjalizacji wag w sieci neuronowej
tworzy ona warstwe wejsciowa ukryta i wyjsciowa
infomruje uzytkowinika o pomyslnej inicjalizaji wag
*/
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

/* 
funkcja do przeprowadzenia symulacji sieci neuronowej
pobiera ona wartosci wejsciowe 
tworzy nowy obiekt klasy Input
zapisuje obecne wyjscia
przesyla dane przez warstwy 
na koniec wyswietla wyniki w interfejsie
*/
function runSimulation() {
    if(layers.length < 2){
        alert("Nie można przeprowadzić symulacji, ponieważ wagi nie zostały wylosowane. Proszę najpierw zainicjować wagi.");
        return;
    }

    const inputValues = getInputValues();
    const input = new Input(inputValues);

    let currentOutputs = input.getValues();

    let outputDetails = '<h5>Dane wejściowe:</h5><p>' + inputValues.join(', ') + '</p>';
    outputDetails += '<h5>Wagi:</h5>';

    for (let layerIndex = 1; layerIndex < layers.length; layerIndex++) {
        outputDetails += `<h6>Warstwa ${layerIndex}:</h6>`;
        const layer = layers[layerIndex];
        layer.neurons.forEach((neuron, neuronIndex) => {
            outputDetails += `
            <p>
                \\( \\text{Neuron } ${neuronIndex + 1}: \\text{ wagi } = [${neuron.weights.join(', ')}], \\text{ bias } = ${neuron.bias} \\) 
            </p>`;
        });
    }

    for (let i = 1; i < layers.length - 1; i++) {
        currentOutputs = layers[i].forward(currentOutputs);
    }

    const finalOutputs = layers[layers.length - 1].forwardOutput(currentOutputs);
    outputDetails += '<h5>Wyniki wyjściowe:</h5><p>' + finalOutputs.map(output => `\\[ ${output} \\]`) + '</p>';

    document.getElementById('output-details').innerHTML = outputDetails;

    MathJax.typeset();
}

// funkcja do pobrania wartosci wejsciowych
function getInputValues() {
    const inputFields = document.querySelectorAll('.input-field');
    return Array.from(inputFields).map(field => parseFloat(field.value) || 0);
}

// inicjalizacja rozmiaru canvasa oraz rysowawnie sieci na poczatku wejscia na strone
resizeCanvas();
drawNetwork();
updateHiddenLayersControls(); 