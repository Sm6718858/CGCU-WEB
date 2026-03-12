import express from 'express'
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = express.Router();

const folderPath = path.join(__dirname, 'Data');
console.log(folderPath)

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

const filePath = path.join(folderPath, 'data.json');
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

router.post('/signup', (req, res) => {
  const { email, password, phone } = req.body;

  if (!email || !password || !phone) {
    return res.status(400).json({
      success: false,
      message: "Email and password required"
    });
  }

  let users = [];
  const data = fs.readFileSync(filePath, "utf-8");
  if (data) {
    users = JSON.parse(data);
    if (users.find((user) => user.email === email)) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }
  }

  const newUser = { email, password, phone };
  users.push(newUser);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");

  return res.status(201).json({
    success: true,
    message: "Signup Successfull"
  });

})


router.post('/login', (req, res) => {
  const { email, password } = req.body;
  //   console.log(email,password);

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password required"
    });
  }
  const FileData = fs.readFileSync(filePath, "utf-8");
  const UserData = JSON.parse(FileData);

  if (UserData.find((user) => user.email === email && user.password === password)) {
    return res.status(200).json({
      success: true,
      message: "Login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

export default router;