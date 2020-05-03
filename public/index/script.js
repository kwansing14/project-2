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

//yes button
const yesbtn = document.querySelector('.yesbtn')
const nobtn = document.querySelector('.nobtn')
let box2 = document.querySelectorAll('.box2')
let i = box2.length

function onClickyes (event) {
        function responseHandler () {
    }
    i = i - 1;
    console.log('clicked!'+i)
    box2[i].style='display:none'

    let id = document.querySelectorAll('.mainbtn')[i].id
    console.log(id);
    let data = {id}
    let request = new XMLHttpRequest()
    request.addEventListener("load", responseHandler);
    request.open('post', "/matched");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data))
}

function onClickno (event) {
        function responseHandler () {
    }
    i = i - 1;
    console.log('clicked!'+i)
    box2[i].style='display:none'

}
if (document.cookie.search('logged in=true')>1) {
    console.log('trueloggedin')
    yesbtn.addEventListener('click', onClickyes);
    nobtn.addEventListener('click', onClickno);
}

    //console.log("-------------------")