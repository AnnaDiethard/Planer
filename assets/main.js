
[...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
  .forEach(el => new bootstrap.Tooltip(el))

// moment().calendar();
moment.locale('ru')
console.log('calendar', moment().calendar())

// объявление глобальных переменных
const openValidationDialogBtn = document.querySelector('#validationDialogConfirm')

function alertWindow() {
    alert('функционал в разработке')
}

const validationDialog = document.querySelector('#validationDialog')
// окно валидации для подтверждения действия
function openValidationDialog() {
    validationDialog.showModal()
}
function validationDialogCancel() {
    window.location.reload()
}
function validationDialogConfirm() {
    validationDialog.close()
}