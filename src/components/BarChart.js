import React, { useState } from "react";
import { Pie, defaults } from "react-chartjs-2";

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const BarChart = () => {
  const [names, setnames] = useState([]);
  const [val, setval] = useState([]);

  const [na, setna] = useState("");
  const [v, setv] = useState("");

  const sendData = (e) => {
    e.preventDefault();

    console.log(na.split(",") + "===>");
    console.log(v + "===>");

    setnames([...na.split(",")]);
    setval([...v.split(",")]);

    console.log(names, val);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the names : "
        onChange={(e) => {
          setna(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter the Values : "
        onChange={(e) => {
          setv(e.target.value);
        }}
      />
      <button type="submit" onClick={sendData}>
        Submit
      </button>
      <Pie
        data={{
          labels: [names[0], names[1], names[2], names[3], names[4], names[5]],
          datasets: [
            {
              label: "# of votes",
              data: [+val[0], +val[1], +val[2], +val[3], +val[4], +val[5]],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
