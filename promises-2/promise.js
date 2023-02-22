let parsedGoogleData = null;
let dataFromIncubator = null

fetch('https://google.com')
    .then((data) => {
        parsedGoogleData = parseGoogleResult(data)
        return fetch(parsedGoogleData[0])
    })
    .then((data) => {
        dataFromIncubator = data
        return fetch(parsedGoogleData[1])
    })
    .then((dataFromHexlet) => {
        return processData(dataFromIncubator, dataFromHexlet)
    })
    .then(function processDataSuccessHandler(finalData) {
        console.log("SUCCESS")
    })



// 3
function processData(data1, data2, callback) {
    // AI, analysis
}
