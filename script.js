
var todo = document.getElementById("todo");
var add = document.getElementById("add");
var deleteall = document.getElementById("delete");
var todolist = document.getElementById("todolist");
var sortall = document.getElementById("sortall");


add.onclick = function () {
    var list = document.createElement("li");
    var upward = document.createElement("button");
    var downward = document.createElement("button");
    var remove = document.createElement("button");
    var checkbox = document.createElement("input")
    var span = document.createElement("span");

    //list.innerText = todo.value;
    span.innerText = todo.value;
    span.classList.add("col-md-4")
    list.className += "p - 3 mx - 4 my - 2 shadow font - weight - light d - flex justify - content - between text - info row"
    upward.innerText = "arrow_upward";
    downward.innerText = "arrow_downward";
    remove.innerText = "close";

    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("m-3")
    checkbox.classList.add("col-md-2")
   

    checkbox.onclick = function (e) {
        var spn = e.srcElement.previousSibling
        spn.classList.toggle("done");
        spn.parentNode.classList.add("donelist");
    };


    upward.classList.add("material-icons");
    downward.classList.add("material-icons");
    remove.classList.add("material-icons");

    

    upward.classList.add("upbtn");
    downward.classList.add("downbtn");
    remove.classList.add("removebtn");

    upward.classList.add("btn-outline-info");
    downward.classList.add("btn-outline-info");
    remove.classList.add("btn-outline-info");

    upward.classList.add("shadow");
    downward.classList.add("shadow");
    remove.classList.add("shadow");


    upward.classList.add("m-1");
    downward.classList.add("m-1");
    remove.classList.add("m-1");

    upward.onclick = function (event) {
        var list = event.srcElement.parentNode;
        var uplist = list.previousSibling;
        var first = todolist.firstChild;
        var last = todolist.lastChild;

        if (first == uplist) {
            list.getElementsByClassName("upbtn")[0].classList.add("hide");
            first.getElementsByClassName("upbtn")[0].classList.remove("hide");
        }

        if (last == list) {
            last.getElementsByClassName("downbtn")[0].classList.remove("hide");
            uplist.getElementsByClassName("downbtn")[0].classList.add("hide");

        }

        todolist.insertBefore(list, uplist);

    };


    downward.onclick= function (event) {
        var last = todolist.lastChild;
        var list = event.srcElement.parentNode;
        var downlist = list.nextSibling;
        var first = todolist.firstChild;

        if (last == downlist) {
            list.getElementsByClassName("downbtn")[0].classList.add("hide");
            last.getElementsByClassName("downbtn")[0].classList.remove("hide");
        }

        if (list == first) {
            first.getElementsByClassName("upbtn")[0].classList.remove("hide");
            downlist.getElementsByClassName("upbtn")[0].classList.add("hide");
        }

        todolist.insertBefore(downlist, list);

    };


    remove.onclick = function (event) {
        var list = event.srcElement.parentNode;
        list.parentNode.removeChild(list);

        var first = todolist.firstChild;
        var last = todolist.lastChild;
        if (first != null && !first.getElementsByClassName("upbtn")[0].classList.contains("hide")) {
            first.getElementsByClassName("upbtn")[0].classList.add("hide");
        }
        if (last != null && !last.getElementsByClassName("downbtn")[0].classList.contains("hide")) {
            last.getElementsByClassName("downbtn")[0].classList.add("hide")
        }

    };



    
    downward.classList.add("hide");
    var last = todolist.lastChild;
    if (last != null) {
         last.getElementsByClassName("downbtn")[0].classList.remove("hide");
      
    }

    if (todolist.firstChild == null) {
        upward.classList.add("hide");
    }

    list.appendChild(span)
    list.appendChild(checkbox)
    list.appendChild(upward)
    list.appendChild(downward)
    list.appendChild(remove)
    todolist.appendChild(list); 
  
};










deleteall.onclick = function () {
    var elements = document.getElementsByClassName("donelist");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);

    }
    var first = todolist.firstChild;
    var last = todolist.lastChild;
    if (!first.getElementsByClassName("upbtn")[0].classList.contains("hide")) {
        first.getElementsByClassName("upbtn")[0].classList.add("hide");
    }
    if (!last.getElementsByClassName("downbtn")[0].classList.contains("hide")) {
        last.getElementsByClassName("downbtn")[0].classList.add("hide")
    }
};


sortall.onclick = function () {
    console.log("sort all")
    var items = document.getElementById("todolist");
    var uplist = document.createElement("ul");
    uplist.id="todolist"
    var downlist = document.createElement("ul");
    var nodes = items.childNodes

    nodes[0].getElementsByClassName("upbtn")[0].classList.remove("hide");
    nodes[nodes.length - 1].getElementsByClassName("downbtn")[0].classList.remove("hide");

    
    while (nodes.length > 0) {
        if (nodes[0].classList.contains("donelist")) {
            downlist.appendChild(nodes[0])
        } else {
            uplist.appendChild(nodes[0]);
        }
    }

    nodes = downlist.childNodes;

    while (nodes.length > 0) {
        uplist.appendChild(nodes[0]);
    }
    uplist.firstChild.getElementsByClassName("upbtn")[0].classList.add("hide");
    uplist.lastChild.getElementsByClassName("downbtn")[0].classList.add("hide");

    var div = items.parentNode;
    div.replaceChild(uplist, items);
    todolist = uplist;
   
};