const { sens1 } = require("./goodSentences");
const { exec } = require("node:child_process");

const tenSkills = [
  "Design",
  "Decide",
  "Simplify",
  "Code",
  "Document",
  "Communicate",
  "Estimate",
  "Balance",
  "Consult",
  "Market",
];
const readSentences = () => {
  console.log(sens1);
};
const hackerLaw = "https://github.com/dwmkerr/hacker-laws";
const refactorCode =
  "https://github.com/willykraisler/prueba/blob/master/M.Fowler%20et%20al%20-%20Refactoring%20-%20Improving%20the%20Design%20of%20Existing.pdf";
const cleanCode =
  "https://github.com/dev-marko/clean-code-book/blob/master/Clean%20Code%20(%20PDFDrive.com%20).pdf";
const mongodbDesignPattern =
  "https://pepa.holla.cz/wp-content/uploads/2016/11/MongoDB-Applied-Design-Patterns.pdf";

const devMicroserviceNodejs = 'https://github.com/jidibinlin/Free-DevOps-Books-1/blob/master/book/Developing%20Microservices%20with%20Node.js.pdf'
const read = () => {
  console.table(tenSkills)
  const designPattern =
    "https://github.com/nilgadia/books/blob/master/Design%20Patterns%2C%20Elements%20of%20Reusable%20Object-Oriented%20Software.pdf";
  const enterpriseIntergate =
    "https://github.com/pankajchopra/togaf/blob/master/Addison.Wesley.Enterprise.Integration.Patterns.pdf";
  exec(`start microsoft-edge:${designPattern}`);
  exec("start microsoft-edge:" + enterpriseIntergate);
};



module.exports = read;
