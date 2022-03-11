const index = async (req, res,) => {
  res.status(200).json({ message: "Welcome to my api", request: req.body });
};

export { index };
