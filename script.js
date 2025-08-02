const child = document.getElementById("child");
const copy = document.querySelectorAll(".Task")[0].cloneNode(true);
let numberOfTask = 1;
let taskNew;
let taskNumberNew;
let CompletedTask = 0;
let tasks ={
    0: document.getElementsByClassName(".Task")[0],

   addbtn: document.getElementById("addTask"),
   add: function add(){
tasks[numberOfTask] = copy.cloneNode(true);
child.appendChild(tasks[numberOfTask]);
tasks[numberOfTask].setAttribute("Id", numberOfTask);
tasks[numberOfTask].querySelectorAll(".buttonGreen")[0].setAttribute("ID","btg"+numberOfTask);
tasks[numberOfTask].querySelectorAll(".buttonRed")[0].setAttribute("ID", "btr"+numberOfTask);
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
    numberOfTask = 1;
    CompletedTask = 0;
    document.getElementById("tpHeaderSub").textContent = "0% Task Completed"
}
},
    markComplete: (event)=>{
        let id = event.target.offsetParent.id;
        if(id=="first"){
            id = event.target.id;
        }
        let divId = id[id.length-1];
        document.getElementById(divId).querySelectorAll(".secondaryText")[0].style ="color: #9B9B9B; text-decoration: line-through; ";

        document.getElementById(divId).querySelectorAll(".TaskNumber")[0].style ="color: #9B9B9B; text-decoration: line-through;  ";

        document.getElementById(divId).querySelectorAll(".buttonGreen")[0].setAttribute("disabled", "true");
 document.getElementById(divId).querySelectorAll(".buttonGreen")[0].style="background-color:#B1B1B1;";
 document.getElementById(divId).querySelectorAll(".buttonGreen span")[0].textContent = " Completed :)";
CompletedTask += 1;
        switch(CompletedTask){
            case 1: document.getElementById("heading").textContent = "Hell Yeah!! First Task Completed. Don't lose the pace";
                break;
            case 2: document.getElementById("heading").textContent = "Let's Goooo! Task two done";
                break;
            case 3: document.getElementById("heading").textContent = "Yay! Hatrick it is";
                break;
            case 4: document.getElementById("heading").textContent = "You are Unstoppable!";
                break;
            case numberOfTask: document.getElementById("heading").textContent = "Congratulations, You did it! You have Completed all tasks.";
                break;
        }
document.getElementById("tpHeaderSub").textContent = (CompletedTask/numberOfTask)*100 + "%  Task Completed "


    },
deleteTask: (event)=>{
     let id = event.target.offsetParent.id;
    if(id =="first"){
        id = event.target.id;
    }
    let divId= id[id.length-1];
    let element = document.getElementById(divId);
    console.log(id);
    console.log(divId);
    console.log(element);
    if(divId==="0"){
      document.getElementById("first").removeChild(element);

    }
    else{
         child.removeChild(element);
    }
    for(let i= Number(divId)+1; i<numberOfTask; i++){
        document.getElementById(i).querySelectorAll(".TaskNumber")[0].textContent = i;
    }
    numberOfTask--;
}

}
tasks.addbtn.addEventListener("click", tasks.add);
tasks.resetButton.addEventListener("click", tasks.reset);


document.getElementById("todoHeaderHead").textContent= new Date().toDateString();

