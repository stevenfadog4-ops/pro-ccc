const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const whiteModeBtn = document.getElementById('white-mode');
const blackModeBtn = document.getElementById('black-mode');

// 로또 번호 생성 로직
generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });
});

// 모드 전환 로직
const setMode = (mode) => {
    if (mode === 'black') {
        document.body.classList.add('black-mode');
    } else {
        document.body.classList.remove('black-mode');
    }
    localStorage.setItem('theme-mode', mode);
};

whiteModeBtn.addEventListener('click', () => setMode('white'));
blackModeBtn.addEventListener('click', () => setMode('black'));

// 저장된 모드 불러오기
const savedMode = localStorage.getItem('theme-mode');
if (savedMode) {
    setMode(savedMode);
}
