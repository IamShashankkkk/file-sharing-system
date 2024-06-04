# File-sharing:
--> First of all public and src files are in "client" folder,which are used for frontend of this system.

    -After arranging this file we have to install npm library in out client folder.So, you need to simply run this command "npm install" on client folder in terminal.
    
    -Now,we need to run "npm start" in client folder of terminal or cmd.

    -It takes few minutes "Starting the development server..."and it redirects you on browser at "http://localhost:3000/".Here, our frontend is successfully done.

--> Now, controller,database,models,routes,utils and an empty folder(name:uploads) are placed in "server" folder.

    -You need to install library using followings commands one-by-one.
    1).npm i mongoose
    2).npm i multer
    3).npm i axios
    4).npm i mongodb

    -After run above commands you need to connect this system with mongoDB."www.mongodb.com/atlas"goes to this site and sign up/login.

    -now Create Project > create deployment > choose shared environment > cluster name anything you want > provider-AWS > Region-Mumbai (ap-south-1) > click on create deployment.

    -after that you have to add current IP address & copy username and password and paste in (server>database) db.js file:line:10:     
    const MONGO_URI = `mongodb+srv://username:password@cluster0.klrgmgx.mongodb.net/retryWrites=true&w=majority`;

    -With that you successfully connected with mongoDB.

    -Finally you have to run this command in terminal (server folder) for getting a download link of uploaded files."npm install" &then "npm start".

    -You will get "Server is running on PORT 8000" in output, it means your project successfully run.

All credits Goes To,
  Shashank Rana





# file-sharing-system
