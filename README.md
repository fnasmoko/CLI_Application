# Welcome to CLI Application

# Introduction
_CLI Application is CLI Application is a service to access the log files on the system. Users can open files, change file types, change file locations, as well as change location and change file types. This service uses the JavaScript programming language._

## Getting Help

If you’re stuck, to make easier for you to use this tool.
There are lists of the available commands:
* [**-h**] displays instructions for use
* [**-t**] converts the file to a json or text file, then displays it.
            example: $mytools /var/log/nginx/error.log -t json
                     $mytools /var/log/nginx/error.log -t text
* [**-o**] to move the location of the file, then open it.
            example: $mytools /var/log/nginx/error.log -o /User/johnmayer/Desktop/nginxlog.txt
                     $mytools /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.json

## First Steps
There are lists of library that must be install or do before:
1. npm init
2. edit file package.json, add => "type": "module" in the below of "main"
3. npm install --save inquirer
4. npm install nodemon -g  (optional)
5. npm install --save open
6. npm i fs


Hope it can be useful for you.
Happy developing!
