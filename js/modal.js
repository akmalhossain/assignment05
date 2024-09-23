

//    open modal from donate button     
function openModal() {
    const modalWindow = document.getElementById('modal-window');
    modalWindow.classList.remove('hidden');
}
// close modal 
document.getElementById('modal-close').addEventListener('click', function () {
    const modalWindow = document.getElementById('modal-window');
    modalWindow.classList.add('hidden');

})

