const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./util/fbAuth");
const { getAllScreams, postOneScream } = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

//Screams route
app.get("/screams", getAllScreams);
app.get("/user", FBAuth, getAuthenticatedUser);
app.post("/scream", FBAuth, postOneScream);
app.post("/user", FBAuth, addUserDetails);

// Signup & Login route
app.post("/signup", signup);
app.post("/login", login);

// Upload image route
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);
