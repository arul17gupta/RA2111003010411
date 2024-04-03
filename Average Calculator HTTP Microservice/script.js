document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event triggered");
  const calculateButton = document.getElementById("calculate");
  const resultDiv = document.getElementById("result");

  calculateButton.addEventListener("click", async () => {
    console.log("Calculate button clicked");
    const type = document.getElementById("type").value;
    try {
      const response = await fetch(`/numbers/${type}`);
      console.log("Response:", response);
      const data = await response.json();
      console.log("Data:", data);
      displayResult(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  });

  const displayResult = (data) => {
    console.log("Displaying result:", data);
    resultDiv.innerHTML = `
      <p>Window Previous State: ${data.windowPrevState}</p>
      <p>Window Current State: ${data.windowCurrState}</p>
      <p>Numbers: ${data.numbers}</p>
      <p>Average: ${data.avg}</p>
    `;
  };
});
