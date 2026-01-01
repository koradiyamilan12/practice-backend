import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  session({
    secret: "mysecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);
express.
app.use(cookieParser("codesnippet"));

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);

  res.send("Hello world");
});

app.get("/login", (req, res) => {
  req.session.user = {
    name: "John",
    email: "john@example.com",
    age: 30,
  };
  res.send(`${req.session.user.name} Logged in`);
});

app.get("/logout", (req, res) => {
  req.session.destroy()
  res.send("Logged out");
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
