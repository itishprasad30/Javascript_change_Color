const colorBtn =document.querySelector('.colorbtn');
const bodyBcg=document.querySelector('body');

const colors=['yellow','red','green','#3b5998','blue','silver','pink','purple','darkSlateGray'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    bodyBcg.style.backgroundColor='green';
    let random=Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor=colors[random];
}