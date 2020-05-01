console.log('hello there')

//Making tweets disappear after 'x'
const xbtnSelect = document.querySelectorAll('.xBtn')

function onClick (event) {
    function responseHandler () {
    }
    console.log('clicked!')
    id = this.value
    console.log(id)
    let request = new XMLHttpRequest()
    request.addEventListener("load", responseHandler);
    request.open('post', "/delete/"+id);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send()
    event.path[4].style="display:none";
}

xbtnSelect.forEach(element => {
    element.addEventListener('click', onClick);
})