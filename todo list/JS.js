function updateItemStatus() {
    var cbId =this.id.replace("cb_","");
    var itemText = document.getElementById("item_" + cbId);
    if(this.checked){
    itemText.className = "checked";
}
    else {
        itemText.className = "";
    }

    }

function  addNewItem(list, itemText) {  
        
        var date =new Date(); 
        var id ="" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
        var listItem = document.createElement('li')
        var checkBox = document.createElement("input");
        var deleteButton = document.createElement('input');
        checkBox.type = "checkbox";
        listItem.id = "li_" + id; 
        deleteButton.value= "удалить"
        deleteButton.type = "button";
        deleteButton.className = "button"
        var span = document.createElement("span");
        span.innerText= itemText; 
        checkBox.onclick = updateItemStatus;
        checkBox.id = "cb_" + id;
        span.id= "item_" + id;
        deleteButton.id = "item_" + id;
        span.onclick = renameItem;
        deleteButton.onclick = removeItem;
        listItem.appendChild(checkBox);
        listItem.appendChild(span);
        list.appendChild(listItem);
        listItem.appendChild(deleteButton);
      
    }

var btnNew = document.getElementById("btnAdd");
var inItemtext = document.getElementById("inItemText");
        btnNew.onclick= function(){
        var itemText = inItemtext.value;
        if(!itemText || itemText == "" || itemText == " " ){
        return false;
    }
        addNewItem(document.getElementById('todoList'), itemText);
} 

function removeItem(){
         var spanId = this.id.replace("item_","");
         document.getElementById("li_" +spanId).style.display = "none"
}
function renameItem(){
         var newText = prompt("Введите замену этому делу");
         if(!newText || newText == "" || newText == " "){
         return false;  
    }
         else{
         this.innerText = newText;
    }
}