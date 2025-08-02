const child = document.getElementById("child");
const copy = document.querySelectorAll(".Task")[0].cloneNode(true);
let numberOfTask = 1;
let taskNew;
let taskNumberNew;
let CompletedTask;
let tasks ={
    0: document.getElementsByClassName(".Task")[0],

   addbtn: document.getElementById("addTask"),
   add: function add(){
tasks[numberOfTask] = copy.cloneNode(true);
child.appendChild(tasks[numberOfTask]);
tasks[numberOfTask].setAttribute("Id", numberOfTask);
taskNew = document.getElementById(numberOfTask);
taskNumberNew = taskNew.querySelectorAll(".TaskNumber")[0];
taskNumberNew.textContent = numberOfTask + 1;
numberOfTask++;


   },
//Adding Reset
    resetButton: document.getElementById("resetTask"),
reset: ()=>{
    for(let i = numberOfTask-1; i>=1; i--){
    child.removeChild(document.getElementById(i));
    document.querySelectorAll(".Task .secondaryText")[0].textContent = "Add your Task Here"
    if(i==1){ numberOfTask = 1; }
}
},

}
tasks.addbtn.addEventListener("click", tasks.add);
tasks.resetButton.addEventListener("click", tasks.reset);


