export default class Reveal {

  constructor ({ elements }) {
    this.elements   = elements
    this.inc        = -1
    this.nextEl     = this.getNextEl()
    this.onScroll   = this.onScrollEvent.bind(this)

    this.setupEvents()
  }

  setupEvents () {
    this.onLoad()
    window.addEventListener('scroll', this.onScroll)
  }

  onScrollEvent (e) {
    if ( !this.nextEl ) return this.destroy()
    if ( !this.isInview() ) return false
    return this.showElement()
  }

  onLoad () {
    if ( this.isInview() ) {
      this.showElement()
      if (this.nextEl) return this.onLoad()
    }
  }

  showElement () {
    this.nextEl.setAttribute('data-reveal', 'show')
    this.nextEl = this.getNextEl()
  }

  getNextEl () {
    this.inc += 1
    return this.elements[this.inc]
  }

  isInview () {
    return (this.nextEl.getBoundingClientRect().top - window.innerHeight / 1.1) < 0
  }

  destroy () {
    return window.removeEventListener('scroll', this.onScroll)
  }

}
