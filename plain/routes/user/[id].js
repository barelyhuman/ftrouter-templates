module.exports = (req, res) => {
  return res.send({
    param: req.params,
  });
};
