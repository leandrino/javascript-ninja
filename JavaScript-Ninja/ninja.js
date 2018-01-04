function sum() {
	return 1+2;
}

console.log( sum() );

var sum2 = function() {
	return 3 + 2;
};

console.log( sum2() );

var sum3 = function otherSum() {
	return 5 + 8;
};

console.log( sum3() );
console.log( otherSum() );
