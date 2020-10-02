import React from 'react'
import ReactDOM from 'react-dom'
import './rendu3d.scss'

export class Rendu extends React.Component {
    constructor() {
      super()
      this.state = {
        x:-30,
        y:30,
        z:0,
        zoom:-400,
        opacity:75,
        perspective:700,
        zoomRange:[-1500,0],
        displayPanel:false
      }
      this.onMouseMove = this.onMouseMove.bind(this)
    }
    
    componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove)
    }
      
    updateX(e) { this.setState({x:e.target.value}) }
    updateY(e) { this.setState({y:e.target.value}) }
    updateZ(e) { this.setState({z:e.target.value}) }
    updateZoom(e) { this.setState({zoom:e.target.value}) }
    updateOpacity(e) { this.setState({opacity:e.target.value}) }
    updatePerspective(e) { this.setState({perspective:e.target.value}) }
    togglePanel() { this.setState({displayPanel: !this.state.displayPanel}) }
    randomize() {
      this.setState({
        x:ranNum(-90,90), y:ranNum(-90,90), z:ranNum(-90,90),
        zoom:ranNum(this.state.zoomRange[0], this.state.zoomRange[1])
      })
    }
    onMouseMove(e) {
      if (!this.state.displayPanel) {
        var hh = window.innerHeight/2, hw = window.innerWidth/2
        this.setState({x:(hh-e.clientY)/hh*90, y:(e.clientX-hw)/hw*90, z:0})
      }
    }
  
    render() {
      var {x, y, z, zoom, zoomRange, opacity, perspective, displayPanel} = this.state,
          cubeStyle = { transform: `translateZ(${zoom}px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)` },
          containerStyle = { perspective: `${perspective}px` },
          surfaceStyle = { opacity: opacity/100 }
      
      return (
        <div className="wrapper">
          <div className="container" style={containerStyle}>
            <div className={displayPanel ? 'cube' : 'cube animated'} style={cubeStyle}>
              {Array(6).fill().map(() => <figure style={surfaceStyle} />)}
            </div>
          </div>
          <div className="panel">
            <div className="toggle"><button onClick={this.togglePanel.bind(this)}>toggle control panel</button></div>
            <div className={displayPanel ? 'inputs' : 'inputs hide'}>
              <Slider axis={true} val={x} f={this.updateX.bind(this)} copy={'rotateX'} />
              <Slider axis={true} val={y} f={this.updateY.bind(this)} copy={'rotateY'} />
              <Slider axis={true} val={z} f={this.updateZ.bind(this)} copy={'rotateZ'} />
              <Slider min={zoomRange[0]} max={zoomRange[1]} val={zoom} f={this.updateZoom.bind(this)} copy={'zoom'} sc={true} scVal={'x'+Math.round(1000+zoom/(zoomRange[1]-zoomRange[0])*900)/100} />
              <Slider min={20} max={100} val={opacity} f={this.updateOpacity.bind(this)} copy={'opacity'} unit={'%'} />
              <Slider min={400} max={1000} val={perspective} f={this.updatePerspective.bind(this)} copy={'perspective'} unit={'px'} />
              <div><button onClick={this.randomize.bind(this)}>randomize</button></div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  class Slider extends React.Component {
    render() {
      var min = this.props.axis ? -90 : this.props.min,
          max = this.props.axis ? 90 : this.props.max,
          unit = this.props.axis ? 'deg' : this.props.unit
      return (
        <div>
          <input type="range" min={min} max={max} step="1" value={this.props.val} onChange={this.props.f} />
          <p>{this.props.copy}: {(this.props.sc ? this.props.scVal : Math.round(this.props.val) )}{unit}</p>
        </div>
      )
    }
  }
  
   ReactDOM.render(<Rendu />, document.getElementById('root'))
  
   var ranNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min) // inclusive by +1