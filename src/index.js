document.querySelector("DOMContentLoad",()=>{
  const text =document.querySelector("input");
  const form = document.querySelector("form");
  form.addEventListener("submit",(e)=>{
e.preventDefault();
addToDo(e.target["new-task-description"].value)
form.reset()
  })
})
// your code here
function addToDo(){
  let li = document.createElement("li")
  let btn=document.createElement('button')
  btn.textContent="play ball"
  btn.addEventListener('click',deleteList)
  li.textContent= `${input}`
  document.querySelector("#list").appendChild(li)
  li.appendChild(btn)
}
function deleteList(e){ e.target.parentNode.remove()}