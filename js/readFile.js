function readFile(){
	htmlobj = $.ajax({ 
				url:"./saves/save.json", 
				async:false, 
				dataType:"JSON" 
			}); 
	console.log(htmlobj.responseText); 
	return eval(htmlobj.responseText); 
}