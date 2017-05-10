//define the List class
function List() {
	this.listData = [];
	this.listSize = 0;
	this.length = length;
	this.displayList = displayList;
	this.findElementInList = findElementInList;
	this.appendToList = appendToList;
	this.insertIntoList = insertIntoList;
	this.contains = contains;
	this.removeFromList = removeFromList;
	this.clearList = clearList;
}

//return the length of the list
function length() {
	return this.listSize;
}

//return the list
function displayList() {
	return this.listData;
}

//find the index of the element
function findElementInList(elem) {
	for (var index = 0; index < this.listData.length; index++) {
		if (this.listData[index] == elem) {
			console.log('Element present at index ' + index);
			return index;
		}
	}
	return -1;
}

//append an element to the list
function appendToList(elem) {
	this.listData[this.listSize++] = elem;
}

//insert the element after another element
function insertIntoList(elem, insertAfter) {
	var insertPosition = this.findElementInList(insertAfter);
	if (insertPosition > -1) {
		this.listData.splice(insertPosition+1, 0, elem);
		this.listSize++;
		return true;
	}
	return 'Wrong InsertAfter Element';
}

//find whether the list contains the element
function contains(elem) {
	for (var i = 0; i < this.listData.length; i++) {
		if (this.listData[i] == elem) {
			return true;
		}
	}
	return false;
}

//remove the element from the list
function removeFromList(elem) {
	var foundAtPosition = this.findElementInList(elem);
		if (foundAtPosition > -1) {
			this.listData.splice(foundAtPosition,1);
			this.listSize--;
			return true;
		}
	return 'Element not present';
}

//clear the whole list
function clearList(){
	this.listData = [];
	this.listSize = 0;
}