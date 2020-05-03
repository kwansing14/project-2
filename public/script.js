const xbtnSelect = document.querySelectorAll('.xBtn')

function onClick (event) {
    function responseHandler () {
    }
    console.log('clicked!')
    id = this.value
    console.log(id)
    event.path[4].style="display:none";
}

xbtnSelect.forEach(element => {
    element.addEventListener('click', onClick);

})