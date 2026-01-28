async function loadJSON() { 
   // alert (siteBaseUrl);
  try {
    const response = await fetch("lafayette-fccla/scripts/facts.json");
    const facts = await response.json();
    var num = Math.floor(Math.random() * facts.data.length);
    document.getElementById("fact-text").textContent = facts.data[num];

    setInterval(() => {
        num = Math.floor(Math.random() * facts.data.length);
        document.getElementById("fact-text").textContent = facts.data[num];
    }, 7500); // 10,000 ms = 10 seconds

  } catch (error) {
    console.error("Error:", error);
  }
}


loadJSON();

