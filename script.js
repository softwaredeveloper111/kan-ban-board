

const add_new_task_btn  = document.querySelector(".add-new-task-btn")
const popup = document.querySelector(".popup");
const close_icon = document.querySelector('.close-icon')


add_new_task_btn.addEventListener("click",(e)=>{
    popup.style.display = 'flex';
})



close_icon.addEventListener("click",(e)=>{
    popup.style.display = 'none';
});



// -----------draging item js -----------------


const allTasks = document.querySelectorAll(".data")
const allSections = document.querySelectorAll(".section")




allTasks.forEach((task,index)=>{
    task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
})


allSections.forEach((section,index)=>{
  section.addEventListener("dragover",(e)=>{
    e.preventDefault();
    const dragItem = document.querySelector(".dragging");
    section.append(dragItem)
  })
})