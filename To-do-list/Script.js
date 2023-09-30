
// Create Varibale

const AddInput = document.getElementById('add-input');
const AddBtn = document.getElementById('add-btn');
const TaskList = document.getElementById('task-list');


//EventListeners

AddBtn.addEventListener('click', () => {
    //If Value are not "NULL" so condition true Check a new line 
    if (AddInput.value !== "") {
        // A variable is created because any value entered by the user should be stored in this variable.
        const Tasktext = AddInput.value;
        // For the create Element in innerHtml
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                                ${Tasktext}
                                    <button class="delete-btn">Delete</button>
                                    `;
        
        TaskList.appendChild(listItem);
        AddInput.value="";
    }
});


// For the Delete The listitme
TaskList.addEventListener('click',(event)=>{
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        TaskList.removeChild(listItem);
    }
});