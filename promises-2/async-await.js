const run = async () => {
    const dataFromGoogle = await fetch('https://google.com')
    const parsedGoogleData = await parseGoogleResult(dataFromGoogle)
    const dataFromIncubator = await fetch(parsedGoogleData[0])
    const dataFromHexlet = await fetch(parsedGoogleData[1])
    const finalData = await processData(dataFromIncubator, dataFromHexlet)
    console.log('SUCCESS')
}

run()


// 3
function processData(data1, data2, callback) {
    // AI, analysis
}
