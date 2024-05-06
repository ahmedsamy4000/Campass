import * as d3 from "d3";
import { useEffect, useRef } from "react";

function AxisBottom({ scale, transform }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        const axis = d3.axisBottom(scale);
        axis.tickFormat(d => d.length > 10 ? d.substring(0, 10) + '...' : d);
        d3.select(ref.current).call(axis)
        
      }
    }, [ref, scale]);
  
    return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        d3.select(ref.current).call(d3.axisLeft(scale));
      }
    }, [ref, scale]);
  
    return <g ref={ref} />;
}

function Bars({ data, height, scaleX, scaleY, colors }) {
    return (
      <>
        {data.map(({ label, value }, index) => (
          <rect
            key={`bar-${ label}`}
            x={scaleX( label)}
            y={scaleY(value)}
            width={scaleX.bandwidth()}
            height={height - scaleY(value)}
            fill={colors(index)}
          />
        ))}
      </>
    );
  }

const Barchart = ({data}) => {
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const margin = { top: 10, right: 0, bottom: 20, left: 30 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const scaleX = d3.scaleBand()
        .domain(data.map(({ label }) => label))
        .range([0, width])
        .padding(0.5);
    const scaleY = d3.scaleLinear()
        .domain([0, Math.max(...data.map(({ value }) => value))])
        .range([height, 0]);

    return (
        <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
        >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
            <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
            <AxisLeft scale={scaleY} />
            <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} colors={colors}/>
        </g>
        </svg>
    );
}
export default Barchart;
