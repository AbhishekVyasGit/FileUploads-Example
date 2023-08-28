## FileUploads-Example  =>

In this project directory, we uploads the file on the server and save it into our database,  so we can run :

### `npm run start`

It runs the server on port 5000 and connect successfully our server to databse.\

### `What we are going to do?`

- For uploading files you need to ensure that your frontend form is using encType of multipart/form-data 
- and then you pass the file in the post request and this then we upload this file to local system and 
- then optionally push it to cloud (In production systems DO NOT put things inside local system ) and once the file is saved,
- we will use the file path and save it in the database for retrieval later.



### `multer npm package`

- There is a NPM package called 'multer' that makes it easy to handle file uploads. And  adds a body object and a file or files object to the request object.
- The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.




