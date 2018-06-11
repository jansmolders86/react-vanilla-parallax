import React, {Component} from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import root from 'window-or-global';
import {TweenMax} from 'gsap';
import './Parallax.sass';

export default class Parallax extends Component {
    static propTypes = {
        images: PropTypes.array,
        range: PropTypes.number
    };

    state = {
        newX: 0,
        newY: 0,
        cWidth: root.innerWidth,
        cHeight: root.innerHeight
    };

    layers = [];

    componentDidMount() {
        this.pSection.addEventListener('mousemove', this.throttleMouse, false);
    }

    componentWillUnmount() {
        this.pSection.removeEventListener('mousemove', this.throttleMouse, false);
    }
    throttleMouse = throttle((e) => {
        this.parallaxInit(e);
    }, 200, {leading: false});

    parallaxInit(event) {
        const pc = document.getElementById('parallaxContainer');
        const pcDim = pc.getBoundingClientRect();
        const newX = Math.round(event.clientX - pcDim.left);
        const newY = Math.round(event.clientY - pcDim.top);

        this.setState({
            newX,
            newY
        });

        const layers = this.layers;
        for (let i = 0, len = layers.length; i < len; i++) {
            const layer = layers[i];
            const cHeight = this.state.cHeight;
            const cWidth = this.state.cWidth;
            const movementRange = this.props.range;
            const layerMovement = movementRange * i;

            const relWidthDiv = cWidth / 2;
            const relHeightDiv = cHeight / 2;

            TweenMax.to(layer, 1, {
                x: -((this.state.newX - (relWidthDiv)) / layerMovement),
                y: -((this.state.newY - (relHeightDiv)) / layerMovement)
            });
        }
    }

    render() {
        const images = this.props.images;
        const layers = [];
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const layerStyle = {backgroundImage: `url(${image})`};
            layers.push(<div ref={(c) => {this.layers[i] = c;}} className={`layer layer-${i}`} key={`layer-${i}`} style={layerStyle} />);
        }

        return (
            <div>
                <div ref={(c) => { this.pSection = c;}} id="parallaxContainer">
                    {layers}
                </div>
            </div>
        );
    }
}
