const backgroundImgs = [ // IMAGES 폴더 배경 이미지
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg'
]

const background = Math.floor(Math.random() * backgroundImgs.length);   // 배경이미지 개수 중 랜덤 index 생성

const bg = document.querySelector('body');

bg.style.backgroundImage = `url(images/${backgroundImgs[background]})`; // BODY 배경 이미지 스타일
bg.style.backgroundRepeat = 'no-repeat';
bg.style.backgroundPosition = 'center';
bg.style.backgroundSize = 'cover';

