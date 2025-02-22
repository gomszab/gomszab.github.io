const createPopupContainer = () => {
    const popupContainer = document.createElement('div');
    popupContainer.id= 'popup-container';
    popupContainer.style.display = 'none'; 
    const popupImage = document.createElement('img');
    popupContainer.appendChild(popupImage);
    popupContainer.addEventListener('click', (e) => {
        let popup = e.target;
        if(popup !== popupContainer){
            popup = popup.parentElement;
        }    
        popup.style.display = 'none';
    });
    document.body.appendChild(popupContainer);
}

const generateDomFromTask = (task) => {
    
    const container = document.createElement("div");
    container.classList.add('tile');
    const tileHeader = document.createElement('div');
    tileHeader.classList.add('title');
    const title = document.createElement('span');
    title.innerHTML = task.headerTitle;
    tileHeader.appendChild(title);
    container.appendChild(tileHeader);
    const image = document.createElement('img');
    image.src= task.imgsrc;
    image.width=200;
    image.height=200;
    image.addEventListener('click', () => {
        const popupContainer = document.getElementById('popup-container')
        const popupImg = popupContainer.querySelector('img');
        popupImg.src = image.src;
        popupContainer.style.display = 'flex'; 
    });
    container.appendChild(image);
    const tileBody = document.createElement('div');
    tileBody.classList.add('tilebody');
    const help = document.createElement('div');
    help.innerHTML = 'Segítség'
    task.helpUrls.forEach(element => {
        help.appendChild(document.createElement('br'));
        const url = document.createElement('a');
        url.innerHTML = element.title;
        url.href = element.url;
        help.appendChild(url);
    });
    container.appendChild(tileBody);
    tileBody.appendChild(help)
    tileBody.appendChild(document.createElement('br'));

    
    if(task.tasks){
        const listhead = document.createElement('span');
        listhead.innerHTML='Feladatok:'
        tileBody.appendChild(listhead)
        const listEl = document.createElement('ul');
        task.tasks.map(subtask => {
            const listItem = document.createElement('li');
            listItem.innerHTML = subtask;
            return listItem
        }).forEach(listitem => {
            listEl.appendChild(listitem);
        })
        container.appendChild(listEl);
    }
    

    
    document.getElementById('task-container').appendChild(container);
}

const tasks = [
    {
        headerTitle: 'Számológép',
        imgsrc: './calculator.png',
        helpUrls: [{
            title: 'Tutorial',
            url: 'https://www.youtube.com/watch?v=I5kj-YsmWjM'
        },
    {
        title: 'Tutorial2',
        url: 'https://www.youtube.com/watch?v=QS6Y0ezhyCs'
    }],
        tasks: [
            'Tutorial elvégzése',
            'Kód felkommentezése',
            'css átalakítása pl.: színezés, formák, elhelyezkedés',
            'Új funkció hozzáadása: négyzetreemelés',
            'kód duplikáció csökkentése a html-en'
        ]
    },
    {
        headerTitle: 'Blokk',
        imgsrc: './blokk.png',
        helpUrls: [{
            title: 'Tutorial',
            url: 'https://www.youtube.com/watch?v=IGBRYTpgyg4'},
            {
                title: 'Példablokk szövege',
                url: 'https://pastebin.com/PkDeEkDh'}
            ],
        tasks: [
            'Tutorial elvégzése',
            'kód felkommentezése',
            'Képen látható blokk megformázása (vagy egy blokk hasonló formázása)',
            'Tipp: ha nem látszik a kép akkor jobb klikk > kép megnyitás új lapon'

        ]
    },
    {
        headerTitle: 'Felokosított táblázat',
        imgsrc: './smarttable.png',
        helpUrls: [{
            title: 'Tutorial sort',
            url: 'https://www.youtube.com/watch?v=8SL_hM1a0yo'
            },
            {
                title: 'Tutorial filter',
                url: 'https://www.youtube.com/watch?v=qp7PdguA0Vg'
            },
            {
                title: 'Táblázat forráskód',
                url: "https://pastebin.com/ebzSmYth"
            }
            ],
        tasks: [
            'Tutorial elvégzése',
            'kód felkommentezése',
            'Képen látható táblázat megszerkesztése',
            'Természetesen nem kötelező a tutorialban bemutatott selectorok használata, ha javascriptben generáljuk a táblázatokat',
            'Működés: A Year field úgy keres, hogy azt az elemet jeleníti meg, amelynek a start és end közé esik a yearbe írt szám. Csak az első két oszlop alapján rendezhető a táblázat'
        ]
    },
    {
        headerTitle: 'Memória játék',
        imgsrc: './memory.png',
        helpUrls: [
            {
                title: 'Tutorial memóriajáték',
                url: 'https://www.youtube.com/watch?v=xWdkt6KSirw'
            },
            {
                title: 'Történelem adatok',
                url: 'https://pastebin.com/usS3hTzX'
            },],
        tasks: [
            'Tutorial elvégzése',
            'kód felkommentezése',
            'Saját szöveg (esetleg szöveg/kép) alapú, vagy a csatolt forrás alapján memóriajáték elkészítése'
        ]
    },
    {
        headerTitle: 'Számrendszer konverzió',
        imgsrc: './konvertalo.png',
        helpUrls: [
            {
                title: 'Számrendszerekről',
                url: 'https://www.youtube.com/watch?v=DZJHIzbqQ3Y'
            },],
        tasks: [
            'Az első input field értéke 1 és 10000 között, a második 2 és 16 között lehet, ellenkező esetben hibaüzenetet jelenítünk meg',
            'Osztály(ok) létrehozása',
            'Saját htmlelement(ek) létrehozása',
            'Kattintás esetén legenerálódik a táblázat, ha az inputok helyes értéket tartalmaznak. A táblázat megjelenítéséért az osztályunk felel'
        ]
    },
    {
        headerTitle: 'Szám különböző számrendszerekben',
        imgsrc: './szamrendszerek.png',
        helpUrls: [],
        tasks: [
            'Az input 0 és 255 közötti érték lehet csak, ellenkező esetben hibaüzenet',
            'Osztály(ok) létrehozása',
            'Saját htmlelement(ek) létrehozása',
            'Kattintás esetén legenerálódik a táblázat, ha az inputok helyes értéket tartalmaznak. A táblázat megjelenítéséért az osztályunk felel',
            'Bónusz: 3 és 9es számrendszerben is legenerálunk egy hasonló táblázatot',
        ]
    },
    {
        headerTitle: 'Egyiptomi szorzás',
        imgsrc: './egyiptomi_szorzas.png',
        helpUrls: [
            {
                title: 'Egyiptomi szorzás magyarázat',
                url: 'https://www.youtube.com/watch?v=yHVq0g6XWes'
            },
            {
                title: 'Magyarazat a tablázathoz',
                url: 'https://gist.github.com/gomszab/ec1811f36edda89bcb446a6596188da0'
            }
        ],
        tasks: [
            'Az inputok 2 és 400 közötti értékek lehetnek csak, ellenkező esetben hibaüzenet',
            'Osztály(ok) létrehozása',
            'Saját htmlelement(ek) létrehozása',
            'Kattintás esetén legenerálódik a táblázat, ha az inputok helyes értéket tartalmaznak. A táblázat megjelenítéséért az osztályunk felel',
        ]
    }
]


const practice = [
    {
        headerTitle: 'Összegzés',
        imgsrc: './osszegzes.png',
        helpUrls: [{
            title: 'leirás, feladatok',
            url: 'https://gist.github.com/gomszab/1ea5d547713aeef09fa4654193648573'
            },
            {
                title: 'adatfájl',
                url: 'https://gist.github.com/gomszab/28f0585ab8b0ed1d2036757851807270'
            },],
    },
    {
        headerTitle: 'Rendezés',
        imgsrc: './rendezes.png',
        helpUrls: [{
            title: 'leirás, feladatok',
            url: 'https://gist.github.com/gomszab/925eed54149057d4eafa82218fb6fc0c'
            },
            {
                title: 'adatfájl',
                url: 'https://gist.github.com/gomszab/28f0585ab8b0ed1d2036757851807270'
            },],
    },
    {
        headerTitle: 'Szűrés',
        imgsrc: './szuro.png',
        helpUrls: [{
            title: 'leirás, feladatok',
            url: 'https://gist.github.com/gomszab/4f8894c9f1e6008bf1f067de88a4e1c2'
            },
            {
                title: 'adatfájl',
                url: 'https://gist.github.com/gomszab/28f0585ab8b0ed1d2036757851807270'
            },],
    },
    {
        headerTitle: 'Számlálás',
        imgsrc: './szamlalas.png',
        helpUrls: [{
            title: 'leirás, feladatok',
            url: 'https://gist.github.com/gomszab/c80bd587c1b7ece36398a87c1acb52c5'
            },
            {
                title: 'adatfájl',
                url: 'https://gist.github.com/gomszab/28f0585ab8b0ed1d2036757851807270'
            },],
    },
    {
        headerTitle: 'Összes',
        imgsrc: './osszes.png',
        helpUrls: [{
            title: 'leirás, feladatok',
            url: 'https://gist.github.com/gomszab/af695f5dbee9cb71a08ca8f486eabf80'
            },
            {
                title: 'adatfájl',
                url: 'https://gist.github.com/gomszab/28f0585ab8b0ed1d2036757851807270'
            },],
    },
]

function addActiveClasstoHeader(htmlElement){
    const activeElement = document.getElementById('navbar').querySelector('.active');
    if(activeElement){
        activeElement.classList.remove('active');
    }
    
    htmlElement.classList.add('active');
}
function clearMain(){
    const mainTag = document.getElementsByTagName('main').item(0);
    while(mainTag.firstChild){
        mainTag.removeChild(mainTag.firstChild);
    }
}

function onClickCbDecorator(callback){
    return (e) => {
        if(!e.currentTarget.classList.contains('active')){
            addActiveClasstoHeader(e.currentTarget);  
            clearMain();
            callback(e);
        }
    }
}

function generateDomFromSeries(serie) {
    const serieContainer = document.createElement('div');
    serieContainer.classList.add('series-card');
    const serieTitle = document.createElement('a');
    serieTitle.innerHTML = serie.title;
    serieTitle.href= serie.url;
    serieTitle.target='_blank';
    serieContainer.appendChild(serieTitle);
    document.getElementById('series-container').appendChild(serieContainer);
}

const videoSeries = [
    {
        title:'html',
        url:'https://www.youtube.com/watch?v=HGTJBPNC-Gw'
    },
    {
        title:'css',
        url:'https://www.youtube.com/watch?v=OXGznpKZ_sA'
    },
    {
        title:'js (magyar)',
        url:'https://www.youtube.com/watch?v=DMZry55V-kg&list=PLVyg_FEqWfkIvEQvgucUT6nQvQt4hQCgX'
    },
    {
        title:'js',
        url:'https://www.youtube.com/playlist?list=PLOmL3sL-afbRVTvedkIrQcDwg2UY0JGTF'
    },
    {
        title: 'Flexbox béka',
        url: 'https://flexboxfroggy.com/'
    },
    {
        title: 'Git branching',
        url: 'https://learngitbranching.js.org/'
    },

]

const menuItemList=[{
    id: 'allin',
    title: 'Átfogó videó sorozatok/játékok',
    onclickCb: onClickCbDecorator((e) => {
        const seriesContainer = document.createElement('div');
        
        seriesContainer.id = 'series-container';
        document.body.getElementsByTagName('main').item(0).appendChild(seriesContainer);
        videoSeries.forEach(generateDomFromSeries);
    }),
    isActive: true
},
{
    id: 'tasks',
    title: 'Feladatocskák',
    onclickCb: onClickCbDecorator((e) => {
        const taskContainer = document.createElement('div');
        taskContainer.id = 'task-container';
        document.body.getElementsByTagName('main').item(0).appendChild(taskContainer);
        tasks.forEach(generateDomFromTask);
    })
},
{
    id: 'practice',
    title: 'Gyakorlás',
    onclickCb: onClickCbDecorator((e) => {
        const taskContainer = document.createElement('div');
        taskContainer.id = 'task-container';
        document.body.getElementsByTagName('main').item(0).appendChild(taskContainer);
        practice.forEach(generateDomFromTask);
    })
},]



function createHeader(){
    const header = document.getElementById('navbar');
    const list = document.createElement('ul');
    menuItemList.forEach(element => {
        const listElement = document.createElement('li');
        listElement.classList.add('burning-text');
        listElement.id = element.id;
        listElement.innerHTML = `${element.title}`;
        listElement.addEventListener('click', element.onclickCb);
        if(element.isActive){
            listElement.click();
        }
        list.appendChild(listElement);
    })
    header.appendChild(list);
}

createHeader();
createPopupContainer();