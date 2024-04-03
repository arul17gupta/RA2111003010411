document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculate");
  const resultDiv = document.getElementById("result");

  calculateButton.addEventListener("click", async () => {
    const type = document.getElementById("type").value;
    try {
      const response = await fetch(`/numbers/${type}`);
      const data = await response.json();
      displayResult(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  });

  const displayResult = (data) => {
    resultDiv.innerHTML = `
      <p>Window Previous State: ${data.windowPrevState}</p>
      <p>Window Current State: ${data.windowCurrState}</p>
      <p>Numbers: ${data.numbers}</p>
      <p>Average: ${data.avg}</p>
    `;
  };
});
