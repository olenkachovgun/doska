//шахматная доска, с помощью js
let board = document.createElement('div');//рамка доски
board.classList.add('main_board');//присваивания класса для елемента
//сделать одну ячейку выбранную, другим цветом а остальные заблокировать и сделать другим цветом:
for(el of columns){
    el.addEventListener('click',(event)=>{
        for(let i=0; i<columns.length; i++){
            columns[i].classList.remove('grey');
            columns[i].classList.remove('pink');
            if(columns[i]==event.currentTarget){
                event.currentTarget.classList.add('pink');
                continue;
            }
            columns[i].setAttribute('tabindex',i)
            columns[i].classList.add('grey');
        }
    });
    el.addEventListener('blur', (event)=>{
        event.currentTarget.classList.remove('grey');
        event.currentTarget.classList.remove('pink');
    });
}

function writeLineBoad(){
    let div;
    let arr=['A','B','C','D','E','F','G','H'];
    let str;
    for(let i=0;i<=7;i++){
        let str1 =arr[i];
        for(let j=0; j<=7;j++){
            div = document.createElement('div');
            str = str1+(j+1);
            if(i%2==0){
                if(j%2==0){
                    div.classList.add('black_div');
                    div.setAttribute('id',str);
                }else{
                    div.classList.add('white_div');
                    div.setAttribute('id',str)
                }     
                }else{
                    if(j%2==0){
                    div.classList.add('white_div');
                    div.setAttribute('id',str) 
                }else{
                    div.classList.add('black_div');
                    div.setAttribute('id',str);
                }
            }
            board.appendChild(div);
        }
    }
}

writeLineBoad(div);
/*блок кода для вставки картинки на доску 
let queen_black=document.createElement('img');//создаем картинку
queen_black.classList.add('queen_black');
queen_black.style.setAttribute('src','queen.jpg');//вставляем картинку
board.childNodes[1].appendChild('queen_black');
конец вставки картинки */
let script = document.getElementsByTagName('script')[0];
document.body.insertBefore(board,script);


/* Старый вариант решения доски
let brown = document.createElement('div');
let script = document.getElementsByTagName('script')[0];
brown.style.width='100px';
brown.style.height='100px';
brown.style.background='brown';
brown.style.float ='left';

let yellow = brown.cloneNode(true);

yellow.style.background='yellow';
let arr=[];
let arr1=[];

for (let i=0; i<5; i++){
    for(let j=0; j<8; f++){}//цыкл отресует новые строки
    arr[i]=brown.cloneNode(true);
    arr1[i]=yellow.cloneNode(true)

     document.body.insertBefore(arr[i],script);
    document.body.insertBefore(arr1[i],script);   
   
}
*/