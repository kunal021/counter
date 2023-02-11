let count = 0;  
let start = document.getElementById('count');
let button = document.getElementById('btn');
//on clicking count increases
button.onclick = function counts(){
    count += 1;
    start.innerText = count;
};
    

//function to reset to 0
document.getElementById('reset-btn').addEventListener('click',() =>{
    count = 0;
    start.innerText=count;
});

// method 2 to increase count
/*button.onclick = () => {
    count += 1;
    start.innerText = count;
}*/


//function to save previous entries
let save = document.getElementById('save-btn');
let saveEl = document.getElementById('save-el');
save.onclick = function save(){
    let countStr =" " + count + " - "
    saveEl.innerText += countStr;

    //if save-btn is clicked then count = 0;
    /*count = 0;
    start.innerText = count;*/
}