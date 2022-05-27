import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };
  
  export default class Confetti extends React.Component {
    constructor(props) {
      super(props);
      this.isAnimationEnabled = false;
      this.animationInstance = null;
      this.intervalId = null;
    }
  
    componentWillUnmount() {
      this.isAnimationEnabled = false;
      this.intervalId && clearInterval(this.intervalId);
    }
  
    getAnimationSettings = (originXA, originXB) => {
      return {
        startVelocity: 60,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 150,
        origin: {
          x: randomInRange(originXA, originXB),
          y: Math.random() - 0.2
        }
      };
    };
  
    nextTickAnimation = () => {
      this.animationInstance &&
        this.animationInstance(this.getAnimationSettings(0.1, 0.3));
      this.animationInstance &&
        this.animationInstance(this.getAnimationSettings(0.7, 0.9));
    };
  
    startAnimation = () => {
      if (!this.isAnimationEnabled) {
        this.isAnimationEnabled = true;
        this.intervalId = setInterval(this.nextTickAnimation, 1900);
      }
    };
  
    getInstance = (instance) => {
      this.animationInstance = instance;
    };

    componentWillMount = () => {
      this.startAnimation();
    }
  
    render() {
      return (
        <>
          <ReactCanvasConfetti
            refConfetti={this.getInstance}
            style={canvasStyles}
          />
        </>
      );
    }
  }