show();
        function show() {
            let svgInnerHtml = '';
            for (let i = 0; i < numbers.length; i++) {
                svgInnerHtml += createBar(numbers[i], i + 1, i);
            }
            contentDiv.innerHTML = `
                <svg id="chart" width="500" viewBox="0 0 80 60">
                    ${svgInnerHtml}
                </svg><br/>
                Valgt stolpe: <i>${chosenBar}</i>
                <br />
                Verdi:
                <input id="inputNum" type="number" min="1" max="10" oninput="inputValue = this.value" />
                <button onclick="addPole()">Legg til stolpe</button>
                <button id="dCbtn" ${buttonStatus} onclick="changePole()">Endre valgt stolpe</button><br />
                <button id="dRbtn" ${buttonStatus} onclick="removePole()">Fjerne valgt stolpe</button> <br />
                ${errMsg}
                `;
        }
    
        function createBar(number, barNo, id) {
            const width = 8;
            const spacing = 2;
            let x = (barNo - 1) * (width + spacing);
            let height = number * 10;
            let y = 60 - height;
            let color = calcColor(1, 10, barNo);
            let stroke = chosenBar == barNo ? 'stroke="black"' : "";
            chosenBar != 'ingen' ? buttonStatus = 'enabled' : buttonStatus = 'disabled';
            return `<rect id=${id} width="${width}" height="${height}"
            x="${x}" y="${y}" fill="${color}" ${stroke} onclick="chooseBar(${barNo})"></rect>`;
           
        }
    
        function calcColor(min, max, val) {
            var minHue = 240, maxHue = 0;
            var curPercent = (val - min) / (max - min);
            var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
            return colString;
        }