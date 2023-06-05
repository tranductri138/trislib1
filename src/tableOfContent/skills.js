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
  "Balace",
  "Consult",
  "Market",
];
const readSentences = () => {
  console.log(sens1);
};

const read = () => {
  console.table(tenSkills);
  const designPattern =
    "https://github.com/nilgadia/books/blob/master/Design%20Patterns%2C%20Elements%20of%20Reusable%20Object-Oriented%20Software.pdf";
    const enterpriseIntergate = "https://github.com/pankajchopra/togaf/blob/master/Addison.Wesley.Enterprise.Integration.Patterns.pdf"
  exec(`start microsoft-edge:${designPattern}`);
  exec("start microsoft-edge:"+enterpriseIntergate)
};

module.exports = read;
