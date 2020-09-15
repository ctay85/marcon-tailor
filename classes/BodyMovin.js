
const bodymovin = require('bodymovin')

class BodyMovin {
  constructor(opts={}) {
    this.elm = opts.elm || document.createElement('div')
    this.width = opts.width || window.innerWidth
    this.height = opts.height || window.innerHeight
    this.data = opts.data || null
    this.loop = opts.loop || false
    this.autoplay = opts.autoplay || false

    this.init();
    this.initListener(opts);
  }

  init() {
    bodymovin.setQuality('low')
    console.log(bodymovin, this.elm, this.data);
    // this.anim = bodymovin.loadAnimation({
    //   container: this.elm,
    //   renderer: "svg",
    //   loop: this.loop,
    //   autoplay: this.autoplay,
    //   autoloadsegments:true,
    //   rendererSettings:{
    //     progressiveLoad:false
    //   },
    //   animationData: this.data
    // });
  }

  initListener(opts) {
    // this._onResize();
    // window.addEventListener('resize', () => this._onResize(), false)

    if (opts.onComplete) this.anim.addEventListener('complete', opts.onComplete)


    // this.anim.addEventListener('loopComplete', () => {
    //   console.log('loopComplete')
    // })
    // this.anim.addEventListener('enterFrame', () => {
    //   console.log('enterFrame')
    // })
    // this.anim.addEventListener('segmentStart', () => {
    //   console.log('segmentStart')
    // })

  }

  play(){
    this.anim.play();
  }
  stop(){
    this.anim.stop();
  }
  pause(){
    this.anim.pause();
  }
  destroy(){
    this.anim.destroy();
  }
  setSpeed(int){
    this.anim.setSpeed(int);
  }

  _onResize() {
    const ww = window.innerWidth * 2;
    const wh = window.innerHeight * 2;
    const ratio = ww / this.width;
    const scaleY = wh / (this.height * ratio);
    const svg = this.elm.querySelector('svg');

    svg.style.transform = `translate3d(0,0,0) scale3d(1, ${scaleY}, 1)`;
  }

}

module.exports = BodyMovin
