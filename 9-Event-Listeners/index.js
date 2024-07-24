document.querySelector('button').addEventListener('click', function(){
    alert('Você clicou no botão!')
})

const mouseHandler = () => {
    document.querySelector('h1').classList.toggle('header')
}

document.querySelector('h1').addEventListener('mouseenter',mouseHandler);
document.querySelector('h1').addEventListener('mouseout',mouseHandler);

document.querySelector('input').addEventListener('keydown',  function(event){
    console.log(event.target.value);
})
