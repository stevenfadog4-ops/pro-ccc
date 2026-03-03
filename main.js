const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const whiteModeBtn = document.getElementById('white-mode');
const blackModeBtn = document.getElementById('black-mode');
const quoteDisplay = document.getElementById('quote-display');
const fortuneDisplay = document.getElementById('fortune-display');
const quoteImg = document.getElementById('quote-img');
const fortuneImg = document.getElementById('fortune-img');

// 12가지 기초적인 도형 (2D SVG)
const basicShapes = [
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%234CAF50"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="15" y="15" width="70" height="70" fill="%232196F3"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,15 90,85 10,85" fill="%23F44336"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,5 95,35 80,95 20,95 5,35" fill="%23FFEB3B"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="%239C27B0"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,5 63,38 98,38 70,59 78,95 50,75 22,95 30,59 2,38 37,38" fill="%23FFC107"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,30 C50,10 10,10 10,40 C10,70 50,95 50,95 C50,95 90,70 90,40 C90,10 50,10 50,30" fill="%23E91E63"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,5 95,50 50,95 5,50" fill="%2300BCD4"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="45" ry="30" fill="%23795548"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="20,15 80,15 95,85 5,85" fill="%23607D8B"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M35,10 H65 V35 H90 V65 H65 V90 H35 V65 H10 V35 H35 Z" fill="%233F51B5"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="35" width="80" height="30" fill="%23FF5722"/></svg>`
];

// 12가지 입체적인 도형 (3D Style SVG) - 변수명 수정: threeDShapes
const threeDShapes = [
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23888;stop-opacity:1"/><stop offset="100%" style="stop-color:%23222;stop-opacity:1"/></linearGradient></defs><path d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" fill="url(%23g1)"/><path d="M50,10 L90,30 L50,50 L10,30 Z" fill="%23aaa"/><path d="M10,30 L50,50 L50,90 L10,70 Z" fill="%23666"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g2" cx="40%" cy="40%" r="50%"><stop offset="0%" style="stop-color:%23fff"/><stop offset="100%" style="stop-color:%2333f"/></radialGradient></defs><circle cx="50" cy="50" r="45" fill="url(%23g2)"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23444"/><stop offset="50%" style="stop-color:%23888"/><stop offset="100%" style="stop-color:%23444"/></linearGradient></defs><ellipse cx="50" cy="20" rx="30" ry="10" fill="%23aaa"/><path d="M20,20 Q20,30 50,30 Q80,30 80,20 L80,80 Q80,90 50,90 Q20,90 20,80 Z" fill="url(%23g3)"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23f44"/><stop offset="50%" style="stop-color:%23f88"/><stop offset="100%" style="stop-color:%23f44"/></linearGradient></defs><path d="M50,10 L85,80 Q50,95 15,80 Z" fill="url(%23g4)"/><ellipse cx="50" cy="80" rx="35" ry="10" fill="%23a22" opacity="0.5"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,10 L90,80 L50,60 L10,80 Z" fill="%23FFC107"/><path d="M50,10 L50,60 L90,80 Z" fill="%23FFA000"/><path d="M50,10 L10,80 L50,60 Z" fill="%23FFD54F"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g5" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%234CAF50"/><stop offset="100%" style="stop-color:%231B5E20"/></linearGradient></defs><path d="M20,40 L50,20 L80,40 L80,80 L50,60 L20,80 Z" fill="url(%23g5)"/><path d="M20,40 L50,60 L80,40 L50,20 Z" fill="%2381C784"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="%23673AB7" stroke-width="15"/><circle cx="50" cy="50" r="40" fill="none" stroke="%23D1C4E9" stroke-width="5" stroke-dasharray="1,10"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,10 90,50 50,90 10,50" fill="%23009688"/><path d="M50,10 L50,90 L90,50 Z" fill="%2300796B"/><path d="M50,10 L10,50 L50,90 Z" fill="%234DB6AC"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23FF5722"/><stop offset="100%" style="stop-color:%23BF360C"/></linearGradient></defs><rect x="20" y="30" width="60" height="40" rx="20" ry="20" fill="url(%23g6)"/><ellipse cx="40" cy="45" rx="5" ry="5" fill="white" opacity="0.3"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,20 L70,20 L80,80 L20,80 Z" fill="%23795548"/><path d="M30,20 L70,20 L60,40 L40,40 Z" fill="%23A1887F"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,5 L95,50 L50,95 L5,50 Z" fill="%2303A9F4"/><path d="M50,5 L50,95 L95,50 Z" fill="%230288D1"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g7" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23E91E63"/><stop offset="100%" style="stop-color:%23880E4F"/></linearGradient></defs><path d="M50,20 Q80,20 80,50 Q80,80 50,80 Q20,80 20,50 Q20,20 50,20 Z" fill="url(%23g7)"/></svg>`
];

const philosopherQuotes = [
    "소크라테스: 너 자신을 알라.", "아리스토텔레스: 인내는 쓰고 그 열매는 달다.", "플라톤: 행복은 마음의 준비에 달려 있다.", "니체: 나를 죽이지 못하는 것은 나를 더 강하게 만든다.",
    "데카르트: 나는 생각한다, 고로 나는 존재한다.", "칸트: 할 일을 하라.", "스피노자: 오늘 한 그루의 사과나무를 심겠다.", "세네카: 운명은 의지가 있는 자를 인도한다.",
    "마르쿠스 아우렐리우스: 인생은 우리 생각이 만드는 것이다.", "에피쿠로스: 만족은 자연스러운 부이다.", "루소: 인내는 괴롭지만 그 열매는 달콤하다.", "볼테르: 당신이 하는 일에 열중하라.",
    "쇼펜하우어: 모든 불행의 시작은 남과의 비교다.", "헤겔: 마음의 문을 여는 손잡이는 안쪽에 있다.", "파스칼: 인간은 생각하는 갈대다.", "베이컨: 아는 것이 힘이다.",
    "홉스: 인간은 인간에게 늑대다.", "로크: 지식은 경험에서 나온다.", "사르트르: 인생은 Choice다.", "키에르케고르: 삶은 경험해야 할 실재다."
];

const zodiacFortunes = [
    "쥐띠: 적극적으로 움직이면 행운이 따릅니다.", "소띠: 끈기 있게 기다리면 좋은 소식이 옵니다.", "호랑이띠: 용기 있는 도전이 성공을 부릅니다.", "토끼띠: 주변 사람과 협력하면 일이 잘 풀립니다.",
    "용띠: 큰 포부를 가지면 목표를 달성합니다.", "뱀띠: 신중하게 판단하면 실수를 피할 수 있습니다.", "말띠: 활발한 활동이 에너지를 가져다줍니다.", "양띠: 배려하는 마음이 복을 가져옵니다.",
    "원숭이띠: 지혜롭게 대처하면 위기를 넘깁니다.", "닭띠: 성실한 태도가 신뢰를 쌓게 합니다.", "개띠: 정직한 행동이 행운의 열쇠입니다.", "돼지띠: 넉넉한 마음이 풍요를 부릅니다."
];

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });

    const quoteIndex = Math.floor(Math.random() * philosopherQuotes.length);
    quoteDisplay.textContent = philosopherQuotes[quoteIndex];
    quoteImg.src = threeDShapes[quoteIndex % threeDShapes.length];
    quoteImg.style.display = 'block';

    const fortuneIndex = Math.floor(Math.random() * zodiacFortunes.length);
    fortuneDisplay.textContent = zodiacFortunes[fortuneIndex];
    fortuneImg.src = basicShapes[fortuneIndex % basicShapes.length];
    fortuneImg.style.display = 'block';
});

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

const savedMode = localStorage.getItem('theme-mode');
if (savedMode) setMode(savedMode);
