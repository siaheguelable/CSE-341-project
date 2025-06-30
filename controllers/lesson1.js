
const handleCurtisRoute = (req, res) => {
  res.send('Hello World! curtis siahe');
};
const handleAboutRoute = (req, res) => {
  res.send('John Doe is a software engineer with 10 years of experience in web development.');
};

module.exports = {
  handleCurtisRoute,
  handleAboutRoute
};