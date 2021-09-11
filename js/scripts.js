function copyText() {
    var copyText = document.querySelector('#cssLink')
    console.log(copyText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
  }