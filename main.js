const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const whiteModeBtn = document.getElementById('white-mode');
const blackModeBtn = document.getElementById('black-mode');
const quoteDisplay = document.getElementById('quote-display');
const fortuneDisplay = document.getElementById('fortune-display');
const quoteImg = document.getElementById('quote-img');
const fortuneImg = document.getElementById('fortune-img');
const quoteName = document.getElementById('quote-name');
const fortuneName = document.getElementById('fortune-name');

// 12가지 철학자 아이콘 (고퀄리티 입체 SVG)
const philosopherIcons = [
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="s1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f7e0d5"/><stop offset="100%" stop-color="%23e0c3b5"/></linearGradient><linearGradient id="beard" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%23ffffff"/><stop offset="100%" stop-color="%23d0d0d0"/></linearGradient></defs><circle cx="50" cy="40" r="28" fill="url(%23s1)"/><path d="M22,45 Q22,85 50,92 Q78,85 78,45 Z" fill="url(%23beard)"/><path d="M25,30 Q50,15 75,30" stroke="%23ffffff" stroke-width="4" fill="none"/><circle cx="40" cy="38" r="2.5" fill="%23333"/><circle cx="60" cy="38" r="2.5" fill="%23333"/><path d="M42,52 Q50,56 58,52" stroke="%23333" stroke-width="1.5" fill="none"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="a1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f3d2c1"/><stop offset="100%" stop-color="%23e8b5a0"/></linearGradient></defs><circle cx="50" cy="40" r="28" fill="url(%23a1)"/><path d="M22,35 Q25,10 50,10 Q75,10 78,35 L78,55 Q78,75 50,75 Q22,75 22,55 Z" fill="%23cccccc" opacity="0.8"/><circle cx="40" cy="40" r="2.5" fill="%23333"/><circle cx="60" cy="40" r="2.5" fill="%23333"/><path d="M30,30 Q50,15 70,30" stroke="%23999" stroke-width="6" fill="none"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="p1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f3d2c1"/><stop offset="100%" stop-color="%23e8b5a0"/></linearGradient></defs><circle cx="50" cy="40" r="28" fill="url(%23p1)"/><path d="M25,25 Q50,5 75,25" stroke="%234caf50" stroke-width="6" fill="none" opacity="0.6"/><path d="M25,40 Q25,80 50,85 Q75,80 75,40 Z" fill="%23f5f5f5"/><circle cx="40" cy="42" r="2.5" fill="%23333"/><circle cx="60" cy="42" r="2.5" fill="%23333"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="28" fill="%23f3d2c1"/><path d="M20,25 Q50,5 80,25 L80,45 L20,45 Z" fill="%23444"/><path d="M30,55 Q50,75 70,55 Q70,45 30,45 Z" fill="%23222"/><circle cx="40" cy="42" r="2" fill="black"/><circle cx="60" cy="42" r="2" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M15,30 Q50,0 85,30 L85,80 Q50,90 15,80 Z" fill="%231a1a1a"/><circle cx="50" cy="45" r="22" fill="%23f3d2c1"/><path d="M35,60 Q50,70 65,60" stroke="%23333" stroke-width="2" fill="none"/><circle cx="42" cy="45" r="2" fill="black"/><circle cx="58" cy="45" r="2" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="28" fill="%23f3d2c1"/><path d="M25,25 Q50,10 75,25" fill="%23999"/><circle cx="38" cy="42" r="8" fill="none" stroke="black" stroke-width="1"/><circle cx="62" cy="42" r="8" fill="none" stroke="black" stroke-width="1"/><line x1="46" y1="42" x2="54" y2="42" stroke="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="28" fill="%23f3d2c1"/><path d="M22,45 Q15,10 50,10 Q85,10 78,45 Z" fill="%234e342e"/><circle cx="40" cy="48" r="2.5" fill="black"/><circle cx="60" cy="48" r="2.5" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="28" fill="%23f3d2c1"/><path d="M25,45 Q25,85 50,92 Q75,85 75,45 Z" fill="%23eeeeee" opacity="0.9"/><circle cx="40" cy="38" r="2.5" fill="%23555"/><circle cx="60" cy="38" r="2.5" fill="%23555"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="40" r="28" fill="%23f3d2c1"/><path d="M22,42 Q22,90 50,95 Q78,90 78,42 Z" fill="%238d6e63"/><path d="M20,30 L80,30" stroke="%23ffc107" stroke-width="4" opacity="0.7"/><circle cx="40" cy="38" r="2.5" fill="black"/><circle cx="60" cy="38" r="2.5" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="28" fill="%23f3d2c1"/><path d="M25,45 Q10,10 40,10 M75,45 Q90,10 60,10" stroke="%23ffffff" stroke-width="12" fill="none"/><circle cx="40" cy="48" r="2.5" fill="black"/><circle cx="60" cy="48" r="2.5" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="28" fill="%23f3d2c1"/><path d="M25,20 H75 L75,35 H25 Z" fill="%23333"/><circle cx="40" cy="48" r="2.5" fill="black"/><circle cx="60" cy="48" r="2.5" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="45" r="28" fill="%23f3d2c1"/><path d="M22,45 Q22,10 50,10 Q78,10 78,45 Z" fill="%236d4c41" opacity="0.8"/><circle cx="40" cy="50" r="2.5" fill="black"/><circle cx="60" cy="50" r="2.5" fill="black"/></svg>`
];

// 12가지 십이지신 아이콘 (입체감 있는 귀여운 스타일)
const zodiacIcons = [
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="r1" cx="40%" cy="40%" r="50%"><stop offset="0%" stop-color="%23bdbdbd"/><stop offset="100%" stop-color="%23757575"/></radialGradient></defs><circle cx="30" cy="35" r="18" fill="url(%23r1)"/><circle cx="70" cy="35" r="18" fill="url(%23r1)"/><circle cx="50" cy="65" r="32" fill="url(%23r1)"/><circle cx="50" cy="65" r="5" fill="pink"/><circle cx="40" cy="58" r="3" fill="black"/><circle cx="60" cy="58" r="3" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="ox1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23a1887f"/><stop offset="100%" stop-color="%235d4037"/></linearGradient></defs><rect x="25" y="45" width="50" height="42" rx="15" fill="url(%23ox1)"/><path d="M20,40 Q15,20 35,35 M80,40 Q85,20 65,35" stroke="%234e342e" stroke-width="8" fill="none"/><circle cx="50" cy="72" r="10" fill="none" stroke="%23ffd54f" stroke-width="3"/><circle cx="40" cy="60" r="4" fill="black"/><circle cx="60" cy="60" r="4" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="t1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23ffb74d"/><stop offset="100%" stop-color="%23f57c00"/></radialGradient></defs><circle cx="50" cy="50" r="42" fill="url(%23t1)"/><path d="M20,40 L35,45 M65,45 L80,40 M40,20 L50,35 L60,20" stroke="black" stroke-width="4"/><circle cx="38" cy="50" r="5" fill="black"/><circle cx="62" cy="50" r="5" fill="black"/><circle cx="50" cy="65" r="6" fill="%23333"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="30" r="12" fill="white" stroke="%23eee"/><circle cx="65" cy="30" r="12" fill="white" stroke="%23eee"/><circle cx="50" cy="65" r="32" fill="white" stroke="%23eee"/><circle cx="40" cy="60" r="3" fill="red"/><circle cx="60" cy="60" r="3" fill="red"/><path d="M48,72 Q50,78 52,72" fill="pink"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="d1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2381c784"/><stop offset="100%" stop-color="%232e7d32"/></linearGradient></defs><circle cx="50" cy="50" r="42" fill="url(%23d1)"/><path d="M30,30 L20,10 M70,30 L80,10" stroke="%23ffd54f" stroke-width="6"/><path d="M35,70 Q50,90 65,70" stroke="red" stroke-width="3" fill="none"/><circle cx="40" cy="45" r="5" fill="yellow"/><circle cx="60" cy="45" r="5" fill="yellow"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10,80 Q30,50 50,80 Q70,50 85,30" stroke="%234caf50" stroke-width="12" fill="none" stroke-linecap="round"/><circle cx="85" cy="30" r="10" fill="%234caf50"/><path d="M85,25 L85,15 L90,10 M85,15 L80,10" stroke="red" stroke-width="2" fill="none"/><circle cx="83" cy="28" r="2" fill="yellow"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="h1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%238d6e63"/><stop offset="100%" stop-color="%234e342e"/></linearGradient></defs><path d="M30,90 L45,30 L75,40 L85,90" fill="url(%23h1)"/><path d="M45,30 Q35,5 30,30 Q25,55 45,45" fill="%23222"/><circle cx="60" cy="45" r="4" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23f5f5f5" stroke="%23eee" stroke-width="2"/><path d="M30,40 Q20,20 40,30 M70,40 Q80,20 60,30" stroke="%235d4037" stroke-width="6" fill="none"/><circle cx="50" cy="55" r="22" fill="%23f3d2c1"/><circle cx="42" cy="52" r="3" fill="black"/><circle cx="58" cy="52" r="3" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="50" r="12" fill="%23a1887f"/><circle cx="75" cy="50" r="12" fill="%23a1887f"/><circle cx="50" cy="50" r="38" fill="%23a1887f"/><path d="M50,55 Q50,85 25,50 Q25,15 50,45 Q75,15 75,50 Q50,85 50,55 Z" fill="%23ffe0b2"/><circle cx="40" cy="48" r="3" fill="black"/><circle cx="60" cy="48" r="3" fill="black"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="60" r="35" fill="white" stroke="%23eee"/><path d="M40,30 Q50,0 60,30 Z" fill="red"/><path d="M75,55 L88,60 L75,65 Z" fill="orange"/><circle cx="55" cy="55" r="3" fill="black"/><circle cx="50" cy="75" r="10" fill="red" opacity="0.6"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="d2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23ffcc80"/><stop offset="100%" stop-color="%23fb8c00"/></linearGradient></defs><circle cx="50" cy="55" r="35" fill="url(%23d2)"/><path d="M20,40 Q10,70 30,75 Z" fill="%23e65100"/><path d="M80,40 Q90,70 70,75 Z" fill="%23e65100"/><circle cx="40" cy="55" r="3" fill="black"/><circle cx="60" cy="55" r="3" fill="black"/><circle cx="50" cy="65" r="5" fill="black"/><path d="M45,75 Q50,82 55,75" stroke="red" fill="none"/></svg>`,
    `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="pg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23f48fb1"/><stop offset="100%" stop-color="%23ec407a"/></radialGradient></defs><circle cx="50" cy="50" r="42" fill="url(%23pg1)"/><circle cx="50" cy="62" r="15" fill="%23f06292"/><circle cx="45" cy="62" r="3" fill="%23880e4f"/><circle cx="55" cy="62" r="3" fill="%23880e4f"/><circle cx="35" cy="45" r="4" fill="black"/><circle cx="65" cy="45" r="4" fill="black"/></svg>`
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
    // 1. 애니메이션 리셋을 위해 클래스 제거
    quoteImg.classList.remove('show');
    fortuneImg.classList.remove('show');

    // 2. 로또 번호 생성
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });

    // 3. 명언 생성 및 이름 추출
    const quoteIndex = Math.floor(Math.random() * philosopherQuotes.length);
    const fullQuote = philosopherQuotes[quoteIndex];
    const nameOnly = fullQuote.split(':')[0].trim();
    quoteDisplay.textContent = fullQuote;
    quoteName.textContent = nameOnly;
    quoteImg.src = philosopherIcons[quoteIndex % philosopherIcons.length];
    quoteImg.style.display = 'block';

    // 4. 운세 생성 및 이름 추출
    const fortuneIndex = Math.floor(Math.random() * zodiacFortunes.length);
    const fullFortune = zodiacFortunes[fortuneIndex];
    const zodiacOnly = fullFortune.split(':')[0].trim();
    fortuneDisplay.textContent = fullFortune;
    fortuneName.textContent = zodiacOnly;
    fortuneImg.src = zodiacIcons[fortuneIndex % zodiacIcons.length];
    fortuneImg.style.display = 'block';

    // 5. 애니메이션 적용을 위한 지연 실행
    setTimeout(() => {
        quoteImg.classList.add('show');
        fortuneImg.classList.add('show');
    }, 50);
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

// Formspree AJAX handle
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = "문의가 성공적으로 전송되었습니다. 감사합니다!";
                formStatus.className = "success";
                contactForm.reset();
            } else {
                const result = await response.json();
                if (result.errors) {
                    formStatus.textContent = result.errors.map(error => error.message).join(", ");
                } else {
                    formStatus.textContent = "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
                }
                formStatus.className = "error";
            }
        } catch (error) {
            formStatus.textContent = "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.";
            formStatus.className = "error";
        }
    });
}
