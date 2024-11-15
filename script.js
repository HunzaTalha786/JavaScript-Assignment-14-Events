//EVENTS 
//Assignment # 43-48

// 1. Show an alert box on click on a link.
function showAlert(){
alert('Hello! How can I help you ?');
}


// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user

function showImageAltert(){
    alert('Thanks for purchasing a phone from us !')
}

// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.


function deleteData(){
    let dataRow =document.getElementsByClassName('row')[1];
    dataRow.innerHTML="";
}
function delet(){
    let row =document.getElementsByClassName('row')[2];
    row.innerHTML="";
}
    function deleteRow(){ 
    let data=document.getElementsByClassName('row')[3];
    data.innerHTML="";
    }
    function row(){
        let delet =document.getElementsByClassName('row')[4];
        delet.innerHTML=""; 
    }
   
//     4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

let counter = 0;
const count =  document.getElementById("counter");
function increaseCounter() {
    counter++;
  count .innerText = counter;  
}

function decreaseCounter() {
    counter--;
    count.innerText = counter;  
}

