const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  try {
    // Vérification de l'en-tête Authorization
    const header = req.headers.authorization ?? req.headers.Authorization;
    if (!header) {
      console.error("Authorization header missing");
      return res.status(401).json({ error: "Authorization header is required" });
    }

    // Vérification du format de l'en-tête
    const [type, token] = header.split(/\s+/);
    if (type !== "Bearer") {
      console.error("Invalid Authorization type. Expected 'Bearer'.");
      return res.status(401).json({ error: "Invalid Authorization type" });
    }

    // Vérification et décodage du token
    const secret = process.env.JWT_SECRET ?? "MyVeryVeryVeryFormidableSecret&1L1kE17";
    console.log("Using JWT Secret:", secret);

    let payload;
    try {
      payload = jwt.verify(token, secret);
      console.log("Decoded Payload:", payload);
    } catch (err) {
      console.error("JWT Verification Error:", err.message);
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    // Recherche de l'utilisateur dans la base de données
    const user = await User.findByPk(payload.id);
    if (!user) {
      console.error("User not found for ID:", payload.id);
      return res.status(401).json({ error: "User not found" });
    }

    console.log("User authenticated:", user);
    req.user = user;

    // Passe au middleware suivant
    next();
  } catch (err) {
    console.error("Unexpected error in authentication middleware:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
