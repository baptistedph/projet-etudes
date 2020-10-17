const arrow = document.querySelector('.go-top')

window.addEventListener('scroll', () => {
  let progress = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
  if (progress > 8) {
    arrow.classList.add('active')
  } else {
    arrow.classList.remove('active')
  }
})
