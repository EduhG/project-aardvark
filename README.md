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

		
