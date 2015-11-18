# Introduction to Node.js

what is node?
-----------------
It is an event driven non-blocking i/o *server* that is asynchronous in nature.
It is written using JavaScript.

## How it works in a Nutshell
	1. Node receives events
	2. It stashes them in an event queue
	3. The events are then pushed to a thread pull for processing.
	4. Once a thread is done, it communicates its results back to Node.

## concepts 
	- Event driven 
	- Non -blocking
		+ In procedural language, any heavy and time consuming operations would be ran in a separate thread from the main one.
		+ Node provides us with the ability to write our code using an asynchronous and event driven style where callbacks are ran when events are received.
		+ This gives the ability to have multiple i/o operations within a single thread and not have them 'block' (wait for the previous process to run before executing the main process)
	- Asynchronous
		+ Node uses a procedural style of computation
		+ It allows code to be executed in no particular order where the previous operation does not have to finish before the next one can begin 
	- Eventloop
	- Threads
		+ When a code is running in a compiler, the compiler creates a main process within which it will execute your code 

	## Common syntax used in Node
		1. Running a file using Node
		```
		// in the folder where the js file is defined run node <filename>
		```
	 2Importing packages and files into your main file
		```
		//this imports a natively defined nodejs package
		require('http');

		
		// This imports a module from a folder within your app
		require('/models/movie.js');
		  

		``` we use the require function to export modules defined in other files into our main file
		http.createServer
		3. Startisng a node project
			/// run this in the terminal within your app directory
		npm init

		4. Adding a module to your project using npm.
			```
				npm install --save <module_name>
			```

	# RESTFUL ROUTES 
		## What is REST?
			-REST is an acronym that stands for Representational State Transfer
			- It was developed to provide a standard through which the client could communicate with the server over the web.
			
		##Why REST?
		- REST provides a standard method for resource manipulation server.
		##Components of REST
			- A URL that represents the resource 
			- A HTTP verb/method that maps to a controller on the server

		##Using REST in a Web Application
		1. Client sends a request: `GET/movie/198`
		2. The server's route maps that request and the verb to a controller's action:
			```
			The request/movie/198 would be mapped to a controller called Movie which would have an action called show to handle that request
		3. The show action will communicate with the Movie Model and query it for a movie with the id 198.
			```

		## Common patterns of restful verbs and actions
		Assuming you have a resource called photo. The RESTFUL routes that would apply to that resource would be as follows
			1. GET/photos/
				- Maps out to a controller called PhotosController which has a method called index
		##CORS
			- This is an acronym for Cross Origin Resource Sharing.
			- It refers to the ability of one domain to use/ask for resources from another domain.
			For example: 
				The html with this image tag is being served. 
				from http://domain-a.com <img src= "http://domain-a.com/mouse.jpg" 
				It is requesting an image from a http://domain-b.com which is a different domain from where it's being hosted.
			- This works when a html page does it, but does NOT work when using scripts to perform the request. If a <script on that page were to ask for the image using the XMLHttpRequest object (using Ajax), the browser would throw a CORS server error
			- The only way that a script can access a different resource from other domain is if the server on that domain allows it to.
			- This is done by adding that domain to the request Header known as Access-Control-Allow-Origin
			```
			Access-Control-Allow-Origin: <allowed domains or * to allow any domain>
			```


			##NoSQL Databases
			 - These are databases that define ways of accessing and storing data in ways other than using relations

			 ## Why NoSQL
			 	- Was developed as a response to the rising demand of: 
			 			+ on-demand
			 			+ scalable
			 			+ easily replicable
			 			+ minimal configuration
			 		databases that were required to respond to the needs of modern applications
			 ##Types of NoSQL
			 	- Document databases
			 	- Graph stores
			 	- Key-value stores
			 	- Wide-column stores

			## Looking for help
		 		- Documentation 
		 		- Forums
		 		- Tutorials
		 		- search engine - Google, Bing, DuckDuckGo