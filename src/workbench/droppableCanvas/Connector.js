import React from "react";

const Connector = ({ x1, y1, x2, y2 }) => (
  <svg preserveAspectRatio="xMinYMin" width="100%" height="100%">
    <defs>
      <marker
        id="circle"
        markerWidth="8"
        markerHeight="8"
        refX="5"
        refY="5"
        orient="auto"
      >
        <circle cx="5" cy="5" r="1.2" fill="blue" />
      </marker>
      <marker
        id="arrow"
        orient="auto"
        markerWidth="2"
        markerHeight="4"
        refX="0.1"
        refY="2"
      >
        <path d="M0,0 V4 L2,2 Z" fill="red" />
      </marker>
    </defs>
    <polyline
      markerStart="url(#circle)"
      markerEnd="url(#arrow)"
      points={`${x1} ${y1}, ${x1} ${y2}, ${x2 - 25} ${y2}`}
      stroke="orange"
      fill="transparent"
      strokeWidth="4"
    />
  </svg>
);

export default Connector;
