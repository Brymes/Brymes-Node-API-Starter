const index = (req, res, next) => {
  res.status(200).json({ message: "Welcome to my api" });
};

module.exports = {
  index,
};
