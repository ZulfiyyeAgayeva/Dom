
function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
function createStudent(){
    nameInp = document.querySelector("input[name='ad']"),
    surnameInp = document.querySelector("input[name='soyad']"),
    tbody = document.querySelector("tbody")
    tbody.innerHTML += `<tr><td>1</td><td>${nameInp.value}</td><td>${surnameInp.value}</td><td><p class="p-0" ind="">x</p></td></tr>`
    console.log([nameInp.value,surnameInp.value]);
    nameInp.value = '';
    surnameInp.value = '';
    closeModal();
}

