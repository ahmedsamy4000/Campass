import React from "react";
import * as d3 from "d3";

const Arc = ({ data, index, createArc, colors, format }) => (
    <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)}
    </text>
  </g>
);

const Legend = ({ data, colors }) => {
    return(
        <div>
            {data.map((d, i) => (
                <div key={i}>
                    <span>
                        <svg height={"20"} width={"20"} xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill={colors(i)}/>
                        </svg>
                    </span>
                <span className="ms-2">{d.label}</span>
                </div>
            ))}
        </div>
    )
}

const Pie = props => {
    const createPie = d3
      .pie()
      .value(d => d.value)
      .sort(null);
  
    const createArc = d3
      .arc()
      .innerRadius(props.innerRadius)
      .outerRadius(props.outerRadius);
  
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const format = d3.format(".2f");
    const data = createPie(props.data);
  
    return (
        <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
            <div>
                <svg width={props.width} height={props.height}>
                    <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
                    {data.map((d, i) => (
                        <Arc
                        key={i}
                        index={i}
                        data={d}
                        createArc={createArc}
                        colors={colors}
                        format={format}
                        />
                    ))}
                    </g>
                </svg>
            </div>
            <div className='ms-3'>
                <Legend data={props.data} colors={colors}/>
            </div>
        </div>
      
    );
  };
  
  export default Pie;
  