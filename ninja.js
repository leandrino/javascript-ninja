function showOtherFunction(func) {
	return func();
}

function returnedFunction() {
	return 'Returned function';
}

console.log( showOtherFunction( returnedFunction ) );
