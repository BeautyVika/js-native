//let promise = {}

// button.addEventListerner('click', () => {}) // почему здесь не может быть промисов?
// app.post('/users', (req, res) => {})
// store.subscribe(() => {})

// promise._status = 'pending'; // 'resolved' , 'rejected'

// асинхронным кодом (fetch, setInterval, setTimeout, fs.read, db.users.find)
// ад коллбеков - callback hell...

// коллбеки никуда не делись, каким  же образом мы решаем проблему коллбек-хелла?

promise.then(() => {
}) // -> 'resolved'
promise.catch(() => {
}) // -> 'rejected'

//1 ask google for best JS courses
//2 take 2 first results and load data from this sites
//3 take results from this sites and processData

//1
fetch('https://google.com', (googleData) => {
    parseGoogleResult(googleData, (result) => {
        const processDataSuccessHandler = () => {
            console.log("Data is ready")
        }
        // 2
        fetch(result[0], (dataFromIncubator) => {
            // 2
            fetch(result[1], (dataFromHexlet) => {
                processData(dataFromIncubator, dataFromHexlet, processDataSuccessHandler)
            })
        })
    })



})

// 3
function processData(data1, data2, callback) {
    // AI, analysis
}
