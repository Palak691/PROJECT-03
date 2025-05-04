let btn = document.querySelector("button");
let input = document.querySelector("input");
let listContainer = document.querySelector("#list-container");

btn.addEventListener("click",()=>{
    addTask()
})

function addTask(){
    if(input.value === ''){
        alert("Enter Valid Text!");

    }else{
        li = document.createElement("li");
        li.innerText = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; //cross sign
        li.appendChild(span)

    }
    input.value = ""
    saveData();
}

listContainer.addEventListener("click", (evt)=>{
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("checked");
        // e.target tells you which exact HTML element was clicked (like an LI or SPAN).
    }
    else if(evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
    }
},false);

// If you click on an LI (a list item), it toggles the "checked" class
//  on that LI.
// (Meaning: if the class is not there, it adds it; if it's there, it removes it. 
// Useful for marking tasks as completed.)

// If you click on a SPAN (likely a "delete" button inside the list item), 
// it removes the entire parent LI (deleting that item from the list).




//to save data after fresh
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();