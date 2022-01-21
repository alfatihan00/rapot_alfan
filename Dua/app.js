


// Selector




const input = document.getElementsByTagName("input")
const button = document.querySelector(".button")
const ul = document.querySelector("ul")
const siswa_izin = document.getElementsByClassName("izin")
const siswa_alfa = document.getElementsByClassName("alfa")
const siswa_hadir = document.getElementsByClassName("hadir")

// Event Listeners

button.addEventListener("click", addSiswa)




// Function


function addSiswa (event){

    
    
    
    
    
    
    
    // Buat li
    
    const li = document.createElement("li")


    // Buat Container
    
    const container = document.createElement("div")
    container.classList.add("container2")
    













    // Buat Nama
    
    const nama = document.createElement("div")
    nama.classList.add("nama_absen", "gelap")
    

    const h3 = document.createElement("h3")
    h3.innerText = "Nama: " + input[0].value
    







    // Kelas
    const kelas = document.createElement("div")
    kelas.classList.add("class", "gelap")

    const h3kelas = document.createElement("h3")
    h3kelas.innerText = "Kelas: " + input[1].value

    kelas.appendChild(h3kelas)




    // Izin

    const izin = document.createElement("div")
    izin.classList.add("izin", "gelap")

    const h3izin = document.createElement("h3")
    h3izin.innerText = "Izin"

    izin.appendChild(h3izin)


    // Alfa

    const alfa = document.createElement("div")
    alfa.classList.add("alfa", "gelap")

    const h3alfa = document.createElement("h3")
    h3alfa.innerText = "Alfa"

    alfa.appendChild(h3alfa)


    // Hadir

    const hadir = document.createElement("div")
    hadir.classList.add("hadir", "gelap")

    const h3hadir = document.createElement("h3")
    h3hadir.innerText = "Hadir"

    hadir.appendChild(h3hadir)









    // Append container

    container.appendChild(kelas)
    container.appendChild(izin)
    container.appendChild(alfa)
    container.appendChild(hadir)

    




    // Append
    nama.appendChild(h3);
    
    container.appendChild(nama)

    li.appendChild(container)

    ul.appendChild(li)



    // Kosongkan value

    input[0].value = ""
    input[1].value = ""

}












// Alfa Hadir Izin

ul.addEventListener("click", addColor)

function addColor(e){

    // console.log(e.target)
    
    
    
    
    
    const item = e.target
    
    if (item.classList[0] === "izin"){
        item.classList.toggle("yellow")
    }


    if (item.classList[0] === "alfa"){
        item.classList.toggle("red")

    }


    if (item.classList[0] === "hadir"){
        item.classList.toggle("green")
    }




}






