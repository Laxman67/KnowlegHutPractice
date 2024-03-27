import React, { createRef, useEffect } from "react";
import Chart from "chart.js";

const ChartComponent = ({ data, width, height }) => {
  const canvasRef = createRef();
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((d) => d.x),
        datasets: [
          {
            label: "Max. Temperature",
            data: data.map((d) => d.y),
            backgroundColor: " rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
          },
        ],
      },
      option: {
        scales: {
          yAxes: [{ ticks: { beginAtZero: true } }],
        },
      },
    });
  });

  return (
    <canvas
      className="chart-canvas"
      width={width}
      height={height}
      ref={canvasRef}
    />
  );
};

export default ChartComponent;
