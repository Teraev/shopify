const music = [
    {
        id : 1,
        name: "Candy Shop",
        url: "./mp3/50 Cent feat. Olivia-Candy Shop.mp3",
        artist: "50 Cent ",
        duration: "3:26",
    },
    {
        id : 2,
        name: "Blue shoes",
        url: "./mp3/А_ты_стоишь_на_берегу_в_синем_платье.mp3",
        artist: "Trofim",
        duration: "3:01",
    },
    {
        id : 3,
        name: "Спасибо за день",
        url: "./mp3/Боярский_Михаил_Спасибо_за_день,_спасибо_за_ночь,_спасибо_за.mp3",
        artist: "Mikhail",
        duration: "5:57",
    },
    {
        id : 4,
        name: "Когда ты на машине",
        url: "./mp3/Гагик_Григорян_Когда_ты_на_машине_при_деньгах.mp3",
        artist: "Gagik",
        duration: "3:37",
    },
    {
        id : 5,
        name: "Ты другому отдана",
        url: "./mp3/Неизвестен - Ты другому отдана!.mp3",
        artist: "Magamet Dzibov",
        duration: "3:38",
    },
    {
        id : 6,
        name: "Осень",
        url: "./mp3/Осень.mp3",
        artist: "Guseyin Manapov",
        duration: "3:00",
    },
    {
        id : 7,
        name: "Сердце как лед",
        url: "./mp3/Рейсан_Магомедкеримов_Сердце_как_лёд.mp3",
        artist: "Reysan",
        duration: "3:20",
    },
    {
        id : 8,
        name: "The G.O.A.T",
        url: "./mp3/Eminem-Respect The G.O.A.T.mp3",
        artist: "Eminem",
        duration: "4:07",
    },
    {
        id : 9,
        name: " Айбала",
        url: "./mp3/Ramil, Ханза-Айбала.mp3",
        artist: "Ramil",
        duration: "3:13",
    }
]


   


const table = document.createElement('table');

const tr = document.createElement('tr');

const th1 = document.createElement('th');
th1.innerHTML = 'ID';
tr.append(th1);

const th2 = document.createElement('th');
th2.innerHTML = 'Name';
tr.append(th2);

const th3 = document.createElement('th');
th3.innerHTML = 'Artist';
tr.append(th3);

const th4 = document.createElement('th');
th4.innerHTML = "add"
tr.append(th4);

const th5 = document.createElement('th');
th5.innerHTML = 'Time';
tr.append(th5);

table.append(tr);

music.forEach((song) => {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td' );
    td1.setAttribute('data-track', song.url);
    td1.innerHTML = song.id;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.setAttribute('data-track', song.url);
    td2.innerHTML = song.name;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.setAttribute('data-track', song.url);
    td3.innerHTML = song.artist;
    tr.appendChild(td3);

  

    const td4 = document.createElement('td');
    td4.setAttribute('data-track', song.url);
    td4.classList.add('add');
    const img = document.createElement('img');
    img.src = './img/plus.png';
    img.alt = '';

    
    td4.append(img);
    tr.append(td4);

    table.append(tr);

    const td5 = document.createElement('td');
    td5.setAttribute('data-track', song.url);
    td5.innerHTML = song.duration;
    tr.append(td5);
});

document.body.append(table);


const audio = document.querySelector('audio')
const tds = document.querySelectorAll('td');

tds.forEach((td => {
    td.onclick = () => {
       audio.src = td.dataset.track
       audio.play()
    }
}))


let favorite = {}

