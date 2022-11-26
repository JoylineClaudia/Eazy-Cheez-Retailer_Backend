
var admin = require("firebase-admin");

//Autherization function
async function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    await admin.auth().verifyIdToken(req.headers.authtoken)
      .then(() => {
        next()
      }).catch(() => {
        res.status(403).send('Unauthorized')
    })
  } else {
    res.status(403).send('Unauthorized')
  }
}

module.exports = checkAuth