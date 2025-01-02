document.addEventListener("DOMContentLoaded", () => {
    const contentMap = {
        "O sieciach": `
        <p class="first-paragraph">Sieci neuronowe to jeden z filarów współczesnej sztucznej inteligencji, który
                zmienia sposób, w jaki komputery uczą się i podejmują decyzje. Inspirowane strukturą ludzkiego mózgu,
                składają się z warstw połączonych ze sobą neuronów – niewielkich jednostek przetwarzających dane. Każdy
                neuron analizuje informacje i przekazuje je dalej, umożliwiając sieci uczenie się na podstawie
                doświadczeń.</p>
            <p>To, co wyróżnia sieci neuronowe, to ich zdolność do rozpoznawania wzorców w dużych ilościach danych.
                Dzięki temu znajdują zastosowanie w zadaniach takich jak rozpoznawanie obrazów, przetwarzanie języka
                naturalnego, diagnostyka medyczna czy nawet prognozowanie trendów w biznesie. Proces ich nauki – zwany
                uczeniem maszynowym – pozwala im doskonalić swoje działanie bez konieczności ręcznego programowania
                każdego kroku.</p>
            <p>Ciekawym aspektem sieci neuronowych jest ich wszechstronność. Dzięki różnym architekturom, takim jak
                sieci konwolucyjne (CNN) do analizy obrazów czy sieci rekurencyjne (RNN) do przetwarzania sekwencji
                danych, możliwe jest dostosowanie ich do szerokiego zakresu problemów. W praktyce oznacza to, że ta sama
                technologia może być użyta do analizy zdjęć satelitarnych, tłumaczenia tekstu w czasie rzeczywistym czy
                nawet tworzenia realistycznych obrazów i dźwięków.</p>
            <p>Jednak nie można zapominać o wyzwaniach związanych z sieciami neuronowymi. Ich działanie często opiera
                się na tzw. "czarnej skrzynce" – modelu, który choć skuteczny, jest trudny do pełnego zrozumienia przez
                ludzi. Wymaga to rozwijania metod interpretacji wyników oraz zapewnienia, że rozwiązania oparte na AI są
                etyczne i zgodne z naszymi wartościami. Dlatego temat sieci neuronowych to nie tylko technologia, ale
                też pytanie o to, jak kształtować przyszłość, w której człowiek i sztuczna inteligencja współpracują na
                równych zasadach.</p>
            <p>Zaintrygowany? Sieci neuronowe to więcej niż algorytmy – to narzędzia, które zmieniają nasz świat na
                naszych oczach.</p>
    `,
        "Działanie": `
        <p class="first-paragraph">Sieci neuronowe to skomplikowane systemy, które naśladują sposób działania ludzkiego mózgu,
            by rozwiązywać złożone problemy. Ich struktura opiera się na trzech głównych elementach: warstwie wejściowej, 
            warstwach ukrytych i warstwie wyjściowej. Dane trafiają najpierw do warstwy wejściowej, 
            gdzie są odpowiednio przekształcane, aby mogły zostać przetworzone przez kolejne warstwy.</p>
        <p>Podstawową jednostką sieci jest neuron, który wykonuje proste obliczenia.
            Neurony w poszczególnych warstwach są połączone i przekazują sobie informacje w formie tzw. wag. 
            Wagi te określają, jak mocno dane wejściowe wpływają na wynik. 
            W trakcie procesu uczenia sieci wagi są modyfikowane, co pozwala na lepsze dopasowanie modelu do zadania.</p>
         <p>Kluczowym etapem działania sieci jest propagacja danych. 
            Informacje są przesyłane od warstwy wejściowej przez warstwy ukryte do wyjściowej. 
            Każdy neuron wykonuje prostą operację matematyczną, wykorzystując funkcję aktywacji, 
            która decyduje, czy wynik będzie przekazany dalej. To właśnie te operacje, 
            powtarzane w setkach czy tysiącach neuronów, pozwalają sieci wykrywać wzorce w danych.</p>
         <p>Proces uczenia odbywa się za pomocą algorytmu zwanego propagacją wsteczną. 
            Polega on na analizie błędu, czyli różnicy między przewidywanym a rzeczywistym wynikiem. 
            Na podstawie tej analizy sieć koryguje swoje wagi, aby w przyszłości lepiej radzić sobie z zadaniem. 
            Dzięki temu sieci neuronowe stają się coraz bardziej precyzyjne w swoich przewidywaniach.</p>
        <p>Działanie sieci neuronowych opiera się na powtarzalności i precyzyjnych obliczeniach, 
            ale ich potencjał wynika z możliwości przetwarzania ogromnych ilości danych. 
            To właśnie ta cecha sprawia, że sieci neuronowe są niezwykle skuteczne w takich zadaniach, 
            jak rozpoznawanie obrazów, analiza tekstów czy prognozowanie przyszłych zdarzeń. W rzeczywistości, 
            choć koncepcja może wydawać się złożona, cała magia dzieje się dzięki prostym zasadom realizowanym 
            na wielką skalę.</p>
    `,
        "Zastosowanie": `
        <p class="first-paragraph">Sieci neuronowe to technologia, która znajduje zastosowanie w wielu dziedzinach, 
            zmieniając sposób, w jaki rozwiązujemy różnorodne problemy. 
            Dzięki zdolności do wykrywania wzorców w dużych zbiorach danych, 
            są wykorzystywane do rozpoznawania obrazów, analizy tekstów czy przewidywania trendów. 
            To właśnie ich uniwersalność sprawia, że stanowią podstawę wielu nowoczesnych rozwiązań technologicznych.</p>
        <p>Jednym z najważniejszych zastosowań sieci neuronowych jest medycyna. 
            Pomagają one w analizie obrazów diagnostycznych, takich jak zdjęcia rentgenowskie, 
            tomografie czy wyniki badań EKG. Dzięki nim możliwe jest wcześniejsze wykrywanie chorób, 
            takich jak nowotwory, czy przewidywanie powikłań u pacjentów. 
            Wpływa to na zwiększenie dokładności diagnozy i pozwala na bardziej spersonalizowaną opiekę zdrowotną.</p>
        <p>W sektorze motoryzacyjnym sieci neuronowe są sercem technologii autonomicznych pojazdów. 
            Wykrywają znaki drogowe, analizują ruch innych uczestników drogi i podejmują decyzje w ułamku sekundy, 
            zapewniając bezpieczeństwo podczas jazdy. Te same mechanizmy są również 
            wykorzystywane w systemach wspomagania kierowcy, takich jak automatyczne parkowanie czy utrzymywanie 
            pasa ruchu.</p>
        <p>Sieci neuronowe zmieniają także świat finansów. Dzięki ich zdolności do analizy ogromnych zbiorów danych
            w czasie rzeczywistym instytucje finansowe mogą skuteczniej wykrywać oszustwa, 
            przewidywać zmiany na rynkach oraz oferować klientom precyzyjnie dopasowane produkty finansowe. 
            Automatyzacja takich procesów nie tylko zwiększa efektywność, ale też poprawia bezpieczeństwo.</p>
        <p>Sieci neuronowe otwierają przed nami wiele możliwości, 
            wpływając na nasze codzienne życie i rozwój całych branż. To fascynujące narzędzie, 
            które zmienia świat na naszych oczach i z pewnością odegra jeszcze większą rolę w przyszłości.</p>    
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
});

