import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }
  
    
    const token = authHeader.split(" ")[1];

    const decoded = jwt.decode(token); // Clerk token → decode করলেই হয়

    if (!decoded?.sub) {
      return res.status(401).json({ success: false, message: "Invalid token structure" });
    }

    req.clerkId = decoded.sub; // ✅ Safe place to store clerk ID

    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;

