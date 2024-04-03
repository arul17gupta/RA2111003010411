const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 9876;

const windowSize = 10;
let storedNumbers = [];

app.use(express.static("public"));
app.use(express.json());

const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(`http://localhost:3000/test/${type}`);
    return response.data.numbers;
  } catch (error) {
    console.error("Error fetching numbers:", error.message);
    return [];
  }
};

const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
};

app.get("/numbers/:type", async (req, res) => {
  const { type } = req.params;
  const prevWindowState = [...storedNumbers];

  const newNumbers = await fetchNumbers(type);
  storedNumbers = storedNumbers.concat(newNumbers).slice(-windowSize);
  const currentWindowState = [...storedNumbers];

  const avg = calculateAverage(storedNumbers);

  res.json({
    windowPrevState: prevWindowState,
    windowCurrState: currentWindowState,
    numbers: storedNumbers,
    avg: avg.toFixed(2),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
