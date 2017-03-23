'use strict';



module.exports = {
validateTRIDNumber : function(idNumber){

if (idNumber == null || typeof(idNumber) !== 'number' || idNumber.toString().length < 11){
	return false;
}

var idNumberArray = [11];
var idNumberString = idNumber.toString();
for(var i = 0; i < 11; i++){
	idNumberArray[i] = idNumberString[i]; 
}

if(idNumberArray[0] == 0 || idNumberArray[0] == 9){
	return false;
}

var oddNumber = 0;
var evenNumber = 0;

for(var i = 0; i < 9; i++){
	if(i % 2 == 0){
		oddNumber += Number(idNumberArray[i]);
	}else if (i % 2 != 0){
		evenNumber += Number(idNumberArray[i]); 
	}
}

var numberT1 = (oddNumber * 3) + evenNumber;
var numberC1 = (10 - (numberT1 % 10)) % 10;
var numberT2 = numberC1 + evenNumber;
var numberT3 = (numberT2 * 3) + oddNumber;
var numberC2 = (10 - (numberT3 % 10)) % 10;

if(numberC1 == idNumberArray[9] && numberC2 == idNumberArray[10]){
	return true;
}

return false;           

}};



