// API key;
// const apiKey = "0353e66df6f1bec42f85ab2aa62ad775";
/*global d3*/
// search base URL
const url = "https://pro.openweathermap.org/data/2.5/forecast/climate?lat=40.781464&lon=-73.966696&appid=0353e66df6f1bec42f85ab2aa62ad775";


function fetchSearchData() {

  window
    .fetch(url)
    .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // .then(function(data) {
    //   document.getElementById("Output").innerHTML =
    //     JSON.stringify(data);
    .then(function(data) {
      const dataset = data["list"]
   

      // console.log(dataset)
      // console.log(dataset.list[0].temp.day)

      // for (var i = 0; i < myData.length; i++) {
      //   console.log(myData[i].temp.day)
      // }
      
      async function drawLineChart() {
        // const data = await d3.json('./my_weather_data.json')
        // console.log(data);

        let dimensions = {
          width: window.innerWidth * 0.9,
          height: 400,
          margins: {
            top: 15,
            right: 15,
            bottom: 40,
            left: 60,
          }
        }
        dimensions.boundedWidth = dimensions.width -
          dimensions.margins.left -
          dimensions.margins.right
        dimensions.boundedHeight = dimensions.height -
          dimensions.margins.top -
          dimensions.margins.bottom

        const yAccessor = d => d.temp["day"]
        // console.log(yAccessor(data[0]))
        const parseDate = d3.timeParse("%Y-%m-%d")
        const xAccessor = d => d["dt"]
        console.log(xAccessor(dataset[0]))


        const wrapper = d3.select("#wrapper")
          .append("svg")
          .attr("width", dimensions.width)
          .attr("height", dimensions.height)

        const bounds = wrapper.append("g")
          .style("transform", `translate(${
        dimensions.margins.left
    }px, ${
        dimensions.margins.top
    }px)`)

        //create scales

        const yScale = d3.scaleLinear()
          .domain(d3.extent(dataset, yAccessor))
          .range([dimensions.boundedHeight, 0])

        // const freezingTemperaturePlacement = yScale(32)
        // const freezingTemperatures = bounds.append("rect")
        //   .attr("x", 0)
        //   .attr("width", dimensions.boundedWidth)
        //   .attr("y", freezingTemperaturePlacement)
        //   .attr("height", dimensions.boundedHeight - freezingTemperaturePlacement)
        //   .attr("fill", "#e0f3f3")

        const xScale = d3.scaleTime()
          .domain(d3.extent(dataset, xAccessor))
          .range([0, dimensions.boundedWidth])


        //Draw Data

        const lineGenerator = d3.line()
          .x(d => xScale(xAccessor(d)))
          .y(d => yScale(yAccessor(d)))

        const line = bounds.append("path")
          .attr("d", d => lineGenerator(dataset))
          .attr("fill", "none")
          .attr("stroke", "cornflowerblue")
          .attr("stroke-width", 2)

        // draw the axis
        const yAxisGenerator = d3.axisLeft()
          .scale(yScale)

        const yAxis = bounds.append("g")
          .call(yAxisGenerator)

        const xAxisGenerator = d3.axisBottom()
          .scale(xScale)

        const xAxis = bounds.append("g")
          .call(xAxisGenerator)
          .style("transform", `translateY(${
        dimensions.boundedHeight
        }px)`)
      }

      drawLineChart();


    })
    .catch(error => {
      console.log(error);
    })


}


fetchSearchData()
