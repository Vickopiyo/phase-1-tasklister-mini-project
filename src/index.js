
document.addEventListener("DOMContentLoaded", () => {

	let form = document.querySelector('form')
	form.addEventListener('submit', (e) =>{
	  e.preventDefault()
	  add(e.target['new-task-description'].value)
	  form.reset()
	})
  });
  
  function add(input){
	let li = document.createElement('li')
	let btn = document.createElement('button')
	btn.textContent = 'x'
	btn.addEventListener('click', deleteList)
	li.textContent = `${input}  `
	document.querySelector('#list').appendChild(li)
	li.appendChild(btn)
	
  }
  
  function deleteList(e){
	e.target.parentNode.remove()
  }