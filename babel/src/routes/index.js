export default async (req, res) => {
  if (req.method === 'GET') {
    res.send({ ping: 'pong' })
    return
  }

  res.statusCode = 404
  res.end()
}
