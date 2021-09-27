const btn = document.querySelector('.stack') // refers to the button
const currentStack = localStorage.getItem('stack')
if (currentStack == 'python') {
    document.body.classList.add('ptPython')
}

btn.addEventListener('click', function() {
    document.body.classList.toggle('ptPython')
    let stack = 'webFun' // class
    if(document.body.classList.contains('ptPython')) {
        stack = 'python' // class
    }
    localStorage.setItem('stack', stack)
})