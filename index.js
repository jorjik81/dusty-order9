const inquirer = require("inquirer");
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "checkbox",
      message: "Lets make up Table of Content",
      name: "content",
      choices: ["- [Description](#description)",
      "- [Installation](#installation)",
      "- [Usage](#usage)",
      "- [License](#license)",
      "- [Contributing](#contributing)",
      "- [Tests](#tests)",
      "- [Questions](#questions)"],
    },
    {
        type: "input",
        message: "Give some instructions on your project instalation process",
        name: "instalation",
      },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "Give some instructions on your project instalation process",
      name: "instalation",
    },
    {
        type: "input",
        message: "Give some examples or instructions on how to use your project",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "Chose the license type if there is any ",
        name: "license",
        choices:["MIT License",
        "GNU General Public License v3.0",
        "Apache License 2.0",
        "BSD 2-Clause Simplified License",
        "BSD 3-Clause New or Revised License",
        "GNU Lesser General Public License v2.1",
        "GNU Affero General Public License v3.0",
        "Mozilla Public License 2.0",
        "Eclipse Public License 2.0",
        "The Unlicense",
        "Creative Commons Zero v1.0 Universal",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v3.0",
        "Do What The F*ck You Want To Public License",
        "None"],

      },
      {
        type: "input",
        message: "Explain how to test your project",
        name: "Tests",
      },
      {
        type: "input",
        message: "Explain how others can contribute to your project",
        name: "contributing",
      },
      {
        type: "checkbox",
        message: "with any questions please contact me",
        name: "questions",
        choices: ["email at: jorjik81@gmail.com", "call at: 5555555555", "At local Bars and Night clubs "],
      },
      {
        type: "input",
        message: "Mention and thank any individuals, libraries, or resources that have been helpful in your project.",
        name: "Acknowledgments",
      },
  ])
  .then((response) => {
    console.log(response);
    
      exportToMarkdown(response);
  });
  
// ...

function exportToMarkdown(response) {
  let markdown = '## User response\n\n';
  for (const key in response) {
    markdown += `### ${key}\n`; 
    
    if (Array.isArray(response[key])) {
    response[key].forEach((choice) => {
      markdown += `- ${choice}\n`;
    });
  } else {

    markdown += `${response[key]}\n\n`;
    
  }
  markdown += '\n';  
  }

  // Save the Markdown content to a file
  fs.writeFileSync('user_response.md', markdown, 'utf-8');
  console.log('Response exported to user_response.md');
}
