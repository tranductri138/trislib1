const shouldGo = () => {
  const feSide = {
    reactJS: "https://roadmap.sh/react",
    fe: "https://roadmap.sh/frontend",
  };
  const detail = {
    js: "https://roadmap.sh/javascript",
    nodejs: "https://roadmap.sh/nodejs",
    backEnd: "https://roadmap.sh/backend",
    systemDS: "https://roadmap.sh/system-design",
    softwareArc: "https://roadmap.sh/software-design-architecture",
    devOps: "https://roadmap.sh/devops",
  };
  console.table(detail);
  console.log("-----");
  console.table(feSide);
};

module.exports.shouldGo = shouldGo;
