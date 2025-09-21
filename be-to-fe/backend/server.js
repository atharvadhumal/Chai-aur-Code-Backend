import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id:1,
      title:'joke no.1',
      content:'hahaha'
    },
    {
      id:2,
      title:'joke no.2',
      content:'hahaha'
    },
    {
      id:3,
      title:'joke no.3',
      content:'hahaha'
    },
    {
      id:4,
      title:'joke no.4',
      content:'hahaha'
    },
    {
      id:5,
      title:'joke no.5',
      content:'hahaha'
    },
  ]
  res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on PORT=${port}`);
});
