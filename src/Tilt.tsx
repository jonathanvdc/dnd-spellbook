// Based on jonathandion's react-tilt component, licensed under the MIT license.

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

type Settings = {
  reverse: boolean,
  max: number,
  perspective: number,
  easing: string,
  scale: string,
  speed: number,
  transition: number,
  axis: any,
  reset: boolean,
};

type Props = {
  onPointerEnter?: (e?: React.PointerEvent) => {},
  onPointerMove?: (e: React.PointerEvent) => {},
  onPointerLeave?: (e: React.PointerEvent) => {},
  options?: Settings,
  className?: string,
  style?: React.StyleHTMLAttributes<HTMLDivElement>
};

type State = {
  style: React.StyleHTMLAttributes<HTMLDivElement>
};

class Tilt extends Component<Props, State> {
  private width: number | null;
  private height: number | null;
  private left: number | null;
  private top: number | null;
  private transitionTimeout: number | null;
  private updateCall: number | null;
  private element: any;
  private settings: Settings;
  private reverse: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      style: {}
    }

    const defaultSettings = {
      reverse: false,
      max: 35,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: "1.1",
      speed: 1000,
      transition: true,
      axis: null,
      reset: true
    };

    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
    this.transitionTimeout = null;
    this.updateCall = null;
    this.element = null;
    this.settings = Object.assign({}, defaultSettings, this.props.options);
    this.reverse = this.settings.reverse ? -1 : 1;
  }

  componentDidMount() {
    this.element = findDOMNode(this);
    const myNode = this.element;
    setTimeout(() => {
      if (myNode.parentElement.querySelector(':hover') === myNode) {
        this.onPointerEnter();
      }
    }, 0);
  }

  componentWillUnmount() {
    if (this.transitionTimeout !== null) {
      clearTimeout(this.transitionTimeout);
    }
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }
  }

  onPointerEnter(e?: React.PointerEvent) {
    this.updateElementPosition();

    this.setState(Object.assign({}, this.state, {
      style: {
        ...this.state.style,
        willChange: "transform"
      }
    }))

    this.setTransition();

    if (this.props.onPointerEnter) {
      return this.props.onPointerEnter(e);
    } else {
      return {};
    }
  }

  reset() {
    window.requestAnimationFrame(() => {
      this.setState(Object.assign({}, this.state, {
        style: {
          ...this.state.style,
          transform: "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
        }
      }))
    });
  }

  onPointerMove(e: React.PointerEvent) {
    e.persist();

    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall);
    }

    // this.event = e;
    this.updateCall = requestAnimationFrame(this.update.bind(this, e));

    if (this.props.onPointerMove) {
      return this.props.onPointerMove(e);
    } else {
      return {};
    }
  }

  setTransition() {
    if (this.transitionTimeout !== null) {
      clearTimeout(this.transitionTimeout);
    }

    this.setState(Object.assign({}, this.state, {
      style: {
        ...this.state.style,
        transition: this.settings.speed + "ms " + this.settings.easing
      }
    }))

    this.transitionTimeout = setTimeout(() => {
      this.setState(Object.assign({}, this.state, {
        style: {
          ...this.state.style,
          transition: ''
        }
      }))
    }, this.settings.speed) as unknown as number;
  }

  onPointerLeave(e: React.PointerEvent) {
    this.setTransition();

    if (this.settings.reset) {
      this.reset();
    }

    if (this.props.onPointerLeave) {
      return this.props.onPointerLeave(e);
    } else {
      return {};
    }
  }

  getValues(e: React.PointerEvent) {
    const x = (e.nativeEvent.clientX - this.left!) / this.width!;
    const y = (e.nativeEvent.clientY - this.top!) / this.height!;
    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);

    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2);
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);

    const percentageX = _x * 100
    const percentageY = _y * 100

    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY
    };
  }

  updateElementPosition() {
    const rect = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  update(e: React.PointerEvent) {
    let values = this.getValues(e);

    this.setState(Object.assign({}, this.state, {
      style: {
        ...this.state.style,
        transform: "perspective(" + this.settings.perspective + "px) " +
          "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
          "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
          "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
      }
    }))

    this.updateCall = null;
  }

  render() {
    const style = Object.assign({}, this.props.style, this.state.style);
    return <div style={style}
        className={this.props.className}
        onPointerEnter={this.onPointerEnter.bind(this)}
        onPointerMove={this.onPointerMove.bind(this)}
        onPointerLeave={this.onPointerLeave.bind(this)}>
        {this.props.children}
      </div>;
  }
}

export default Tilt;
