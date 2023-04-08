const  puzzleBoard=document.querySelector('#puzzle')
let solveButton= document.getElementById('#solve-button')
const solutionDisplay=document.querySelector("#solution")
const square=81
const submission=[]
for(let i=0;i<square;i++){
   const inputElement= document.createElement('input')
   inputElement.setAttribute('type','number')
   inputElement.setAttribute('min',1)
   inputElement.setAttribute('max',9)
   if(
        ((i %9==0||(i%9==1)||(i%9==2)) && i<21)||
        ((i %9==6||(i%9==7)||(i%9==8) )&& i<27)||
        ((i %9==3||(i%9==4)||(i%9==5)) &&(i>27 && i<53))||
        ((i %9==0||(i%9==1)||(i%9==2) )&& i>53)||
        ((i %9==6||(i%9==7)||(i%9==8) )&& i>53)
        
        ){
    inputElement.classList.add('odd-section')
   }
   puzzleBoard.appendChild(inputElement)

}

function joinValue(){
    const inputs=   document.querySelectorAll('input')
    inputs.forEach(input=>{
        if(input.value){
            submission.push(input.value)
        }else{
            submission.push('.')
        }
    })
    console.log(submission)
}

console.log(submission)
function solve(){
    joinValue();
  const data=  submission.join('')
  console.log('data',data);
    //paste API code from rapidapi.com/sosier/api/solve-sudoku/
    puzzle:data;
}
// joinValue();

solveButton.addEventListener('click',solve)
