/*global d3*/

"use strict";

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");

//create API key
const apiKey = "0353e66df6f1bec42f85ab2aa62ad775";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

    //ajax here
    const url = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${inputVal}&appid=${apiKey}&units=imperial`;

    function fetchSearchData() {

        fetch(url)
            .then(res => res.json())
            // .then(data => {
            //     console.log(data)

            .then(function(data) {
                const dataset = data.list
                const allData = data


                drawChart(dataset)
                console.log(allData)
                getTitle(allData)

            })
            .catch(error => {
                console.log(error);
                msg.textContent = "Please search for a valid city";
            })

        msg.textContent = "";
        form.reset();
        input.focus();
    };



    function getTitle(allData) {
        const title = document.getElementById("title")
        const city = document.createElement("h2");
        const newTitle = city.innerText = allData.city.name + ", " + allData.city.country;
        title.innerHTML = newTitle + " : 30 Day Forecast";
    }

    const chartDiv = document.getElementById('wrapper')

    if (chartDiv == null) {
        fetchSearchData()
    }
    else {
        chartDiv.remove()
        fetchSearchData()
    }


    //////// draw chart in d3 ////////


    function drawChart(newData) {



        // 1. Access data


        
        //add the date format to the data
        const formatDate = d3.timeFormat("%Y-%m-%d")
        const parseDate = d3.timeParse("%Y-%m-%d")

        newData.forEach((element) => {
            element['date'] =
                (formatDate(element.dt * 1000))
        })

        const sunFormatter = d3.timeFormat("%I %p")
        const temperatureMinAccessor = d => d.temp.min
        const temperatureMaxAccessor = d => d.temp.max
        const dayAccessor = d => d.date
        const humidityAccessor = d => d.humidity
        const rainAccessor = d => d.rain
        const snowAccessor = d => d.snow
        const precipitationTypeAccessor = d => d.weather[0].main
        const weatherType = d => d.weather[0].description
        const cloudAccessor = d => d.clouds
        const dateParser = d3.timeParse("%Y-%m-%d")
        const sunriseAccessor = d => dateParser(d.sunrise)
        const sunsetAccessor = d => dateParser(d.sunset)
        const sunriseFormat = d => sunFormatter(sunriseAccessor(d.sunrise))
        const dateAccessor = d => dateParser(d.date)


        // 2. Create chart dimensions

        const width = 600
        let dimensions = {
            width: width,
            height: width,
            radius: width / 2,
            margin: {
                top: 120,
                right: 120,
                bottom: 120,
                left: 120,
            },
        }
        dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
        dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom
        dimensions.boundedRadius = dimensions.radius - ((dimensions.margin.left + dimensions.margin.right) / 2)

        // 3. Draw canvas

        const div = document.createElement('div')
        div.setAttribute('class', 'wrapper');
        div.setAttribute('id', 'wrapper')
        document.body.appendChild(div);

        div.innerHTML = `
        <div id="tooltip" class="tooltip">
            <div id="tooltip-date" class="tooltip-date"></div>
            <div id="tooltip-temperature" class="tooltip-temperature">
                <span id="tooltip-temperature-min"></span>
                -
                <span id="tooltip-temperature-max"></span>
            </div>
            <div class="tooltip-metric tooltip-precipitation-type">
                <div>Weather</div>
                <div id="tooltip-precipitation-type"></div>
            </div>

            <div class="tooltip-metric tooltip-cloud">
                <div>Cloud Cover</div>
                <div id="tooltip-cloud"></div>
            </div>
            <div class="tooltip-metric tooltip-rain">
                <div>Rain</div>
                <div id="tooltip-rain"></div>
            </div>
            <div class="tooltip-metric tooltip-snow">
                <div>Snow</div>
                <div id="tooltip-snow"></div>
            </div>
            <div class="tooltip-metric tooltip-humidity">
                <div>Humidity</div>
                <div id="tooltip-humidity"></div>
            </div>
        </div>
        `

        const subtitle = document.getElementById('subtitle')
        subtitle.innerText = 'Today:'

        const wrapper = d3.select("#wrapper")
            .append("svg")
            .attr("width", dimensions.width)
            .attr("height", dimensions.height)

        const bounds = wrapper.append("g")
            .style("transform", `translate(${
            dimensions.margin.left + dimensions.boundedRadius}px, ${dimensions.margin.top + dimensions.boundedRadius}px)`)

        const defs = wrapper.append("defs")

        const gradientId = "temperature-gradient"
        const gradient = defs.append("radialGradient")
            .attr("id", gradientId)

        const radiusScale = d3.scaleLinear()
            .domain(d3.extent([
                ...newData.map(temperatureMinAccessor),
                ...newData.map(temperatureMaxAccessor),
            ]))
            .range([0, dimensions.boundedRadius])
            .nice()

        const numberOfStops = 10
        // const gradientColorScale = d3.interpolatePuBuGn
        // const gradientColorScale = d3.interpolateBuPu
        // const gradientColorScale = d3.interpolateCool
        const gradientColorScale = d3.interpolateRgb("cornflowerblue", "#047773")


        const temperatureColorScale = d3.scaleSequential()
            .domain(radiusScale.domain())
            .interpolator(gradientColorScale)

        d3.range(numberOfStops).forEach(i =>
            gradient.append("stop")
            .attr("offset", `${i *100 / (numberOfStops - 1)}%`)
            .attr("stop-color", gradientColorScale(
                i / (numberOfStops - 1)
            )))

        // 4. Create scales

        const angleScale = d3.scaleTime()
            .domain(d3.extent(newData, dateAccessor))
            .range([0, Math.PI * 2])


        const getCoordinatesForAngle = (angle, offset = 1) => [
            Math.cos(angle - Math.PI / 2) * dimensions.boundedRadius * offset,
            Math.sin(angle - Math.PI / 2) * dimensions.boundedRadius * offset,
        ]

        const getXFromDataPoint = (d, offset = 1.4) => (
            getCoordinatesForAngle(angleScale(dateAccessor(d)), offset)[0]
        )

        const getYFromDataPoint = (d, offset = 1.4) => (
            getCoordinatesForAngle(angleScale(dateAccessor(d)), offset)[1]
        )

        // 5. Draw data

        const freezingCircle = bounds.append("circle")
            .attr("r", radiusScale(32))
            .attr("class", "freezingCircle")


        const areaGenerator = d3.areaRadial()
            .angle(d => angleScale(dateAccessor(d)))
            .innerRadius(d => radiusScale(temperatureMinAccessor(d)))
            .outerRadius(d => radiusScale(temperatureMaxAccessor(d)))

        const area = bounds.append("path")
            .attr("d", areaGenerator(newData))
            .style("fill", `url(#${gradientId}`)

        const cloudRadiusScale = d3.scaleSqrt()
            .domain(d3.extent(newData, cloudAccessor))
            .range([1, 10])

        const humidityRadiusScale = d3.scaleSqrt()
            .domain(d3.extent(newData, humidityAccessor))
            .range([1, 10])

        const precipitationTypes = ["humidity", "rain", "snow", "clouds"]
        const precipitationTypeColorScale = d3.scaleOrdinal()
            .domain(precipitationTypes)
            .range(["#d8d2e7", "cornflowerblue", "#b2bec3", "#c8d6e5"])

        const rainRaduisScale = d3.scaleSqrt()
            .domain(d3.extent(newData, rainAccessor))
            .range([0, 10])

        const snowRaduisScale = d3.scaleSqrt()
            .domain(d3.extent(newData, snowAccessor))
            .range([0, 10])

        // 6. Draw peripherals

        const annotationGroup = bounds.append("g")
        const drawAnnotation = (angle, offset, text) => {
            const [x1, y1] = getCoordinatesForAngle(angle, offset)
            const [x2, y2] = getCoordinatesForAngle(angle, 2.6)

            annotationGroup.append("line")
                .attr("x1", x1)
                .attr("x2", x2)
                .attr("y1", y1)
                .attr("y2", y2)
                .attr("class", "annotation-line")

            annotationGroup.append("text")
                .attr("x", x2 + 6)
                .attr("y", y2)
                .attr("class", "annotation-text")
                .text(text)

        }




        const peripherals = bounds.append("g")
        const days = d3.timeDay.range(...angleScale.domain())

        days.forEach(day => {
            const angle = angleScale(day)
            const [x, y] = getCoordinatesForAngle(angle, 1)
            // console.log(getCoordinatesForAngle(angle, 1))

            peripherals.append("line")
                .attr("x2", x)
                .attr("y2", y)
                .attr("class", "grid-line")


            const [labelx, labely] = getCoordinatesForAngle(angle, 2)
            peripherals.append("text")
                .text(d3.timeFormat("%b %d")(day))
                .attr("x", labelx)
                .attr("y", labely)
                .attr("class", "tick-label")
                .style("text-anchor",
                    Math.abs(labelx) < 5 ? "middle" :
                    labelx > 0 ? "start" :
                    "end"
                )


            const temperatureTicks = radiusScale.ticks(4)
            // console.log(temperatureTicks)
            const gridCircles = temperatureTicks.map(d => {
                peripherals.append("circle")
                    .attr("r", radiusScale(d))
                    .attr("class", "grid-line")
            })

            const tickLabelBackgrounds = temperatureTicks.map(d => {
                if (d < 1) return
                return peripherals.append("rect")
                    // .attr("x", 4)
                    .attr("y", -radiusScale(d) - 10)
                    .attr("width", 40)
                    .attr("height", 20)
                    .attr("fill", "#f8f9fa")
            })

            const gridLabels = temperatureTicks.map(d => {
                if (d < 1) return
                return peripherals.append("text")
                    .attr("x", 4)
                    .attr("y", -radiusScale(d) + 2)
                    .html(`${d3.format(".0f")(d)} \xB0F`)
                    .attr("class", "tick-label-temperature")
            })

        })

        //ticks for days

        const dayGroup = bounds.append("g")
        const dayOffset = 1
        const dayTick = dayGroup.selectAll("line")
            .data(newData.filter(d => dayAccessor(d)))
            .join("line")
            .attr("x1", d => getXFromDataPoint(d, dayOffset))
            .attr("y1", d => getYFromDataPoint(d, dayOffset))
            .attr("x2", d => getXFromDataPoint(d, dayOffset + 0.1))
            .attr("y2", d => getYFromDataPoint(d, dayOffset + 0.1))
            .attr("class", "day-line")

        //outer circles

        const cloudGroup = bounds.append("g")
        const cloudOffset = 1.65
        const cloudDots = cloudGroup.selectAll("circle")
            .data(newData)
            .join("circle")
            .attr("r", d => cloudRadiusScale(cloudAccessor(d)))
            .attr("cx", d => getXFromDataPoint(d, cloudOffset))
            .attr("cy", d => getYFromDataPoint(d, cloudOffset))
            .attr("class", "cloud-dot")

        const humidityGroup = bounds.append("g")
        const humidityOffset = 1.20
        const humidityDots = humidityGroup.selectAll("circle")
            .data(newData)
            .join("circle")
            .attr("r", d => humidityRadiusScale(humidityAccessor(d)))
            .attr("cx", d => getXFromDataPoint(d, humidityOffset))
            .attr("cy", d => getYFromDataPoint(d, humidityOffset))
            .attr("class", "humidity-dot")

        const rainGroup = bounds.append("g")
        const rainOffset = 1.34
        const rainDots = rainGroup.selectAll("circle")
            .data(newData)
            .join("circle")
            .attr("r", d => rainRaduisScale(rainAccessor(d)))
            .attr("cx", d => getXFromDataPoint(d, rainOffset))
            .attr("cy", d => getYFromDataPoint(d, rainOffset))
            .attr("class", "rain-dot")

        const snowGroup = bounds.append("g")
        const snowOffset = 1.47
        const snowDots = snowGroup.selectAll("circle")
            .data(newData)
            .join("circle")
            .attr("r", d => snowRaduisScale(snowAccessor(d)))
            .attr("cx", d => getXFromDataPoint(d, snowOffset))
            .attr("cy", d => getYFromDataPoint(d, snowOffset))
            .attr("class", "snow-dot")



        // drawAnnotation(Math.PI * 0.3, humidityOffset , "Humidity")
        // drawAnnotation(Math.PI * 0.195, cloudOffset , "Cloudiness")
        // drawAnnotation(Math.PI * 0.24, rainOffset , "Rain")
        // drawAnnotation(Math.PI * 0.26, snowOffset , "Snow")
        drawAnnotation(Math.PI * 0.65, 0.5, "Temperature")


        drawAnnotation(Math.PI * 0.72, radiusScale(32) / dimensions.boundedRadius, "Freezing Temperature (32\xB0F)")


        precipitationTypes.forEach((precipitationType, index) => {
            const labelCoordinates = getCoordinatesForAngle(Math.PI * 0.28, 3.0)

            annotationGroup.append("circle")
                .attr("cx", labelCoordinates[0] + 15)
                .attr("cy", labelCoordinates[1] + (16 * (index + 1)))
                .attr("r", 4)
                .attr("fill", precipitationTypeColorScale(precipitationType))
                .style("opacity", 0.7)
            annotationGroup.append("text")
                .attr("x", labelCoordinates[0] + 25)
                .attr("y", labelCoordinates[1] + (16 * (index + 1)))
                .text(precipitationType)
                .attr("class", "annotation-text")

        })




        //   // 7. Set up interactions

        const listenerCircle = bounds.append("circle")
            .attr("r", dimensions.width / 2)
            .attr("class", "listener-circle")
            .on("mousemove", onMouseMove)
            .on("mouseleave", onMouseLeave)


        const tooltip = d3.select("#tooltip")
        const tooltipLine = bounds.append("path")
            .attr("class", "tooltip-line")

        function onMouseMove(e) {
            const [x, y] = d3.pointer(e)

            const getAngleFromCoordinates = (x, y) => (
                Math.atan2(y, x))
            let angle = getAngleFromCoordinates(x, y) + Math.PI / 2
            if (angle < 0) angle = (Math.PI * 2) + angle

            const tooltipArcGenerator = d3.arc()
                .innerRadius(0)
                .outerRadius(dimensions.boundedRadius * 1.6)
                .startAngle(angle - 0.15)
                .endAngle(angle + 0.015)

            tooltipLine.attr("d", tooltipArcGenerator())
                .style("opacity", 1)

            const outerCoordinates = getCoordinatesForAngle(angle, 1.6)

            tooltip.style("opacity", 1)
                .style("transform", `translate(calc(${
          outerCoordinates[0] < -50 ? "40px + -100" :
          outerCoordinates[0] > 50 ? "-40px + 0" :
          -50
        }% + ${
          outerCoordinates[0] + dimensions.margin.left + dimensions.boundedRadius
        }px), calc(${
          outerCoordinates[1] < -50 ? "40px + -100" :
          outerCoordinates[1] > 50 ? "-40px + 0" :
          -50
        }% + ${
          outerCoordinates[1] + dimensions.margin.top + dimensions.boundedRadius
        }px))`)

            const date = angleScale.invert(angle)
            const dateString = d3.timeFormat("%Y-%m-%d")(date)

            const dataPoint = newData.find(d => d.date == dateString)
            if (!dataPoint) return

            const noValue = NaN



            tooltip.select("#tooltip-date")
                .text(d3.timeFormat("%B %-d")(date))
            tooltip.select("#tooltip-temperature-min")
                .html(`${d3.format(".1f")(
          temperatureMinAccessor(dataPoint))
        }	\xB0F`)
            tooltip.select("#tooltip-temperature-max")
                .html(`${d3.format(".1f")(
          temperatureMaxAccessor(dataPoint))
        }	\xB0F`)
            tooltip.select("#tooltip-humidity")
                .html(`${d3.format(".1f")(
          humidityAccessor(dataPoint))
        }	%`)
            tooltip.select("#tooltip-cloud")
                .html(`${d3.format(".1f")(
          cloudAccessor(dataPoint))
        }	%`)


            if (snowAccessor(dataPoint) != undefined) {
                tooltip.select("#tooltip-snow")
                    .html(`${d3.format(".1f")(
                snowAccessor(dataPoint))
        }	mm`)
            }
            else {
                tooltip.select("#tooltip-snow")
                    .text('none')
            }


            if (rainAccessor(dataPoint) != undefined) {
                tooltip.select("#tooltip-rain")
                    .html(`${d3.format(".1f")(
            rainAccessor(dataPoint))
        }	mm`)

            }
            else {
                tooltip.select("#tooltip-rain")
                    .text('none')
            }


            tooltip.select("#tooltip-precipitation-type")
                .text(weatherType(dataPoint))
            tooltip.select(".tooltip-precipitation-type")
                .style("color", precipitationTypeAccessor(dataPoint) ?
                    precipitationTypeColorScale(
                        precipitationTypeAccessor(dataPoint)
                    ) :
                    "#dadadd")
            tooltip.select("#tooltip-temperature-min")
                .style("color", temperatureColorScale(
                    temperatureMinAccessor(dataPoint)
                ))
            tooltip.select("#tooltip-temperature-max")
                .style("color", temperatureColorScale(
                    temperatureMaxAccessor(dataPoint)
                ))
            tooltip.select("#tooltip-rain")
                .style("color", "cornflowerblue")
            tooltip.select("#tooltip-snow")
                .style("color", "#8791a3")

        }

        function onMouseLeave() {
            tooltip.style("opacity", 0)
            tooltipLine.style("opacity", 0)

        }



    }

});
