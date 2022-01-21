


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

    
    
    
    
    
    
    


    // Div Nilai


    const container3 = document.createElement("div")
    container3.classList.add("container3", "gelap")

    // Nilai

    // MTK

    const mtk = document.createElement("h4")
    mtk.classList.add("rapotmtk")
    mtk.innerText = "MTK"


    const nilaimtk = document.createElement("h4")
    nilaimtk.classList.add("nilairapotmtk")
    
    nilaimtk.innerText = input[3].value
    
    
    





    
    // Bindo
    
    
    
    const bindo = document.createElement("h4")
    bindo.classList.add("rapotbindo")
    bindo.innerText = "Bahasa Indonesia"


    const nilaibindo = document.createElement("h4")
    nilaibindo.classList.add("nilairapotbindo")
    
    nilaibindo.innerText = input[4].value
    
    




    
    
    
    // Binggris
    
    
    const binggris = document.createElement("h4")
    binggris.classList.add("rapotbinggris")
    binggris.innerText = "Bahasa Inggris"


    const nilaibinggris = document.createElement("h4")
    nilaibinggris.classList.add("nilairapotbinggris")
    
    nilaibinggris.innerText = input[5].value
    
    
    
    
    
    // IPA
    
    const ipa = document.createElement("h4")
    ipa.classList.add("rapotipa")
    ipa.innerText = "IPA"


    const nilaiipa = document.createElement("h4")
    nilaiipa.classList.add("nilairapotipa")
    
    nilaiipa.innerText = input[2].value
    
    
    
    
    
    // Nyari Rata Rata
    

    const hasil = parseInt(input[2].value) + parseInt(input[3].value) + parseInt(input[4].value) + parseInt(input[5].value)

    const hasilakhir = hasil/4





    //Rata rata 
    
    const ratarata = document.createElement("h4")
    ratarata.classList.add("ratarata")
    ratarata.innerText = "Nilai Rata Rata"


    const nilairatarata = document.createElement("h4")
    nilairatarata.classList.add("nilairatarata")
    
    nilairatarata.innerText = hasilakhir
    



    
    
    
    
    
    
    
    
    // Append
    nama.appendChild(h3);
    
    container.appendChild(nama)

    li.appendChild(container)

    ul.appendChild(li)

    li.appendChild(container3)
    






    // Append Text
    container3.appendChild(mtk)
    container3.appendChild(nilaimtk)



    container3.appendChild(bindo)
    container3.appendChild(nilaibindo)




    container3.appendChild(binggris)
    container3.appendChild(nilaibinggris)
    
    
    
    container3.appendChild(ipa)
    container3.appendChild(nilaiipa)



    container3.appendChild(ratarata)
    container3.appendChild(nilairatarata)
    
    // Kosongkan value

    input[0].value = ""
    input[1].value = ""
    input[2].value = ""
    input[3].value = ""
    input[4].value = ""
    input[5].value = ""

    











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






