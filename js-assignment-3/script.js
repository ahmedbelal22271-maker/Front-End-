const boldElement = document.createElement("b")
const paragraph = document.createElement("p")
paragraph.style.cssText = "font-size:60px;"
const node1 = document.createTextNode("DOM Manipulation Task")

boldElement.appendChild(paragraph)
paragraph.appendChild(node1)
document.body.appendChild(boldElement)

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")

const node2 = document.createTextNode("Updated Box 1")
const node3 = document.createTextNode("Updated Box 2")
const node4 = document.createTextNode("Updated Box 3")

div1.appendChild(node2)
div2.appendChild(node3)
div3.appendChild(node4)

div1.style.cssText = " background-color:#56fcb1; padding:25px;border:5px solid; border-width:thick; border-color:blue; margin:20px;"
div2.style.cssText = " background-color:#6adeeb; padding:25px;border:5px solid; border-width:thick; border-color:blue; margin:20px;"
div3.style.cssText = " background-color:#6adeeb; padding:25px;border:5px solid; border-width:thick; border-color:blue; margin:20px;"

document.body.appendChild(div1)
document.body.appendChild(div2)
document.body.appendChild(div3)

const bulletedList = document.createElement("ul")
const Item2 = document.createElement("li")
const Item3 = document.createElement("li")

Item2.innerText = "Item 2"
Item3.innerText = "Item 3"

bulletedList.appendChild(Item2)
bulletedList.appendChild(Item3)

document.body.appendChild(bulletedList)