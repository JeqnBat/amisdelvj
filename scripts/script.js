// TRAVEL TITLE MINIATURE HACK ____________________________ */
const links = document.querySelectorAll('#wpsp-2497 a[title]')
const img = document.querySelectorAll('#wpsp-2497 img')

links.forEach((el, i) => {
  const imgURL = img[i].getAttribute('src')
  const title = el.getAttribute('title')
  const parts = title.split(' – ')
  const template =
    `<div class="custom-miniature-title">
      <div class="miniature-background" style="background: url('${imgURL}')"></div>
      <div class="part">${parts[0]}</div>
      <div class="part">${parts[1]}</div>`
  el.insertAdjacentHTML('afterbegin', template)
})