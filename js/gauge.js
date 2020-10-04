const gauge = document.querySelector('.gauge')

window.addEventListener('scroll', () => {
  const progress = window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100
  gauge.style.width = `${progress}%`
})
