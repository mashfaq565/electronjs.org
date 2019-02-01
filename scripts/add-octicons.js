// @ts-check

module.exports = function addOcticons() {
  const flash = document.querySelectorAll('#flash')

  flash.forEach((el) => {
    const span = document.createElement('span')
    span.classList.add('octicon', 'octicon-plug')

    el.insertAdjacentElement("afterbegin", span)
    el.classList.add('flash')
  })
}
