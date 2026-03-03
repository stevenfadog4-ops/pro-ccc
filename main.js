const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const whiteModeBtn = document.getElementById('white-mode');
const blackModeBtn = document.getElementById('black-mode');
const quoteDisplay = document.getElementById('quote-display');
const fortuneDisplay = document.getElementById('fortune-display');
const quoteImg = document.getElementById('quote-img');
const fortuneImg = document.getElementById('fortune-img');

// 12가지 철학자 아이콘 (단순화된 SVG 그림)
const philosopherIcons = [
    // 1. 소크라테스 (수염과 대머리 스타일)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="25" fill="%23f3d2c1"/><path d="M25,45 Q25,80 50,85 Q75,80 75,45 Z" fill="%23eeeeee"/><circle cx="40" cy="35" r="3" fill="black"/><circle cx="60" cy="35" r="3" fill="black"/><path d="M45,45 Q50,48 55,45" stroke="black" fill="none"/></svg>`,
    // 2. 아리스토텔레스 (단정한 수염)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="25" fill="%23f3d2c1"/><path d="M30,50 Q30,75 50,80 Q70,75 70,50 Z" fill="%23cccccc"/><path d="M30,30 Q50,20 70,30" stroke="%23cccccc" stroke-width="8" fill="none"/><circle cx="40" cy="38" r="3" fill="black"/><circle cx="60" cy="38" r="3" fill="black"/></svg>`,
    // 3. 플라톤 (월계관)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="25" fill="%23f3d2c1"/><path d="M30,25 Q50,15 70,25" stroke="green" stroke-width="5" fill="none"/><path d="M25,45 Q25,75 50,80 Q75,75 75,45 Z" fill="%23dddddd"/><circle cx="40" cy="38" r="3" fill="black"/><circle cx="60" cy="38" r="3" fill="black"/></svg>`,
    // 4. 니체 (특유의 콧수염)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="25" fill="%23f3d2c1"/><path d="M30,25 Q50,15 70,25" fill="%23555"/><path d="M35,50 Q50,65 65,50" stroke="%23333" stroke-width="8" fill="none"/><circle cx="40" cy="40" r="3" fill="black"/><circle cx="60" cy="40" r="3" fill="black"/></svg>`,
    // 5. 데카르트 (긴 머리와 콧수염)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M25,30 Q50,10 75,30 L75,70 Q50,80 25,70 Z" fill="%23444"/><circle cx="50" cy="45" r="20" fill="%23f3d2c1"/><path d="M40,55 Q50,60 60,55" stroke="%23444" stroke-width="3" fill="none"/><circle cx="45" cy="45" r="2" fill="black"/><circle cx="55" cy="45" r="2" fill="black"/></svg>`,
    // 6. 칸트
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="25" fill="%23f3d2c1"/><path d="M30,25 Q50,15 70,25" fill="%23aaa"/><rect x="35" y="35" width="10" height="5" fill="none" stroke="black"/><rect x="55" y="35" width="10" height="5" fill="none" stroke="black"/><line x1="45" y1="37.5" x2="55" y2="37.5" stroke="black"/></svg>`,
    // 7. 스피노자
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="25" fill="%23f3d2c1"/><path d="M25,45 Q20,20 50,15 Q80,20 75,45" fill="%23634331"/><circle cx="40" cy="45" r="3" fill="black"/><circle cx="60" cy="45" r="3" fill="black"/></svg>`,
    // 8. 세네카
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="25" fill="%23f3d2c1"/><path d="M25,45 Q25,75 50,80 Q75,75 75,45 Z" fill="%23e0e0e0"/><circle cx="40" cy="38" r="3" fill="black"/><circle cx="60" cy="38" r="3" fill="black"/></svg>`,
    // 9. 마르쿠스 아우렐리우스
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="25" fill="%23f3d2c1"/><path d="M25,40 Q25,85 50,90 Q75,85 75,40 Z" fill="%23b08d57"/><circle cx="40" cy="35" r="3" fill="black"/><circle cx="60" cy="35" r="3" fill="black"/></svg>`,
    // 10. 쇼펜하우어 (옆머리 강조)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="25" fill="%23f3d2c1"/><path d="M25,45 Q15,20 35,20" stroke="%23eee" stroke-width="10" fill="none"/><path d="M75,45 Q85,20 65,20" stroke="%23eee" stroke-width="10" fill="none"/><circle cx="40" cy="45" r="3" fill="black"/><circle cx="60" cy="45" r="3" fill="black"/></svg>`,
    // 11. 헤겔
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="25" fill="%23f3d2c1"/><rect x="30" y="20" width="40" height="15" fill="%23444"/><circle cx="40" cy="45" r="3" fill="black"/><circle cx="60" cy="45" r="3" fill="black"/></svg>`,
    // 12. 루소
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="25" fill="%23f3d2c1"/><path d="M25,45 Q25,15 50,15 Q75,15 75,45" fill="%238d6e63"/><circle cx="40" cy="45" r="3" fill="black"/><circle cx="60" cy="45" r="3" fill="black"/></svg>`
];

// 12가지 십이지신 아이콘
const zodiacIcons = [
    // 1. 쥐 (Rat)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="60" r="30" fill="%239e9e9e"/><circle cx="30" cy="35" r="15" fill="%239e9e9e"/><circle cx="70" cy="35" r="15" fill="%239e9e9e"/><circle cx="40" cy="55" r="3" fill="black"/><circle cx="60" cy="55" r="3" fill="black"/><path d="M45,70 Q50,75 55,70" stroke="pink" fill="none"/></svg>`,
    // 2. 소 (Ox)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="25" y="40" width="50" height="40" rx="10" fill="%23795548"/><path d="M25,45 Q15,30 30,35" stroke="%235d4037" stroke-width="8" fill="none"/><path d="M75,45 Q85,30 70,35" stroke="%235d4037" stroke-width="8" fill="none"/><circle cx="40" cy="55" r="4" fill="black"/><circle cx="60" cy="55" r="4" fill="black"/></svg>`,
    // 3. 호랑이 (Tiger)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23ff9800"/><path d="M20,40 L40,40 M60,40 L80,40 M30,60 L70,60" stroke="black" stroke-width="3"/><circle cx="40" cy="45" r="5" fill="black"/><circle cx="60" cy="45" r="5" fill="black"/></svg>`,
    // 4. 토끼 (Rabbit)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="65" r="30" fill="white" stroke="%23eee"/><path d="M35,40 Q30,10 42,35 Z" fill="white" stroke="%23eee"/><path d="M65,40 Q70,10 58,35 Z" fill="white" stroke="%23eee"/><circle cx="40" cy="60" r="3" fill="black"/><circle cx="60" cy="60" r="3" fill="black"/><path d="M48,70 L52,70 L50,73 Z" fill="pink"/></svg>`,
    // 5. 용 (Dragon)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%234caf50"/><path d="M30,30 L20,15 M70,30 L80,15" stroke="%23388e3c" stroke-width="5"/><circle cx="40" cy="45" r="5" fill="red"/><circle cx="60" cy="45" r="5" fill="red"/><path d="M40,70 Q50,80 60,70" stroke="yellow" stroke-width="3" fill="none"/></svg>`,
    // 6. 뱀 (Snake)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20,80 Q40,40 60,80 Q80,40 90,20" stroke="%238bc34a" stroke-width="12" fill="none" stroke-linecap="round"/><circle cx="85" cy="25" r="8" fill="%238bc34a"/><path d="M85,20 L85,10" stroke="red" stroke-width="2"/><circle cx="83" cy="23" r="1.5" fill="black"/></svg>`,
    // 7. 말 (Horse)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,80 L40,30 L70,40 L80,80" fill="%238d6e63"/><path d="M40,30 Q35,10 30,30" stroke="%235d4037" stroke-width="10" fill="none"/><circle cx="55" cy="40" r="4" fill="black"/></svg>`,
    // 8. 양 (Sheep)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="white" stroke="%23ddd" stroke-dasharray="10,5"/><circle cx="50" cy="45" r="20" fill="%23f3d2c1"/><path d="M30,40 Q25,30 35,35" stroke="%23555" stroke-width="5" fill="none"/><path d="M70,40 Q75,30 65,35" stroke="%23555" stroke-width="5" fill="none"/></svg>`,
    // 9. 원숭이 (Monkey)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="%23a1887f"/><circle cx="50" cy="55" r="25" fill="%23d7ccc8"/><circle cx="20" cy="50" r="10" fill="%23a1887f"/><circle cx="80" cy="50" r="10" fill="%23a1887f"/><circle cx="42" cy="45" r="3" fill="black"/><circle cx="58" cy="45" r="3" fill="black"/></svg>`,
    // 10. 닭 (Rooster)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="60" r="30" fill="white" stroke="%23eee"/><path d="M45,30 Q50,10 55,30" fill="red"/><path d="M75,55 L85,60 L75,65" fill="orange"/><circle cx="55" cy="55" r="3" fill="black"/></svg>`,
    // 11. 개 (Dog)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="55" r="30" fill="%23ffb74d"/><path d="M25,40 Q20,60 30,65" fill="%23e65100"/><path d="M75,40 Q80,60 70,65" fill="%23e65100"/><circle cx="40" cy="50" r="3" fill="black"/><circle cx="60" cy="50" r="3" fill="black"/><circle cx="50" cy="60" r="4" fill="black"/></svg>`,
    // 12. 돼지 (Pig)
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="pink"/><circle cx="50" cy="60" r="12" fill="%23f48fb1"/><circle cx="45" cy="60" r="3" fill="%23c2185b"/><circle cx="55" cy="60" r="3" fill="%23c2185b"/><circle cx="35" cy="45" r="4" fill="black"/><circle cx="65" cy="45" r="4" fill="black"/></svg>`
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
    // 철학자 그림 표시
    quoteImg.src = philosopherIcons[quoteIndex % philosopherIcons.length];
    quoteImg.style.display = 'block';

    const fortuneIndex = Math.floor(Math.random() * zodiacFortunes.length);
    fortuneDisplay.textContent = zodiacFortunes[fortuneIndex];
    // 십이지신 동물 그림 표시
    fortuneImg.src = zodiacIcons[fortuneIndex % zodiacIcons.length];
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
