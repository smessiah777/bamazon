var mysql = require("mysql");
var inquirer = require("inquirer");
// var table = require("table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected");
});

displayTable();

function displayTable() {
  connection.query("select * from products", function(err, data) {
    if (err) {
      console.log(err);
    }

    console.log(data);

    // config = {
    //   columns: {
    //     0: {
    //       alignment: "left",
    //       minWidth: 10
    //     },
    //     1: {
    //       alignment: "center",
    //       minWidth: 10
    //     },
    //     2: {
    //       alignment: "right",
    //       minWidth: 10
    //     }
    //   }
    // };

    // output = table(data, config);
    // console.log(output);
  });
  startMenu();
}

function startMenu() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "prompt1",
        message: "Please Enter product ID"
      },
      {
        type: "input",
        name: "prompt2",
        message: "How many would you like to purchase?"
      }
    ])
    .then(answers => {
      if (answers.prompt1) {
        connection.query("SELECT id FROM products", function(err, data) {
          if (err) {
            console.log(err);
          }
        });
      } else if (answers.prompt2) {
      }
      console.log("input entered");
      displayTable();
    });
}
