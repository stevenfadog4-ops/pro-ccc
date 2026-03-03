const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const whiteModeBtn = document.getElementById('white-mode');
const blackModeBtn = document.getElementById('black-mode');
const quoteDisplay = document.getElementById('quote-display');
const fortuneDisplay = document.getElementById('fortune-display');

// 20가지 철학자 명언
const philosopherQuotes = [
    "소크라테스: 너 자신을 알라.",
    "아리스토텔레스: 인내는 쓰고 그 열매는 달다.",
    "플라톤: 행복은 마음의 준비에 달려 있다.",
    "니체: 나를 죽이지 못하는 것은 나를 더 강하게 만든다.",
    "데카르트: 나는 생각한다, 고로 나는 존재한다.",
    "칸트: 할 일을 하라.",
    "스피노자: 내일 지구의 종말이 올지라도 나는 오늘 한 그루의 사과나무를 심겠다.",
    "세네카: 운명은 의지가 있는 자를 인도하고, 의지가 없는 자를 끌고 간다.",
    "마르쿠스 아우렐리우스: 우리 인생은 우리 생각이 만드는 것이다.",
    "에피쿠로스: 만족은 자연스러운 부이다.",
    "루소: 인내는 괴롭지만 그 열매는 달콤하다.",
    "볼테르: 당신이 하는 일에 열중하라.",
    "쇼펜하우어: 모든 불행의 시작은 남과의 비교다.",
    "헤겔: 마음의 문을 여는 손잡이는 안쪽에 달려 있다.",
    "파스칼: 인간은 생각하는 갈대다.",
    "베이컨: 아는 것이 힘이다.",
    "홉스: 인간은 인간에게 늑대다.",
    "로크: 지식은 경험에서 나온다.",
    "사르트르: 인생은 B(Birth)와 D(Death) 사이의 C(Choice)다.",
    "키에르케고르: 삶은 이해해야 할 문제가 아니라 경험해야 할 실재다."
];

// 12가지 십이지신 운세
const zodiacFortunes = [
    "쥐띠: 적극적으로 움직이면 행운이 따릅니다.",
    "소띠: 끈기 있게 기다리면 좋은 소식이 옵니다.",
    "호랑이띠: 용기 있는 도전이 성공을 부릅니다.",
    "토끼띠: 주변 사람과 협력하면 일이 잘 풀립니다.",
    "용띠: 큰 포부를 가지면 목표를 달성합니다.",
    "뱀띠: 신중하게 판단하면 실수를 피할 수 있습니다.",
    "말띠: 활발한 활동이 에너지를 가져다줍니다.",
    "양띠: 배려하는 마음이 복을 가져옵니다.",
    "원숭이띠: 지혜롭게 대처하면 위기를 넘깁니다.",
    "닭띠: 성실한 태도가 신뢰를 쌓게 합니다.",
    "개띠: 정직한 행동이 행운의 열쇠입니다.",
    "돼지띠: 넉넉한 마음이 풍요를 부릅니다."
];

// 로또 번호 및 명언/운세 생성 로직
generateBtn.addEventListener('click', () => {
    // 번호 생성
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });

    // 랜덤 명언 선택
    const randomQuote = philosopherQuotes[Math.floor(Math.random() * philosopherQuotes.length)];
    quoteDisplay.textContent = randomQuote;

    // 랜덤 운세 선택
    const randomFortune = zodiacFortunes[Math.floor(Math.random() * zodiacFortunes.length)];
    fortuneDisplay.textContent = randomFortune;
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
