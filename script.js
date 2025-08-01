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

}
}
tasks.addbtn.addEventListener("click", tasks.add);


