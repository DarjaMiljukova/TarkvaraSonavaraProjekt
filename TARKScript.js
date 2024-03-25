// Объявляем переменные synad и russynad в глобальном контексте
const synad = [
    'teostus',
    'algoritm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'parandamine'
];

const russynad = [
    'исполнение',
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектом',
    'планирование',
    'итерация',
    'исправление',
    'исправление'
];

function randomSyna() {
    // Juhuslik sõna
    const juhuslikSyna = Math.floor(Math.random() * synad.length);

    // Võtame juhusliku sõna massiivist
    const syna = synad[juhuslikSyna];

    // Lisame HTML-lehele
    document.getElementById("random-syna").innerHTML = syna;

    // Salvestame õige tõlke
    window.correctTranslation = syna;
}

function kontrollime_synad(event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById("kontroll").value.trim().toLowerCase();
        const correctTranslation = window.correctTranslation.toLowerCase();
        const correctTranslationRussian = russynad[synad.indexOf(correctTranslation)].toLowerCase();

        if (userInput === correctTranslation || userInput === correctTranslationRussian) {
            document.body.classList.remove("correct");
            document.body.classList.add("correct");
            document.getElementById("vastus").innerText = "Õige!";
        } else {
            document.body.classList.remove("incorrect");
            document.body.classList.add("incorrect");
            document.getElementById("vastus").innerText = "Vale!";
        }
    }
}


document.getElementById("kontroll").addEventListener("keypress", kontrollime_synad);
