baguetteBox.run('.gallery')

// const search = new Filter('search', 'data-caption')

function searchPicture() {
  let textInput = document.querySelector('#search').value.toLowerCase()
  let textCaptions = document.querySelectorAll('[data-caption]')
  for (i = 0; i < textCaptions.length; i++) {
    let textCaption = textCaptions[i].getAttribute('data-caption').toLowerCase()
    if (textCaption.includes(textInput)) {
      textCaptions[i].style.display = 'block'
    } else {
      textCaptions[i].style.display = 'none'
    }
  }
}
