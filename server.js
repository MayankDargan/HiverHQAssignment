
var textract = require('textract'),
  url = "https://hiverhq.com/";
var words = [], wordcnt;

/*Extracting text from HiverHQ and creating a map of it.*/
textract.fromUrl(url, function(error,text){
	if(!error){
		wordcnt = text.replace(/[^\w\s]/g, "").split(/\s+/).reduce(function(map, word){
			map[word.toLowerCase()] = (map[word.toLowerCase()]||0)+1;
			return map;
		}, Object.create(null));
		console.log(sortObject(wordcnt).splice(0,5)); //using splice to print only top 5 results
	}else{
		console.log("We’ve encountered an error: "+ error);
	}
});

/*Sorting the object on the basis of the value in descreasing order*/
function sortObject(obj) {
    var arr = [];
    var prop;
    for (prop in obj) {
        if (obj[prop]) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) {
        return b.value - a.value;
    });
    return arr; // returns array
}
