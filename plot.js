d3.json("data/data.json").then((importedData) => {
    let data = importedData;

    //sort
    data.sort((a,b) => parseFloat(b.greekSearchResults - a.greekSearchResults));

    //slice
    data = data.slice(0,10);

    //reverse array for horizontal line chart
    data = data.reverse();

    let labels = data.map(row => row.greekName);

    let trace = {
        x: data.map(row => row.greekSearchResults),
        y: labels,
        name: "Greek",
        type: "bar",
        orientation: "h"
    };

    let chartData = [trace];

    let layout = {
        title: "greek gods search results",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    Plotly.newPlot('plots', chartData, layout)

});