const btnclick = document.querySelector(".btn-ajout")
const input =  document.querySelector(".input-list")
const ul = document.querySelector('.ul-list')
const footer =  document.querySelector("footer")

btnclick.addEventListener('click', () => {

    if (input.value === "") {
        return
    }

    const li = document.createElement('li')
    li.textContent = input.value
    
    const btnDelete = document.createElement('button')
    btnDelete.textContent = "Supprimer"
    
    li.appendChild(btnDelete)
    ul.appendChild(li)
    
    input.value = ""
    
    btnDelete.addEventListener('click', () => {
        li.remove()
    })

    li.addEventListener('click', () => {
        li.style.textDecoration = "line-through"
    })

    footer.textContent = "compteur de taches : " + ul.querySelectorAll('li').length
}) 