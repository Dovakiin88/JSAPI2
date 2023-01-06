let access_key = 'ac069b475d91d6345c3cd542ac18a18b'
fetch("http://api.coinlayer.com/api/live?access_key=ac069b475d91d6345c3cd542ac18a18b&symbols=BTC,ETH")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error('NOPE');
        }
    })
    .then (data => {
        console.log(data);
        displayInfo(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error))

function displayInfo(data){
    const infoDiv = document.getElementById("bit");
    const info = data.rates["BTC"]
    console.log(data.rates["BTC"])

    infoDiv.appendChild(info)
    
}

fetch("http://api.coinlayer.com/api/live?access_key=ac069b475d91d6345c3cd542ac18a18b&symbols=BTC,ETH")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error('NOPE');
        }
    })
    .then (data => {
        console.log(data);
        displayInfo(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error))

function displayInfoeth(data){
    const infoDiveth = document.getElementById("eth");
    const infoeth = data.rates["ETH"]
    console.log(data.rates["ETH"])

    infoDiveth.appendChild(infoeth)
    
}