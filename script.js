var a = document.getElementById("addpopup")
var b = document.querySelector(".overlay")
var c = document.querySelector(".popupbox")
// a.addEventListener("click",function(){b.style.display="block"
//     c.style.display="block"})
function change()
{
    b.style.display="block"
    c.style.display="block"
}
var cancelbttn=document.getElementById("cancel")
cancelbttn.addEventListener("click",function(event){
    event.preventDefault()
    b.style.display="none"
    c.style.display="none"
})
var book=document.querySelector(".container")
var addbooks=document.getElementById("Addbook")
var bookname=document.getElementById("booktitleinput")
var bookauthor=document.getElementById("bookauthorinput")
var bookdescript=document.getElementById("ShortDescritioninput")
addbooks.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
                    <h5>${bookauthor.value}</h5>
                    <p>${bookdescript.value}</p>
                    <button onclick="deletebook(event)">Delete</button>
                    `
    book.append(div)
    bookname.value = ""
    bookauthor.value = ""
    bookdescript.value = ""
    b.style.display="none"
    c.style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}