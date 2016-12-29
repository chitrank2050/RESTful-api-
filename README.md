# RESTful-api-
The Practice RESTful api by chitrank agnihotri

#Description<br/>
	1. Get any collection or a list of items at /api/:user/:collection /api/chitrank/demo 
		 (pick any username and collection name)
	2. Get a specific item by /api/:user/:collection/:id /api/chitrank/demo/1
	3. Post a new item {name:'Flash'} to /api/:user/:collection /api/chitrank/demo/1
	   (pick any username and collection name)
	4. What? How did it know my username and collections existed? if a collection doesn't 
		 exist it will create a blank collection for you.
	5. What's the catch?
		a)All data will reset after sometime
		b)Anybody can modify anything...this ain't for your production app.

	What Should my Javascript code look like?
	Get a collection: GET /api/:user/:collection
	$.ajax({
		type: 'GET',
		url: 'http://restful-api-.herokuapp.com/api/chitrank/demo',
		success: function(data) {
			console.log("The data:", data);
		}
	});
	Add a new item: POST /api/:user/:collection
	$.ajax({
		type: 'POST',
		url: 'http://restful-api-.herokuapp.com/api/johnbob/friends',
		data: {name: 'Superman', age: 270},
		success: function(data) {
			console.log("Superman added!", data);
		}
	});
	Get a single item: GET /api/:user/:collection/:id
	$.ajax({
		type: 'GET',
		url: 'http://restful-api-.herokuapp.com/api/chitrank/demo/1',
		success: function(data) {
			console.log("Here's the item!", data);
		}
	});
	Update an item with new data: PUT /api/:user/:collection/:id
	$.ajax({
		type: 'PUT',
		data: {name: 'Iron Man', age: 42},
		url: 'http://restful-api-.herokuapp.com/api/chitrank/demo/1',
		success: function() {
			//no data...just a success (200) status code
			console.log('Updated Successfully!');
		}
	});
	Delete an item: DELETE /api/:user/:collection/:id
	$.ajax({
		type: 'DELETE',
		url: 'http://restful-api-.herokuapp.com/api/chitrank/demo/1',
		success: function() {
			//no data...just a success (200) status code
			console.log('Deleted Successfully!');
		}
	});

#Run 
	1. npm install (to install all the depencies)
	2. npm start (to start a local server at port 3000 and run the project)
#live Demo
https://restful-api-.herokuapp.com/

#Screenshots
1.Landing page
  ![1](https://cloud.githubusercontent.com/assets/13078364/21538882/8c8168c0-cdc7-11e6-9693-d393426ceb18.png)

2.Get all elements
  ![2](https://cloud.githubusercontent.com/assets/13078364/21538884/8d2f0a52-cdc7-11e6-8d4a-e331e346ecc8.png)

3.POST the data
  ![3](https://cloud.githubusercontent.com/assets/13078364/21538883/8c8d9488-cdc7-11e6-9647-201faa410f0d.png)

4.Get element by ID
  ![4](https://cloud.githubusercontent.com/assets/13078364/21538885/8e62d7a0-cdc7-11e6-8c51-16673dc676b1.png)

5.Delete an element
  ![5](https://cloud.githubusercontent.com/assets/13078364/21539007/8ada3dac-cdc8-11e6-8364-daaf06605cdd.png)

6.Update an element
  ![6](https://cloud.githubusercontent.com/assets/13078364/21539008/8afe363a-cdc8-11e6-96aa-81f2e80d5f18.png)
  ![7](https://cloud.githubusercontent.com/assets/13078364/21539006/8ad93be6-cdc8-11e6-942b-9403f88eb147.png)

#Download
	Download via Zip or type git clone https://github.com/chitrank2050/RESTful-api-.git

#About
http://chitrankagnihotri.com
