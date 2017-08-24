'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const createReactClass = require('create-react-class');


module.exports = createReactClass({

  displayName: 'Label',

  propTypes: {
    height: PropTypes.number,
    horizontalChart: PropTypes.bool,
    horizontalTransform: PropTypes.string,
    label: PropTypes.string.isRequired,
    width: PropTypes.number,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    textAnchor: PropTypes.string,
    verticalTransform: PropTypes.string,
  },

  getDefaultProps() {
    return {
      horizontalTransform: 'rotate(270)',
      strokeWidth: 0.1,
      stroke: 'pink',
      textAnchor: 'middle',
      verticalTransform: 'rotate(0)',
    };
  },

  render() {
    const props = this.props;

    if (!props.label) {
      return <text />;
    }

    let transform;
    let x;
    let y;
    if (props.orient === 'top' || props.orient === 'bottom') {
      transform = props.verticalTransform;
      x = props.width / 2;
      y = props.offset;

      if (props.horizontalChart) {
        transform = `rotate(180 ${x} ${y}) ${transform}`;
      }
    } else {  // left, right
      transform = props.horizontalTransform;
      x = -props.height / 2;
      if (props.orient === 'left') {
        y = -props.offset;
      } else {
        y = props.offset;
      }
    }


    return (
      <text
        stroke={props.stroke}
        strokeWidth={props.strokeWidth.toString()}
        textAnchor={props.textAnchor}
        transform={transform}
        y={y}
        x={x}
      >
        {props.label}
      </text>
    );
  },
});
