var val=document.querySelector('.ip');
function clearInput()
{
    val.value=' ';
}
function calculate(){
try{
    val.value=eval(val.value);
}
catch (error)
{
      val.value='Error';
}
}
var adds=document.querySelectorAll('.add');
adds.forEach((add) => {
    add.addEventListener('click', (event) => {
        val.value += event.target.textContent; 
    });
});

var mini=document.querySelector('.mini');
var closee=document.querySelector('.closee');


const { ipcRenderer } = require('electron');

mini.addEventListener('click', () => {
    ipcRenderer.send('minimize-window'); 
});

closee.addEventListener('click', () => {
    ipcRenderer.send('close-window'); 
});

