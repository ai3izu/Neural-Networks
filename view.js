document.addEventListener("DOMContentLoaded", () => {
    
    const contentMap = {
        "O sieciach": `
        <p>Sieci neuronowe to technologia, która została zainspirowana sposobem, w jaki działa ludzki mózg. 
            Mózg składa się z miliardów neuronów, które komunikują się ze sobą, przetwarzając informacje 
            i ucząc się na podstawie doświadczeń. Podobnie, sieci neuronowe składają się z 
            wirtualnych neuronów połączonych w warstwy. Każdy neuron w sieci ma swoje wagi, które określają, 
            jak silnie wpływa na sygnały przekazywane do kolejnych neuronów.
        </p>
        <p>Podstawowe elementy sieci neuronowej to:</p>
        <ol>
            <li><p><strong>- Neurony:</strong> Podstawowe jednostki przetwarzające informacje, które odbierają dane, 
                    przetwarzają je i przesyłają dalej.
            </p></li>
            <li><p><strong>-Warstwy:</strong> Sieci neuronowe składają się z trzech głównych rodzajów warstw: 
                    warstwy wejściowej (gdzie wprowadzane są dane), warstw ukrytych (gdzie odbywa się przetwarzanie) 
                    oraz warstwy wyjściowej (gdzie generowane są końcowe wyniki).
            </p></li>
            <li><p><strong>-Wagi:</strong> Każde połączenie między neuronami ma przypisaną wagę, która określa, 
                    jak ważny jest dany sygnał w procesie podejmowania decyzji przez sieć. 
            </p></li>
            <li><p><strong>-Funkcje aktywacji:</strong> Funkcje te pomagają neuronowi zdecydować, 
                    czy powinien przekazać sygnał dalej, a także w jaki sposób. 
                    Wiele różnych funkcji aktywacji może być używanych, w tym popularne funkcje, 
                    takie jak ReLU (Rectified Linear Unit) czy sigmoidalna. 
            </p></li>
        </ol>
        <p>Sieci neuronowe uczą się na podstawie danych, co oznacza, że im więcej danych mają do analizy, 
                tym lepsze stają się w rozpoznawaniu wzorców. Uczy się ich w sposób podobny do tego, 
                jak uczymy się my – przy pomocy doświadczenia. Dzięki temu są w stanie dostosować się do różnych zadań 
                i sytuacji.
        </p>
    `,
        "Działanie": `
        <p>Działanie sieci neuronowych można podzielić na kilka kluczowych kroków, 
        które obejmują zarówno proces wprowadzania danych, jak i ich przetwarzanie oraz uczenie się. 
        Oto szczegółowy opis tego, jak to działa:
        </p>
        <ol>
            <li><p>Wprowadzenie danych: Proces zaczyna się od wprowadzenia danych do sieci neuronowej. Dla przykładu, w przypadku rozpoznawania obrazów, dane wejściowe mogą zawierać piksele obrazu. Każdy piksel jest reprezentowany jako liczba (np. poziom szarości lub wartości RGB). 
            </p></li>
            <li><p>Przetwarzanie danych w warstwach: Po wprowadzeniu danych do warstwy wejściowej, są one przesyłane do warstw ukrytych. W każdej warstwie każdy neuron wykonuje obliczenia, które polegają na pomnożeniu wartości wejściowych przez przypisane wagi i dodaniu tzw. biasu (dodatkowej wartości, która pomaga w podejmowaniu decyzji). Wynik tego obliczenia przechodzi przez funkcję aktywacji, która decyduje, czy neuron “uaktywni się” i przekaże wynik do neuronów w następnej warstwie. 
            </p></li>
            <li><p>Generowanie wyników: Po przetworzeniu przez wszystkie warstwy, dane docierają do warstwy wyjściowej, gdzie generowane są ostateczne wyniki. Na przykład, w przypadku klasyfikacji obrazów, wynikiem może być prawdopodobieństwo, że dany obraz przedstawia kota, psa lub inny obiekt. 
            </p></li>
            <li><p>Uczenie się: Proces uczenia się polega na dostosowywaniu wag w połączeniach między neuronami na podstawie błędów popełnionych przez sieć. Gdy sieć dokonuje predykcji, porównuje swoje wyniki z rzeczywistymi odpowiedziami (tzw. etykietami). Gdy występuje różnica, algorytm optymalizacji (najczęściej algorytm wstecznej propagacji błędu) oblicza, jak wagi powinny być zmienione, aby zminimalizować ten błąd. Proces ten powtarza się wielokrotnie w ramach treningu sieci, co pozwala jej na doskonalenie swoich umiejętności. 
            </p></li>
            <li><p>Walidacja i testowanie: Po zakończeniu etapu szkolenia, sieć neuronowa jest testowana na nowym zbiorze danych, który nie był używany w trakcie trenowania. To pozwala ocenić, jak dobrze sieć radzi sobie z zadaniami i jak generalizuje nauczone wzorce.    
            </p></li>
        </ol>
        <p> Proces działania sieci neuronowych jest złożony, ale dzięki jego zrozumieniu możemy lepiej docenić, jak potężnym narzędziem są sieci neuronowe w rozwiązywaniu różnorodnych problemów w praktyce. </p>
    `,
        "Zastosowanie": `
        <p>Zastosowanie sieci neuronowych jest niezwykle różnorodne i wpływa na wiele aspektów naszego życia. 
            W medycynie, na przykład, sieci neuronowe są wykorzystywane do analizy zdjęć diagnostycznych, takich 
            jak rentgeny, tomografie komputerowe czy rezonansy magnetyczne. Dzięki zaawansowanej analizie obrazów, 
            lekarze mogą szybciej wykrywać choroby, takie jak nowotwory, co znacząco poprawia szanse na wczesne leczenie 
            i zwiększa skuteczność diagnozy.
        </p>
        <p>W sektorze motoryzacyjnym sieci neuronowe są kluczowym elementem technologii autonomicznych pojazdów. 
            Umożliwiają one rozpoznawanie znaków drogowych, śledzenie ruchu innych uczestników drogi oraz podejmowanie 
            decyzji w czasie rzeczywistym. Dzięki tym technologiom, autonomiczne pojazdy są w stanie poruszać się po 
            drogach w sposób bezpieczny i efektywny. Dodatkowo, systemy wspomagania kierowcy, takie jak automatyczne 
            parkowanie czy asystent pasa ruchu, również korzystają z możliwości, jakie dają sieci neuronowe.
        </p>
        <p>W branży finansowej sieci neuronowe pomagają w wykrywaniu oszustw i analizie ryzyka. 
            Dzięki analizie dużych zbiorów danych w czasie rzeczywistym, instytucje finansowe mogą efektywniej 
            identyfikować nieprawidłowości i chronić klientów przed stratami. Ponadto, sieci neuronowe umożliwiają 
            przewidywanie zmian na rynkach finansowych, co pozwala na dokładniejsze dopasowanie ofert do potrzeb 
            klientów oraz lepsze zarządzanie portfelami inwestycyjnymi.
        </p>
        <p>W miarę jak technologia się rozwija, możemy spodziewać się, że zastosowania sieci neuronowych będą się 
            nadal rozwijać. Będą one odgrywać coraz większą rolę w innowacjach technologicznych oraz w codziennym życiu, 
            co czyni je fascynującym narzędziem przyszłości. Sieci neuronowe stanowią więc nie tylko obecny trend, 
            ale także fundament przyszłości w wielu branżach.
        </p>   
    `
    };

    const tags = document.querySelectorAll(".tag");
    const articleConcent = document.getElementById("article-content");
    articleConcent.innerHTML = contentMap['O sieciach'];

    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const content = contentMap[tag.textContent];
            if (content) {
                articleConcent.innerHTML = content;
            }
        });
    });


    const activationFunctionContentMap = {
        "ReLU": `
            <p>
                ReLU to funkcja aktywacji, która przepuszcza wartość wejściową <em>x</em>, jeśli jest dodatnia, 
                a w przeciwnym przypadku zwraca <em>0</em>.<br> Matematycznie można ją zapisać za pomocą wzoru:
            </p>
            <p>$$f(x)=\\max(0, x)$$</p>
            <p>
                ReLU wprowadza nieliniowość do modelu, co pozwala sieci neuronowej lepiej uczyć się 
                złożonych zależności.
            </p>`,
        "Sigmoid": `
            <p>
                Sigmoid to funkcja aktywacji przekształcająca wartości wejściowe na przedział \(0, 1)\. Sprawdza się dobrze
                w klasyfikacji binarnej, gdzie potrzebujemy wykryć jedną z dwóch kategorii.</br>
                Jej wzór matematyczny to:
            </p>
            <p>
            $$f(x) = \\frac{1}{1 + e^{-x}}$$
            </p>
            <p>
            Intuicyjnie pokazuje "pewność" modelu - im bliżej \ 1\, tym bardziej pewny.
            </p>
        `,
        "Tanh": `
            <p>Tanh to funkcja, która przypomina sinus, ale działa na wartościach od -1, do  1. 
                Gdy wejście jest bardzo duże, wynik zbliża się do 1, w odwrotnej situacji -1. Wyrażona jest wzorem:
            </p>
            <p>
                $$f(x) = than(x) = \\frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}$$
            </p>
            <p>
            Skaluje dane, dzięki czemu są symetryczne wokół zera, co pomaga w uczeniu sieci.
            </p>
        `,
        "Softmax": `
            <p> Softmax to funkcja, która przekształca liczby na prawdopodobieństwa, sumujące się do 1.
            Przydaje się w klasyfikacji wieloklasowej — mówi, która klasa ma największą szansę.
            </p>
            <p>$$\\mathbf{x} = [x_1, x_2, \\dots, x_n]$$</p>
            <p>$$f(x_i) = \\frac{e^{x_i}}{\\sum_{j=1}^n e^{x_j}}$$</p>
            <p>Intuicyjnie rozdziela wyniki, skupiając się na dominujących wartościach.</p>
        `
    };


    const activationFunctionTags = document.querySelectorAll(".function-btn");
    const activationFunctionArticle = document.querySelector(".activation-function-article");


    activationFunctionTags.forEach(tag => {
        tag.addEventListener("click", () => {
            const content = activationFunctionContentMap[tag.textContent];
            if (content) {
                activationFunctionArticle.innerHTML = content;
                MathJax.typeset();
            }
        });
    });

});

let tags = document.querySelectorAll(".tag");
tags[0].classList.add('active');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
    });
});


let activationFunctionTags = document.querySelectorAll(".function-btn");
activationFunctionTags[0].classList.add('active');

activationFunctionTags.forEach(tag => {
    tag.addEventListener('click', () => {
        activationFunctionTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
    });
});
