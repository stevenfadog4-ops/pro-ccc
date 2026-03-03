const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const whiteModeBtn = document.getElementById('white-mode');
const blackModeBtn = document.getElementById('black-mode');
const quoteDisplay = document.getElementById('quote-display');
const fortuneDisplay = document.getElementById('fortune-display');
const quoteImg = document.getElementById('quote-img');
const fortuneImg = document.getElementById('fortune-img');

// 20가지 철학자 명언 및 이미지
const philosopherQuotes = [
    { text: "소크라테스: 너 자신을 알라.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/220px-Socrates_Louvre.jpg" },
    { text: "아리스토텔레스: 인내는 쓰고 그 열매는 달다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg" },
    { text: "플라톤: 행복은 마음의 준비에 달려 있다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/220px-Plato_Pio-Clemetino_Inv305.jpg" },
    { text: "니체: 나를 죽이지 못하는 것은 나를 더 강하게 만든다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187c.jpg/225px-Nietzsche187c.jpg" },
    { text: "데카르트: 나는 생각한다, 고로 나는 존재한다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/220px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg" },
    { text: "칸트: 할 일을 하라.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Immanuel_Kant_3.jpg/220px-Immanuel_Kant_3.jpg" },
    { text: "스피노자: 오늘 한 그루의 사과나무를 심겠다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Spinoza.jpg/220px-Spinoza.jpg" },
    { text: "세네카: 운명은 의지가 있는 자를 인도한다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Seneca_Prado.jpg/220px-Seneca_Prado.jpg" },
    { text: "마르쿠스 아우렐리우스: 인생은 우리 생각이 만드는 것이다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Marcus_Aurelius_Glyptothek_Munich_371.jpg/220px-Marcus_Aurelius_Glyptothek_Munich_371.jpg" },
    { text: "에피쿠로스: 만족은 자연스러운 부이다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Epicurus_bust2.jpg/220px-Epicurus_bust2.jpg" },
    { text: "루소: 인내는 괴롭지만 그 열매는 달콤하다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/220px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg" },
    { text: "볼테르: 당신이 하는 일에 열중하라.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire_%28ca._1724-1725%29.jpg/220px-Atelier_de_Nicolas_de_Largilli%C3%A8re%2C_portrait_de_Voltaire_%28ca._1724-1725%29.jpg" },
    { text: "쇼펜하우어: 모든 불행의 시작은 남과의 비교다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg/220px-Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg" },
    { text: "헤겔: 마음의 문을 여는 손잡이는 안쪽에 있다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Hegel_by_Schlesinger_1831.jpg/220px-Hegel_by_Schlesinger_1831.jpg" },
    { text: "파스칼: 인간은 생각하는 갈대다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blaise_Pascal_Versailles.jpg/220px-Blaise_Pascal_Versailles.jpg" },
    { text: "베이컨: 아는 것이 힘이다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Francis_Bacon%2C_Viscount_St_Alban_from_NPG_%282%29.jpg/220px-Francis_Bacon%2C_Viscount_St_Alban_from_NPG_%282%29.jpg" },
    { text: "홉스: 인간은 인간에게 늑대다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Thomas_Hobbes_%28portrait_by_John_Michael_Wright%29.jpg/220px-Thomas_Hobbes_%28portrait_by_John_Michael_Wright%29.jpg" },
    { text: "로크: 지식은 경험에서 나온다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JohnLocke.png/220px-JohnLocke.png" },
    { text: "사르트르: 인생은 Choice다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sartre_1967_cropped.jpg/220px-Sartre_1967_cropped.jpg" },
    { text: "키에르케고르: 삶은 경험해야 할 실재다.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/S%C3%B8ren_Kierkegaard_%281813-1855%29_-_Lithograph.jpg/220px-S%C3%B8ren_Kierkegaard_%281813-1855%29_-_Lithograph.jpg" }
];

// 12가지 십이지신 운세 및 이미지 (오픈 라이선스 이미지 활용)
const zodiacFortunes = [
    { text: "쥐띠: 적극적으로 움직이면 행운이 따릅니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396657.png" },
    { text: "소띠: 끈기 있게 기다리면 좋은 소식이 옵니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396677.png" },
    { text: "호랑이띠: 용기 있는 도전이 성공을 부릅니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396668.png" },
    { text: "토끼띠: 주변 사람과 협력하면 일이 잘 풀립니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396675.png" },
    { text: "용띠: 큰 포부를 가지면 목표를 달성합니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396664.png" },
    { text: "뱀띠: 신중하게 판단하면 실수를 피할 수 있습니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396681.png" },
    { text: "말띠: 활발한 활동이 에너지를 가져다줍니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396662.png" },
    { text: "양띠: 배려하는 마음이 복을 가져옵니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396660.png" },
    { text: "원숭이띠: 지혜롭게 대처하면 위기를 넘깁니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396683.png" },
    { text: "닭띠: 성실한 태도가 신뢰를 쌓게 합니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396666.png" },
    { text: "개띠: 정직한 행동이 행운의 열쇠입니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396658.png" },
    { text: "돼지띠: 넉넉한 마음이 풍요를 부릅니다.", img: "https://cdn-icons-png.flaticon.com/512/2396/2396670.png" }
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

    // 랜덤 명언 선택 및 이미지 표시
    const randomQuote = philosopherQuotes[Math.floor(Math.random() * philosopherQuotes.length)];
    quoteDisplay.textContent = randomQuote.text;
    quoteImg.src = randomQuote.img;
    quoteImg.alt = randomQuote.text.split(':')[0];
    quoteImg.style.display = 'block';

    // 랜덤 운세 선택 및 이미지 표시
    const randomFortune = zodiacFortunes[Math.floor(Math.random() * zodiacFortunes.length)];
    fortuneDisplay.textContent = randomFortune.text;
    fortuneImg.src = randomFortune.img;
    fortuneImg.alt = randomFortune.text.split(':')[0];
    fortuneImg.style.display = 'block';
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
