## Web Development Task Runner Boilerplate Codes

### Project Structure
```
.
├── README.md
├── config.json
├── htdocs
│   ├── css
│   ├── images
│   ├── index.php
│   ├── js
│   └── src
│       └── load.php
└── workspace
    ├── grunt
    │   ├── Gruntfile.js
    │   ├── package-lock.json
    │   └── package.json
    ├── js
    └── sass

9 directories, 7 files
```

### Getting Started

 1. Clone the project
 2. Building Grunt
    ```
    $ rm -rf node_modules
    $ sudo npm install -g grunt-cli
    $ cd workspace/grunt
    $ npm install
    ```
 3. Running Grunt
    To run the watch task
    ```
    $ grunt --force
    ```
    To run the build task
    ```
    $ grunt build
