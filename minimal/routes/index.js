module.exports = (req, res) => {
  res.send({
    status: 'up',
    query: req.query,
  });
};
