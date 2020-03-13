d3.json("data/data.json").then((importedData) => {
    let data = importedData;
    // sort data
    data.sort((a, b) => parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults));
    // slice the top 10 entries
    data = data.slice(0, 10);
    // reverse array order
    data = data.reverse();
    let labels = data.map(row => row.greekName);
    let trace = {
        x: data.map(row => row.greekSearchResults),
        y: labels,
        text: labels,
        name: "Greek",
        type: "bar",
        orientation: "h"
    };
    let chartData = [trace];
    let layout = {
        title: "Greek Gods Search Results",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    Plotly.newPlot('plot', chartData, layout);
});