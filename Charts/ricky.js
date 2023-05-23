var xValues = [
  "Cardiologist",
  "Orthopedic Surgeons (except pediatric)",
  "Pediatric Surgeons",
  "Athletes and Sports Competitors",
  "Surgeons (all other)",
  "Radiologists",
  "Dermatologists",
  "Emergency Medicine Physicians",
  "Oral and Maxillofacian Surgeons",
  "Anesthesiologists",
];
var yValues = [
  421330, 371400, 362970, 358080, 347870, 329080, 327650, 316600, 309410,
  302970,
];
var barColors = [
  "rgb(107, 94, 109)",
  "rgb(43, 49, 81)",
  "rgb(177, 149, 201)",
  "rgb(35, 119, 40)",
  "rgb(180, 226, 61)",
  "rgb(160, 16, 232)",
  "rgb(34, 197, 247)",
  "rgb(72, 158, 125)",
  "rgb(255, 150, 102)",
  "rgb(28, 110, 168)",
];

new Chart("canvas1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "2023 Top 10 Highest Paying Jobs in America",
    },
  },
});

new Chart("canvas2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "2023 Top 10 Highest Paying Jobs in America",
    },
  },
});
