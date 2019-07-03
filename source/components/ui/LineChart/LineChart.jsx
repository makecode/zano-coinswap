import React from 'react';
import PropTypes from 'prop-types';
import './LineChart.css';

import * as d3 from 'd3';
import dayjs from 'dayjs';

import { Loader } from '../../index';
import { TOTAL_COINS } from '../../../framework/constants/app';

const DEFAULT_MARGIN = 20;
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 300;

const INITIAL_BALLOON_PROPS = {
  data: {},
  x: 0,
  y: 0
};

const INITIAL_DOT_PROP = {
  data: {},
  x: 0,
  y: 0
};

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      showBalloon: true,
      showDot: false,
      balloonProps: INITIAL_BALLOON_PROPS,
      dotProps: INITIAL_DOT_PROP
    };

    this.svg = React.createRef();
    this.margin = props.margin || DEFAULT_MARGIN;
    this.width = props.width - this.margin * 2 || DEFAULT_WIDTH;
    this.height = props.height - this.margin * 2 || DEFAULT_HEIGHT;

    // Extent - is a array with [min, max] values for each axis
    this.xExtent = null;
    this.yExtent = null;
    // Middle of Y extents we need for show this point on axis
    this.yExtentWithMiddle = null;
  };

  static propTypes = {
    xMax: PropTypes.string,
    yMin: PropTypes.number,
    xFormat: PropTypes.string,
    xExtent: PropTypes.array,
    isLoading: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.number
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.data !== prevProps.data) {
      this.setupExtents();
      this.renderChart();
    }
  }

  setupExtents = () => {
    const { data, xMax, yMin, xExtent } = this.props;

    const xExtentMin = d3.min(data, d => d.date);
    const xExtentMax = dayjs.unix(xMax).toDate();// 30.07.2019 12:00 UTC
    const yExtentMin = yMin;
    const yExtentMax = TOTAL_COINS;// max value of BBR
    this.yExtentWithMiddle = this.getExtentsWithMiddlePoint([yExtentMin, yExtentMax]);
    this.xExtent = xExtent.length ? xExtent : [xExtentMin, xExtentMax];
    this.yExtent = [yExtentMin, yExtentMax];
  };

  getExtentsWithMiddlePoint = (extents) => {
    const middle = Math.round(extents[1] / 2);
    const extentsWithMiddle = Object.assign([], extents);
    extentsWithMiddle.splice(1, 0, middle);

    return extentsWithMiddle;
  };

  toggleBalloon = (showing) => {
    this.setState(() => ({ showBalloon: showing }));
  };

  renderBalloon = () => {
    const { balloonProps: { data, x, y } } = this.state;

    const date = dayjs(data.date).format('D MMMM YYYY').toString();
    const value = d3.format('.2s')(data.value);

    const props = {
      className: 'balloon',
      style: {
        top: y,
        left: x
      }
    };

    return (
      <div className='balloon' {...props}>
        <p className='balloon-date'>{date}</p>
        <p className='balloon-value'>
          <span>{value}</span>
          <span className='balloon-value-title'>BBR Swapped</span>
        </p>
      </div>
    )
  };

  renderHoverLines = (data) => {
    const svg = d3.select(this.svg.current);

    const xScale = d3.scaleTime()
      .domain(this.xExtent)
      .range([0, this.width]);

    const yScale = d3.scaleLinear()
      .domain(this.yExtent)
      .range([this.height, 0]);

    const x = xScale(data.date);
    const y = yScale(data.value);

    svg
      .append('line')
      .attr('id', 'dot-line-vertical')
      .attr('class', 'dot-line')
      .attr('x1', x)
      .attr('x2', x)
      .attr('y1', y)
      .attr('y2', this.height)
      .lower()
      .attr('transform', `translate(${this.margin}, ${this.margin})`);

    svg
      .append('line')
      .attr('id', 'dot-line-horizontal')
      .attr('class', 'dot-line')
      .attr('x1', 0)
      .attr('x2', x)
      .attr('y1', y)
      .attr('y2', y)
      .lower()
      .attr('transform', `translate(${this.margin}, ${this.margin})`);

    this.toggleBalloon(true);
  };

  removeLines = () => {
    this.toggleBalloon(false);
    d3.select('#dot-line-vertical').remove();
    d3.select('#dot-line-horizontal').remove();
  };

  renderChart = () => {
    const { data, xFormat } = this.props;

    const lastValueFromData = data[data.length - 1];
    const dotsData = Object.assign([], [ lastValueFromData ]);

    const svg = d3.select(this.svg.current).append('g')
      .attr('transform', `translate(${this.margin}, ${this.margin})`);

    const xScale = d3.scaleTime()
      .domain(this.xExtent)
      .range([0, this.width]);

    const yScale = d3.scaleLinear()
      .domain(this.yExtent)
      .range([this.height, 0]);

    const line = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));

    const yAxis = d3.axisRight()
      .scale(yScale)
      .tickSize(0)
      .tickPadding(10)
      .tickValues(this.yExtentWithMiddle)
      .tickFormat((d) => `${d} BBR`);

    const xAxis = d3.axisBottom()
      .scale(xScale)
      .tickSize(0)
      .tickPadding(10)
      .tickFormat((d) => {
        const format = d3.timeFormat(xFormat);
        return format(d);
      });

    // Create four colors SVG gradient to the line (all colors configured in CSS)
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'gradient');

    // darkblue
    gradient.append('stop')
      .attr('class', 'stop-one')
      .attr('offset', '0%');
    // blue
    gradient.append('stop')
      .attr('class', 'stop-two')
      .attr('offset', '50%');
    // green
    gradient.append('stop')
      .attr('class', 'stop-three')
      .attr('offset', '100%');

    // Generate X axis
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('id', 'axis-x')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xAxis);

    // Generate Y axis
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('id', 'axis-y')
      .attr('transform', `translate(0, 0)`)
      .call(yAxis);

    // Generate X grid-lines
    svg
      .selectAll('#axis-x .tick')
      .append('line')
      .lower()
      .attr('class', 'grid-line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', -this.height);

    // Generate Y grid-lines
    svg
      .selectAll('#axis-y .tick')
      .append('line')
      .lower()// calls this method for change svg order to makes text front of the line
      .attr('class', 'grid-line')
      .attr('x1', this.width)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', 0);

    // Generate chart Line
    svg
      .datum(data)
      .append('path')
      .attr('class', 'line filled')
      .attr('d', line);

    // Generate line dots
    svg
      .selectAll('circle')
      .data(dotsData)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => xScale(d.date))
      .attr('cy', (d) => {
        const x = xScale(d.date);
        const y = yScale(d.value);

        this.setState(() => ({
          balloonProps: {
            x,
            y,
            data: d
          },
          dotProps: {
            x,
            y,
            data: d
          }
        }));

        return yScale(d.value)
      })
      .attr('r', 8);

    // One of the requirements from design - remove first circle
    // d3.select('circle').remove();

    // Render dot with Zano icon
    this.setState(() => ({ showDot: true }));
  };

  renderDot = () => {
    const { dotProps: { x, y } } = this.state;

    const props = {
      className: 'dot',
      style: { top: y, left: x }

      // if you need show bubble on hover uncomment two next strings
      // onMouseEnter: () => this.toggleBalloon(true),
      // onMouseLeave: () => this.toggleBalloon(false)
    };

    return (
      <span {...props} />
    )
  };

  render() {
    const { isLoading } = this.props;
    const { showBalloon, showDot } = this.state;

    const containerProps = {
      className: 'chart-container',
      style: {
        width: this.width + this.margin * 2,
        height: this.height + this.margin * 2
      }
    };

    const svgProps = {
      ref: this.svg,
      width: this.width + this.margin * 2,
      height: this.height + this.margin * 2
    };

    return (
      <div {...containerProps}>
        { isLoading ? <Loader /> : <svg {...svgProps} /> }
        { showBalloon && !isLoading ? this.renderBalloon() : false }
        { showDot && !isLoading ? this.renderDot() : false }
      </div>
    );
  }
}

export default LineChart;
