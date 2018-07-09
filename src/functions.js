import * as firebase from 'firebase'

export const data = []

export const baseUrl = window.location.origin //+ window.location.pathname

export const handleDelete = (ptitle) =>{
   const deleted = data.findIndex((e)=>e.title === ptitle)
   const div = document.getElementsByClassName("are-you-sure")[0]
   data.splice(deleted,1)
   firebase.database().ref("posts").set(JSON.stringify(data))
   div.parentNode.removeChild(div)
  window.location.assign(baseUrl +"/blog")
}
 const nevermind = () => {
   const div = document.getElementsByClassName("are-you-sure")[0]
     div.parentNode.removeChild(div)
 }

export const handleDeleteRequest = (ptitle) => {
 const div = document.createElement("div")
 div.innerHTML = `Are you sure you want to delete "${ptitle}"? This cannot be undone.</br><div id="yes-no"> <button onclick="handleDelete('${ptitle}')" class="delete">Yes</button><button onclick="nevermind()" class="no">no</button></div>`
 div.classList.add("are-you-sure")
 document.body.appendChild(div)

}

export const deleteAllContactFormEnteries = () => {
  firebase.database().ref("formSubs")
  .set(JSON.stringify([{name: 'default', email: 'default', phone: 'default', message: 'default'}]))
  window.location.assign(baseUrl +"/blog")
}
