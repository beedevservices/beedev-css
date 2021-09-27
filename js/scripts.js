function copyCssText() {
    var copyText = document.querySelector('#cssLink')
    console.log(copyText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
  }
  function copyJsText() {
    var copyText = document.querySelector('#jsLink')
    console.log(copyText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
  }

const root = document.documentElement 
const themeBtns = document.querySelectorAll('.theme > button')
console.log("js connected")

themeBtns.forEach((btn) => {
  btn.addEventListener('click', handleThemeUpdate)
})

function handleThemeUpdate(e) {
  switch(e.target.value) {
    case 'dark': 
        root.style.setProperty('--bg', '#000000')
        root.style.setProperty('--bg-text', '#ffffff')
        break
    case 'green': 
       root.style.setProperty('--bg', '#006600')
       root.style.setProperty('--bg-text', '#e6ffe6')
       break
    case 'blue':
        root.style.setProperty('--bg', '#003399')
        root.style.setProperty('--bg-text', '#e6eeff')
        break
    case 'purple':
        root.style.setProperty('--bg', '#993399')
        root.style.setProperty('--bg-text', '#f9ecf9')
        break
    case 'cyan':
        root.style.setProperty('--bg', '#009999')
        root.style.setProperty('--bg-text', '#e6ffff')
        break
    case 'red':
        root.style.setProperty('--bg', '#e60000')
        root.style.setProperty('--bg-text', '#ffe6e6')
        break
    case 'light':
        root.style.setProperty('--bg', '#ffffff')
        root.style.setProperty('--bg-text', '#000000')
        break
  }
  console.log(e.target.value)
}