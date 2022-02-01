fetch("https://realty-mole-property-api.p.rapidapi.com/zipCodes/29611", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
		"x-rapidapi-key": "5c89611ddemshc3f23beaa6d4b27p118a94jsnca784be3a0c3"
	}
})
.then(response => {
	return response.json()
})
.then (data =>{
    console.log(data)
})
	

