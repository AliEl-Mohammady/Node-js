#!/usr/bin/env node 

import { Command } from "commander"; // Import Command from commander
import inquirer from "inquirer"; // Import inquirer
import fs from "fs"; // Import file system module

const program = new Command();
const addFile = "./user_data.json";

const jsonData = [
    {
        type: "input",
        name: "name",
        message: "Enter your name",
    },
    {
        type: "number",
        name: "id",
        message: "Enter your id",
    },
    {
        type: "confirm",
        name: "isadmin",
        message: "Are you admin?",
    },
    {
        type: "password",
        name: "password",
        message: "Enter your password",
    },
    {
        type: "list",
        name: "gender",
        message: "Enter your gender",
        choices: ["male", "female"],
    },
    {
        type: "checkbox",
        name: "hobbies",
        message: "Enter your hobbies",
        choices: ["reading", "playing", "coding"],
    },
];

program
    .version("1.0.0")
    .description("CLI project")
    .name("cli_project");

program
    .command("add")
    .alias("a")
    .description("Add a new user")
    .action(() => {
        inquirer
            .prompt(jsonData)
            .then((answers) => {
                console.log("User Details:");
                console.log(answers);

                // Check if the file exists
                if (fs.existsSync(addFile)) {
                    // Read the existing file
                    fs.readFile(addFile, "utf-8", (err, fileContent) => {
                        if (err) {
                            console.error("Error reading file:", err);
                            process.exit(1);
                        }

                        // Parse and update the file content
                        let fileContentAsObject = [];
                        try {
                            fileContentAsObject = JSON.parse(fileContent);
                        } catch (parseErr) {
                            console.error("Error parsing JSON:", parseErr);
                            process.exit(1);
                        }

                        fileContentAsObject.push(answers);
                        fs.writeFile(addFile, JSON.stringify(fileContentAsObject), (writeErr) => {
                            if (writeErr) {
                                console.error("Error writing to file:", writeErr);
                                process.exit(1);
                            }
                            console.log("User added successfully!");
                        });
                    });
                } else {
                    fs.writeFile(addFile, JSON.stringify([answers], null, 2), (err) => {
                        if (err) {
                            console.error("Error creating file:", err);
                            process.exit(1);
                        }
                        console.log("User added successfully!");
                    });
                }
            })
            .catch((error) => {
                console.error("Error while prompting user input:", error);
            });
    });


program
    .command("list")
    .alias("l")
    .description("List all users")
    .action(() => {
        fs.readFile(addFile, "utf-8", (err, fileContent) => {
            if (err) {
                console.error("Error reading file:", err);
                process.exit(1);
            }
            console.table(JSON.parse(fileContent));
        });
    });

program.parse(process.argv);

