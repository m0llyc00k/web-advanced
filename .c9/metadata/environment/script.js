{"changed":true,"filter":false,"title":"script.js","tooltip":"/script.js","value":"// API key;\n// const apiKey = \"0353e66df6f1bec42f85ab2aa62ad775\";\n/*global d3*/\n// search base URL\nconst url = \"https://pro.openweathermap.org/data/2.5/forecast/climate?lat=40.781464&lon=-73.966696&appid=0353e66df6f1bec42f85ab2aa62ad775\";\n\n\nfunction fetchSearchData() {\n\n  window\n    .fetch(url)\n    .then(res => res.json())\n    // .then(data => {\n    //     console.log(data)\n    // .then(function(data) {\n    //   document.getElementById(\"Output\").innerHTML =\n    //     JSON.stringify(data);\n    .then(function(data) {\n      const dataset = data[\"list\"]\n   \n\n      // console.log(dataset)\n      // console.log(dataset.list[0].temp.day)\n\n      // for (var i = 0; i < myData.length; i++) {\n      //   console.log(myData[i].temp.day)\n      // }\n      \n      async function drawLineChart() {\n        // const data = await d3.json('./my_weather_data.json')\n        // console.log(data);\n\n        let dimensions = {\n          width: window.innerWidth * 0.9,\n          height: 400,\n          margins: {\n            top: 15,\n            right: 15,\n            bottom: 40,\n            left: 60,\n          }\n        }\n        dimensions.boundedWidth = dimensions.width -\n          dimensions.margins.left -\n          dimensions.margins.right\n        dimensions.boundedHeight = dimensions.height -\n          dimensions.margins.top -\n          dimensions.margins.bottom\n\n        const yAccessor = d => d.temp[\"day\"]\n        // console.log(yAccessor(data[0]))\n        // const parseDate = d3.timeParse(\"%Y-%m-%d\")\n        const xAccessor = d => d[\"dt\"]\n        console.log(xAccessor(dataset[0]))\n\n\n        const wrapper = d3.select(\"#wrapper\")\n          .append(\"svg\")\n          .attr(\"width\", dimensions.width)\n          .attr(\"height\", dimensions.height)\n\n        const bounds = wrapper.append(\"g\")\n          .style(\"transform\", `translate(${\n        dimensions.margins.left\n    }px, ${\n        dimensions.margins.top\n    }px)`)\n\n        //create scales\n\n        const yScale = d3.scaleLinear()\n          .domain(d3.extent(dataset, yAccessor))\n          .range([dimensions.boundedHeight, 0])\n\n        // const freezingTemperaturePlacement = yScale(32)\n        // const freezingTemperatures = bounds.append(\"rect\")\n        //   .attr(\"x\", 0)\n        //   .attr(\"width\", dimensions.boundedWidth)\n        //   .attr(\"y\", freezingTemperaturePlacement)\n        //   .attr(\"height\", dimensions.boundedHeight - freezingTemperaturePlacement)\n        //   .attr(\"fill\", \"#e0f3f3\")\n\n        const xScale = d3.scaleTime()\n          .domain(d3.extent(dataset, xAccessor))\n          .range([0, dimensions.boundedWidth])\n\n\n        //Draw Data\n\n        const lineGenerator = d3.line()\n          .x(d => xScale(xAccessor(d)))\n          .y(d => yScale(yAccessor(d)))\n\n        const line = bounds.append(\"path\")\n          .attr(\"d\", d => lineGenerator(dataset))\n          .attr(\"fill\", \"none\")\n          .attr(\"stroke\", \"cornflowerblue\")\n          .attr(\"stroke-width\", 2)\n\n        // draw the axis\n        const yAxisGenerator = d3.axisLeft()\n          .scale(yScale)\n\n        const yAxis = bounds.append(\"g\")\n          .call(yAxisGenerator)\n\n        const xAxisGenerator = d3.axisBottom()\n          .scale(xScale)\n\n        const xAxis = bounds.append(\"g\")\n          .call(xAxisGenerator)\n          .style(\"transform\", `translateY(${\n        dimensions.boundedHeight\n        }px)`)\n      }\n\n      drawLineChart();\n\n\n    })\n    .catch(error => {\n      console.log(error);\n    })\n\n\n}\n\n\nfetchSearchData()\n","undoManager":{"mark":99,"position":100,"stack":[[{"start":{"row":49,"column":42},"end":{"row":49,"column":49},"action":"remove","lines":["[\"day\"]"],"id":418},{"start":{"row":49,"column":42},"end":{"row":49,"column":43},"action":"insert","lines":["."]},{"start":{"row":49,"column":43},"end":{"row":49,"column":44},"action":"insert","lines":["d"]},{"start":{"row":49,"column":44},"end":{"row":49,"column":45},"action":"insert","lines":["a"]},{"start":{"row":49,"column":45},"end":{"row":49,"column":46},"action":"insert","lines":["y"]}],[{"start":{"row":52,"column":52},"end":{"row":52,"column":53},"action":"remove","lines":["]"],"id":419},{"start":{"row":52,"column":51},"end":{"row":52,"column":52},"action":"remove","lines":["\""]},{"start":{"row":52,"column":50},"end":{"row":52,"column":51},"action":"remove","lines":["t"]},{"start":{"row":52,"column":49},"end":{"row":52,"column":50},"action":"remove","lines":["d"]},{"start":{"row":52,"column":48},"end":{"row":52,"column":49},"action":"remove","lines":["\""]},{"start":{"row":52,"column":47},"end":{"row":52,"column":48},"action":"remove","lines":["["]}],[{"start":{"row":52,"column":47},"end":{"row":52,"column":48},"action":"insert","lines":["."],"id":420},{"start":{"row":52,"column":48},"end":{"row":52,"column":49},"action":"insert","lines":["d"]},{"start":{"row":52,"column":49},"end":{"row":52,"column":50},"action":"insert","lines":["t"]}],[{"start":{"row":75,"column":8},"end":{"row":75,"column":11},"action":"insert","lines":["// "],"id":421},{"start":{"row":76,"column":8},"end":{"row":76,"column":11},"action":"insert","lines":["// "]},{"start":{"row":77,"column":8},"end":{"row":77,"column":11},"action":"insert","lines":["// "]},{"start":{"row":78,"column":8},"end":{"row":78,"column":11},"action":"insert","lines":["// "]},{"start":{"row":79,"column":8},"end":{"row":79,"column":11},"action":"insert","lines":["// "]},{"start":{"row":80,"column":8},"end":{"row":80,"column":11},"action":"insert","lines":["// "]},{"start":{"row":81,"column":8},"end":{"row":81,"column":11},"action":"insert","lines":["// "]}],[{"start":{"row":55,"column":0},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":422}],[{"start":{"row":55,"column":0},"end":{"row":56,"column":0},"action":"remove","lines":["",""],"id":423}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":2},"action":"insert","lines":["  "],"id":424}],[{"start":{"row":55,"column":2},"end":{"row":55,"column":4},"action":"insert","lines":["  "],"id":425}],[{"start":{"row":55,"column":4},"end":{"row":55,"column":6},"action":"insert","lines":["  "],"id":426}],[{"start":{"row":55,"column":6},"end":{"row":55,"column":8},"action":"insert","lines":["  "],"id":427}],[{"start":{"row":55,"column":8},"end":{"row":55,"column":9},"action":"insert","lines":["c"],"id":428},{"start":{"row":55,"column":9},"end":{"row":55,"column":10},"action":"insert","lines":["o"]},{"start":{"row":55,"column":10},"end":{"row":55,"column":11},"action":"insert","lines":["n"]},{"start":{"row":55,"column":11},"end":{"row":55,"column":12},"action":"insert","lines":["s"]},{"start":{"row":55,"column":12},"end":{"row":55,"column":13},"action":"insert","lines":["t"]},{"start":{"row":55,"column":13},"end":{"row":55,"column":14},"action":"insert","lines":["o"]}],[{"start":{"row":55,"column":13},"end":{"row":55,"column":14},"action":"remove","lines":["o"],"id":429},{"start":{"row":55,"column":12},"end":{"row":55,"column":13},"action":"remove","lines":["t"]}],[{"start":{"row":55,"column":12},"end":{"row":55,"column":13},"action":"insert","lines":["o"],"id":430},{"start":{"row":55,"column":13},"end":{"row":55,"column":14},"action":"insert","lines":["l"]},{"start":{"row":55,"column":14},"end":{"row":55,"column":15},"action":"insert","lines":["e"]},{"start":{"row":55,"column":15},"end":{"row":55,"column":16},"action":"insert","lines":["."]},{"start":{"row":55,"column":16},"end":{"row":55,"column":17},"action":"insert","lines":["l"]},{"start":{"row":55,"column":17},"end":{"row":55,"column":18},"action":"insert","lines":["o"]},{"start":{"row":55,"column":18},"end":{"row":55,"column":19},"action":"insert","lines":["g"]}],[{"start":{"row":55,"column":19},"end":{"row":55,"column":21},"action":"insert","lines":["()"],"id":431}],[{"start":{"row":55,"column":20},"end":{"row":55,"column":21},"action":"insert","lines":["y"],"id":432},{"start":{"row":55,"column":21},"end":{"row":55,"column":22},"action":"insert","lines":["A"]}],[{"start":{"row":55,"column":20},"end":{"row":55,"column":22},"action":"remove","lines":["yA"],"id":433},{"start":{"row":55,"column":20},"end":{"row":55,"column":31},"action":"insert","lines":["yAccessor()"]}],[{"start":{"row":55,"column":29},"end":{"row":55,"column":31},"action":"remove","lines":["()"],"id":434}],[{"start":{"row":24,"column":6},"end":{"row":24,"column":9},"action":"insert","lines":["// "],"id":435},{"start":{"row":25,"column":6},"end":{"row":25,"column":9},"action":"insert","lines":["// "]},{"start":{"row":26,"column":6},"end":{"row":26,"column":9},"action":"insert","lines":["// "]}],[{"start":{"row":55,"column":29},"end":{"row":55,"column":30},"action":"insert","lines":["9"],"id":436}],[{"start":{"row":55,"column":29},"end":{"row":55,"column":30},"action":"remove","lines":["9"],"id":437}],[{"start":{"row":55,"column":29},"end":{"row":55,"column":31},"action":"insert","lines":["()"],"id":438}],[{"start":{"row":55,"column":30},"end":{"row":55,"column":31},"action":"insert","lines":["d"],"id":439}],[{"start":{"row":55,"column":31},"end":{"row":55,"column":32},"action":"insert","lines":["a"],"id":440},{"start":{"row":55,"column":32},"end":{"row":55,"column":33},"action":"insert","lines":["t"]},{"start":{"row":55,"column":33},"end":{"row":55,"column":34},"action":"insert","lines":["a"]},{"start":{"row":55,"column":34},"end":{"row":55,"column":35},"action":"insert","lines":["s"]},{"start":{"row":55,"column":35},"end":{"row":55,"column":36},"action":"insert","lines":["e"]},{"start":{"row":55,"column":36},"end":{"row":55,"column":37},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":45},"end":{"row":49,"column":46},"action":"remove","lines":["y"],"id":441},{"start":{"row":49,"column":44},"end":{"row":49,"column":45},"action":"remove","lines":["a"]},{"start":{"row":49,"column":43},"end":{"row":49,"column":44},"action":"remove","lines":["d"]},{"start":{"row":49,"column":42},"end":{"row":49,"column":43},"action":"remove","lines":["."]}],[{"start":{"row":49,"column":42},"end":{"row":49,"column":44},"action":"insert","lines":["[]"],"id":442}],[{"start":{"row":49,"column":43},"end":{"row":49,"column":45},"action":"insert","lines":["\"\""],"id":443}],[{"start":{"row":49,"column":44},"end":{"row":49,"column":45},"action":"insert","lines":["d"],"id":444},{"start":{"row":49,"column":45},"end":{"row":49,"column":46},"action":"insert","lines":["a"]},{"start":{"row":49,"column":46},"end":{"row":49,"column":47},"action":"insert","lines":["y"]}],[{"start":{"row":55,"column":33},"end":{"row":55,"column":37},"action":"remove","lines":["aset"],"id":446},{"start":{"row":55,"column":33},"end":{"row":55,"column":35},"action":"insert","lines":["[]"]}],[{"start":{"row":55,"column":34},"end":{"row":55,"column":35},"action":"insert","lines":["0"],"id":447}],[{"start":{"row":55,"column":33},"end":{"row":55,"column":34},"action":"insert","lines":["a"],"id":448},{"start":{"row":55,"column":34},"end":{"row":55,"column":35},"action":"insert","lines":["s"]},{"start":{"row":55,"column":35},"end":{"row":55,"column":36},"action":"insert","lines":["e"]},{"start":{"row":55,"column":36},"end":{"row":55,"column":37},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":48},"end":{"row":49,"column":49},"action":"remove","lines":["]"],"id":449},{"start":{"row":49,"column":47},"end":{"row":49,"column":48},"action":"remove","lines":["\""]},{"start":{"row":49,"column":46},"end":{"row":49,"column":47},"action":"remove","lines":["y"]},{"start":{"row":49,"column":45},"end":{"row":49,"column":46},"action":"remove","lines":["a"]},{"start":{"row":49,"column":44},"end":{"row":49,"column":45},"action":"remove","lines":["d"]},{"start":{"row":49,"column":43},"end":{"row":49,"column":44},"action":"remove","lines":["\""]},{"start":{"row":49,"column":42},"end":{"row":49,"column":43},"action":"remove","lines":["["]}],[{"start":{"row":49,"column":42},"end":{"row":49,"column":43},"action":"insert","lines":["."],"id":450},{"start":{"row":49,"column":43},"end":{"row":49,"column":44},"action":"insert","lines":["d"]},{"start":{"row":49,"column":44},"end":{"row":49,"column":45},"action":"insert","lines":["a"]},{"start":{"row":49,"column":45},"end":{"row":49,"column":46},"action":"insert","lines":["y"]}],[{"start":{"row":53,"column":8},"end":{"row":53,"column":11},"action":"remove","lines":["// "],"id":451}],[{"start":{"row":55,"column":0},"end":{"row":56,"column":0},"action":"remove","lines":["        console.log(yAccessor(dataset[0]))",""],"id":452}],[{"start":{"row":53,"column":34},"end":{"row":53,"column":35},"action":"insert","lines":["s"],"id":453},{"start":{"row":53,"column":35},"end":{"row":53,"column":36},"action":"insert","lines":["e"]},{"start":{"row":53,"column":36},"end":{"row":53,"column":37},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":37},"end":{"row":49,"column":39},"action":"insert","lines":["[]"],"id":454}],[{"start":{"row":49,"column":38},"end":{"row":49,"column":39},"action":"insert","lines":["i"],"id":455}],[{"start":{"row":49,"column":39},"end":{"row":49,"column":40},"action":"remove","lines":["]"],"id":456},{"start":{"row":49,"column":38},"end":{"row":49,"column":39},"action":"remove","lines":["i"]},{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"remove","lines":["["]}],[{"start":{"row":49,"column":41},"end":{"row":49,"column":42},"action":"remove","lines":["p"],"id":457}],[{"start":{"row":49,"column":41},"end":{"row":49,"column":42},"action":"remove","lines":["."],"id":458},{"start":{"row":49,"column":40},"end":{"row":49,"column":41},"action":"remove","lines":["m"]},{"start":{"row":49,"column":39},"end":{"row":49,"column":40},"action":"remove","lines":["e"]},{"start":{"row":49,"column":38},"end":{"row":49,"column":39},"action":"remove","lines":["t"]},{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"remove","lines":["."]},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"remove","lines":["t"]},{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"remove","lines":["s"]},{"start":{"row":49,"column":34},"end":{"row":49,"column":35},"action":"remove","lines":["i"]},{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"remove","lines":["l"]},{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"remove","lines":["."]}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"insert","lines":["["],"id":459},{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"insert","lines":["\""]}],[{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"insert","lines":["\""],"id":460},{"start":{"row":49,"column":38},"end":{"row":49,"column":39},"action":"insert","lines":["]"]}],[{"start":{"row":52,"column":43},"end":{"row":52,"column":50},"action":"remove","lines":["list.dt"],"id":461},{"start":{"row":52,"column":42},"end":{"row":52,"column":43},"action":"remove","lines":["."]}],[{"start":{"row":52,"column":42},"end":{"row":52,"column":44},"action":"insert","lines":["[]"],"id":462}],[{"start":{"row":52,"column":43},"end":{"row":52,"column":45},"action":"insert","lines":["\"\""],"id":463}],[{"start":{"row":52,"column":44},"end":{"row":52,"column":45},"action":"insert","lines":["d"],"id":464},{"start":{"row":52,"column":45},"end":{"row":52,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":52,"column":8},"end":{"row":52,"column":11},"action":"insert","lines":["// "],"id":465}],[{"start":{"row":52,"column":52},"end":{"row":53,"column":0},"action":"insert","lines":["",""],"id":466},{"start":{"row":53,"column":0},"end":{"row":53,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":53,"column":8},"end":{"row":53,"column":49},"action":"insert","lines":["const xAccessor = d => parseDate(d[\"dt\"])"],"id":467}],[{"start":{"row":53,"column":31},"end":{"row":53,"column":41},"action":"remove","lines":["parseDate("],"id":468}],[{"start":{"row":53,"column":38},"end":{"row":53,"column":39},"action":"remove","lines":[")"],"id":469}],[{"start":{"row":53,"column":34},"end":{"row":53,"column":36},"action":"remove","lines":["dt"],"id":470},{"start":{"row":53,"column":34},"end":{"row":53,"column":35},"action":"insert","lines":["s"]},{"start":{"row":53,"column":35},"end":{"row":53,"column":36},"action":"insert","lines":["u"]},{"start":{"row":53,"column":36},"end":{"row":53,"column":37},"action":"insert","lines":["n"]},{"start":{"row":53,"column":37},"end":{"row":53,"column":38},"action":"insert","lines":["r"]},{"start":{"row":53,"column":38},"end":{"row":53,"column":39},"action":"insert","lines":["i"]},{"start":{"row":53,"column":39},"end":{"row":53,"column":40},"action":"insert","lines":["s"]}],[{"start":{"row":53,"column":34},"end":{"row":53,"column":40},"action":"remove","lines":["sunris"],"id":471},{"start":{"row":53,"column":34},"end":{"row":53,"column":41},"action":"insert","lines":["sunrise"]}],[{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"remove","lines":["x"],"id":472}],[{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"insert","lines":["y"],"id":474}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"insert","lines":["."],"id":475}],[{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"insert","lines":["l"],"id":476},{"start":{"row":49,"column":34},"end":{"row":49,"column":35},"action":"insert","lines":["i"]},{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"insert","lines":["a"]},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"remove","lines":["t"],"id":477},{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"remove","lines":["a"]}],[{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"insert","lines":["s"],"id":478},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"insert","lines":["t"]},{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"insert","lines":["."]},{"start":{"row":49,"column":38},"end":{"row":49,"column":39},"action":"insert","lines":["t"]},{"start":{"row":49,"column":39},"end":{"row":49,"column":40},"action":"insert","lines":["e"]},{"start":{"row":49,"column":40},"end":{"row":49,"column":41},"action":"insert","lines":["m"]},{"start":{"row":49,"column":41},"end":{"row":49,"column":42},"action":"insert","lines":["p"]}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"insert","lines":["a"],"id":479},{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"insert","lines":["t"]},{"start":{"row":49,"column":34},"end":{"row":49,"column":35},"action":"insert","lines":["a"]},{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"insert","lines":["s"]},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"insert","lines":["e"]},{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":55},"end":{"row":49,"column":56},"action":"insert","lines":["\\"],"id":480}],[{"start":{"row":49,"column":55},"end":{"row":49,"column":56},"action":"remove","lines":["\\"],"id":481},{"start":{"row":49,"column":54},"end":{"row":49,"column":55},"action":"remove","lines":["]"]},{"start":{"row":49,"column":53},"end":{"row":49,"column":54},"action":"remove","lines":["\""]},{"start":{"row":49,"column":52},"end":{"row":49,"column":53},"action":"remove","lines":["y"]},{"start":{"row":49,"column":51},"end":{"row":49,"column":52},"action":"remove","lines":["a"]},{"start":{"row":49,"column":50},"end":{"row":49,"column":51},"action":"remove","lines":["d"]},{"start":{"row":49,"column":49},"end":{"row":49,"column":50},"action":"remove","lines":["\""]},{"start":{"row":49,"column":48},"end":{"row":49,"column":49},"action":"remove","lines":["["]}],[{"start":{"row":49,"column":48},"end":{"row":49,"column":49},"action":"insert","lines":["."],"id":482},{"start":{"row":49,"column":49},"end":{"row":49,"column":50},"action":"insert","lines":["d"]},{"start":{"row":49,"column":50},"end":{"row":49,"column":51},"action":"insert","lines":["a"]},{"start":{"row":49,"column":51},"end":{"row":49,"column":52},"action":"insert","lines":["y"]}],[{"start":{"row":49,"column":51},"end":{"row":49,"column":52},"action":"remove","lines":["y"],"id":483},{"start":{"row":49,"column":50},"end":{"row":49,"column":51},"action":"remove","lines":["a"]},{"start":{"row":49,"column":49},"end":{"row":49,"column":50},"action":"remove","lines":["d"]},{"start":{"row":49,"column":48},"end":{"row":49,"column":49},"action":"remove","lines":["."]}],[{"start":{"row":49,"column":48},"end":{"row":49,"column":50},"action":"insert","lines":["[]"],"id":484}],[{"start":{"row":49,"column":49},"end":{"row":49,"column":51},"action":"insert","lines":["\"\""],"id":485}],[{"start":{"row":49,"column":50},"end":{"row":49,"column":51},"action":"insert","lines":["d"],"id":486},{"start":{"row":49,"column":51},"end":{"row":49,"column":52},"action":"insert","lines":["a"]},{"start":{"row":49,"column":52},"end":{"row":49,"column":53},"action":"insert","lines":["y"]}],[{"start":{"row":49,"column":55},"end":{"row":49,"column":57},"action":"insert","lines":["[]"],"id":487}],[{"start":{"row":49,"column":56},"end":{"row":49,"column":57},"action":"insert","lines":["0"],"id":488}],[{"start":{"row":49,"column":57},"end":{"row":49,"column":58},"action":"remove","lines":["]"],"id":489},{"start":{"row":49,"column":56},"end":{"row":49,"column":57},"action":"remove","lines":["0"]},{"start":{"row":49,"column":55},"end":{"row":49,"column":56},"action":"remove","lines":["["]},{"start":{"row":49,"column":54},"end":{"row":49,"column":55},"action":"remove","lines":["]"]}],[{"start":{"row":49,"column":54},"end":{"row":49,"column":55},"action":"insert","lines":["]"],"id":490}],[{"start":{"row":49,"column":54},"end":{"row":49,"column":55},"action":"remove","lines":["]"],"id":491},{"start":{"row":49,"column":53},"end":{"row":49,"column":54},"action":"remove","lines":["\""]},{"start":{"row":49,"column":52},"end":{"row":49,"column":53},"action":"remove","lines":["y"]},{"start":{"row":49,"column":51},"end":{"row":49,"column":52},"action":"remove","lines":["a"]},{"start":{"row":49,"column":50},"end":{"row":49,"column":51},"action":"remove","lines":["d"]},{"start":{"row":49,"column":49},"end":{"row":49,"column":50},"action":"remove","lines":["\""]},{"start":{"row":49,"column":48},"end":{"row":49,"column":49},"action":"remove","lines":["["]}],[{"start":{"row":49,"column":48},"end":{"row":49,"column":49},"action":"insert","lines":["."],"id":492},{"start":{"row":49,"column":49},"end":{"row":49,"column":50},"action":"insert","lines":["d"]},{"start":{"row":49,"column":50},"end":{"row":49,"column":51},"action":"insert","lines":["a"]},{"start":{"row":49,"column":51},"end":{"row":49,"column":52},"action":"insert","lines":["y"]}],[{"start":{"row":53,"column":42},"end":{"row":53,"column":43},"action":"remove","lines":["]"],"id":493},{"start":{"row":53,"column":41},"end":{"row":53,"column":42},"action":"remove","lines":["\""]},{"start":{"row":53,"column":40},"end":{"row":53,"column":41},"action":"remove","lines":["e"]},{"start":{"row":53,"column":39},"end":{"row":53,"column":40},"action":"remove","lines":["s"]},{"start":{"row":53,"column":38},"end":{"row":53,"column":39},"action":"remove","lines":["i"]},{"start":{"row":53,"column":37},"end":{"row":53,"column":38},"action":"remove","lines":["r"]},{"start":{"row":53,"column":36},"end":{"row":53,"column":37},"action":"remove","lines":["n"]},{"start":{"row":53,"column":35},"end":{"row":53,"column":36},"action":"remove","lines":["u"]},{"start":{"row":53,"column":34},"end":{"row":53,"column":35},"action":"remove","lines":["s"]},{"start":{"row":53,"column":33},"end":{"row":53,"column":34},"action":"remove","lines":["\""]},{"start":{"row":53,"column":32},"end":{"row":53,"column":33},"action":"remove","lines":["["]}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":32},"action":"remove","lines":["        const xAccessor = d => d"],"id":494},{"start":{"row":52,"column":52},"end":{"row":53,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":52,"column":8},"end":{"row":52,"column":11},"action":"remove","lines":["// "],"id":495}],[{"start":{"row":52,"column":42},"end":{"row":52,"column":43},"action":"insert","lines":["."],"id":496},{"start":{"row":52,"column":43},"end":{"row":52,"column":44},"action":"insert","lines":["l"]},{"start":{"row":52,"column":44},"end":{"row":52,"column":45},"action":"insert","lines":["i"]},{"start":{"row":52,"column":45},"end":{"row":52,"column":46},"action":"insert","lines":["s"]},{"start":{"row":52,"column":46},"end":{"row":52,"column":47},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"remove","lines":["t"],"id":497},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"remove","lines":["e"]},{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"remove","lines":["s"]},{"start":{"row":49,"column":34},"end":{"row":49,"column":35},"action":"remove","lines":["a"]},{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"remove","lines":["t"]},{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"remove","lines":["a"]}],[{"start":{"row":49,"column":45},"end":{"row":49,"column":46},"action":"remove","lines":["y"],"id":498},{"start":{"row":49,"column":44},"end":{"row":49,"column":45},"action":"remove","lines":["a"]},{"start":{"row":49,"column":43},"end":{"row":49,"column":44},"action":"remove","lines":["d"]},{"start":{"row":49,"column":42},"end":{"row":49,"column":43},"action":"remove","lines":["."]},{"start":{"row":49,"column":41},"end":{"row":49,"column":42},"action":"remove","lines":["p"]},{"start":{"row":49,"column":40},"end":{"row":49,"column":41},"action":"remove","lines":["m"]},{"start":{"row":49,"column":39},"end":{"row":49,"column":40},"action":"remove","lines":["e"]},{"start":{"row":49,"column":38},"end":{"row":49,"column":39},"action":"remove","lines":["t"]},{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"remove","lines":["."]},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"remove","lines":["t"]}],[{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"insert","lines":["t"],"id":499}],[{"start":{"row":49,"column":33},"end":{"row":49,"column":37},"action":"remove","lines":["list"],"id":500}],[{"start":{"row":19,"column":3},"end":{"row":19,"column":33},"action":"remove","lines":["   const myData = dataset.list"],"id":501}],[{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["."],"id":502},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["l"]},{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"insert","lines":["i"]},{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":["s"]},{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"remove","lines":["t"],"id":503},{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"remove","lines":["s"]},{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"remove","lines":["i"]},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"remove","lines":["l"]},{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"remove","lines":["."]}],[{"start":{"row":18,"column":26},"end":{"row":18,"column":28},"action":"insert","lines":["[]"],"id":504}],[{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["l"],"id":505},{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"insert","lines":["i"]},{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":["s"]},{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":52,"column":43},"end":{"row":52,"column":47},"action":"remove","lines":["list"],"id":506},{"start":{"row":52,"column":42},"end":{"row":52,"column":43},"action":"remove","lines":["."]}],[{"start":{"row":53,"column":20},"end":{"row":53,"column":21},"action":"remove","lines":["y"],"id":507}],[{"start":{"row":53,"column":20},"end":{"row":53,"column":21},"action":"insert","lines":["x"],"id":508}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"remove","lines":["."],"id":509}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":34},"action":"insert","lines":["[]"],"id":510}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":34},"action":"remove","lines":["[]"],"id":511}],[{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"insert","lines":["."],"id":512},{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"insert","lines":["t"]},{"start":{"row":49,"column":34},"end":{"row":49,"column":35},"action":"insert","lines":["e"]},{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"insert","lines":["m"]},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"insert","lines":["p"]}],[{"start":{"row":49,"column":37},"end":{"row":49,"column":39},"action":"insert","lines":["[]"],"id":513}],[{"start":{"row":49,"column":38},"end":{"row":49,"column":40},"action":"insert","lines":["\"\""],"id":514}],[{"start":{"row":49,"column":39},"end":{"row":49,"column":40},"action":"insert","lines":["d"],"id":515},{"start":{"row":49,"column":40},"end":{"row":49,"column":41},"action":"insert","lines":["a"]},{"start":{"row":49,"column":41},"end":{"row":49,"column":42},"action":"insert","lines":["y"]}],[{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["\""],"id":516}],[{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"insert","lines":["\""],"id":517}],[{"start":{"row":52,"column":31},"end":{"row":52,"column":41},"action":"remove","lines":["parseDate("],"id":518}],[{"start":{"row":52,"column":38},"end":{"row":52,"column":39},"action":"remove","lines":[")"],"id":519}],[{"start":{"row":51,"column":8},"end":{"row":51,"column":11},"action":"insert","lines":["// "],"id":520}]]},"ace":{"folds":[],"scrolltop":671.5,"scrollleft":0,"selection":{"start":{"row":51,"column":0},"end":{"row":52,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":34,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1648084071753}