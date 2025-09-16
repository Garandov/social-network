import express from "express";
import dotenv from "dotenv";
import cors from "cors";  
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import UserModel from "./models/User.js";
import PostModel from "./models/Post.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.o9c10fo.mongodb.net/`)
.then(() =>console.log("DB connected"))
.catch(err => console.error("DB error",err));


app.use(cors());
app.use(express.json());


app.post("/api/reg", async (req,res) => {
try {
    const {username,email,password,} = req.body
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const doc = new User({
        username,
        email,
        password:hash,
    });
    const user = await doc.save()
    res.json ({message:"Успешная регистрация",user});
}
catch(err) {
    res.status(500).json({message:"Ошибка при регистрации",error: err.message})
}
})
app.listen(PORT, () => {
  console.log("✅ Backend запущен на порту", PORT);
});




app.post 