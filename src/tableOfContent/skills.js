const { sens1 } = require("./goodSentences");
const { exec } = require("node:child_process");
const hocTiengAnh = require('./hocTienganh')

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
const nodejs =
  "http://www.digitalbreakdown.net/sandbox/Ebooks/Mastering-Node.js.pdf";
const hackerLaw = "https://github.com/dwmkerr/hacker-laws";
const refactorCode =
  "https://github.com/willykraisler/prueba/blob/master/M.Fowler%20et%20al%20-%20Refactoring%20-%20Improving%20the%20Design%20of%20Existing.pdf";
const cleanCode =
  "https://github.com/dev-marko/clean-code-book/blob/master/Clean%20Code%20(%20PDFDrive.com%20).pdf";
const mongodbDesignPattern =
  "https://pepa.holla.cz/wp-content/uploads/2016/11/MongoDB-Applied-Design-Patterns.pdf";

const devMicroserviceNodejs =
  "https://github.com/jidibinlin/Free-DevOps-Books-1/blob/master/book/Developing%20Microservices%20with%20Node.js.pdf";

const devOps =
  "https://github.com/jidibinlin/Free-DevOps-Books-1/blob/master/book/Building%20Microservices%20-%20Designing%20Fine-Grained%20Systems.pdf";

const beginLinuxCmd =
  "https://github.com/jidibinlin/Free-DevOps-Books-1/blob/master/book/Beginning%20the%20Linux%20Command%20Line.pdf";
const nodejsPattern =
  "https://github.com/mystroken/JSBooks/blob/master/%5BNode.js%20Design%20Patterns%20Kindle%20Edition%20by%20Mario%20Casciaro%20-%202014%5D.pdf";
  const alogorithm = 'https://github.com/amilajack/reading/blob/master/JavaScript/Data%20Structures%20and%20Algorithms%20with%20JavaScript.pdf'
const read = () => {
  console.table(tenSkills);

  hocTiengAnh()
  const designPattern =
    "https://github.com/nilgadia/books/blob/master/Design%20Patterns%2C%20Elements%20of%20Reusable%20Object-Oriented%20Software.pdf";
    // message queue
  const enterpriseIntergate =
    "https://github.com/pankajchopra/togaf/blob/master/Addison.Wesley.Enterprise.Integration.Patterns.pdf";
  // exec(`start microsoft-edge:${designPattern}`);
  // exec("start microsoft-edge:" + enterpriseIntergate);
};

module.exports = read;
