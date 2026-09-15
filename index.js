const express = require('express');

const app = express();
const PORT = 8000;

const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com"
  },
  {
    id: 2,
    name: "Samantha Reed",
    email: "samantha.reed@example.com"
  },
  {
    id: 3,
    name: "Marcus Chen",
    email: "marcus.chen@example.com"
  }
];

app.get('/', (req , res) => {
     res.send('Hello World')
});

app.get('/users' , (req , res) => {
    res.json(users);
})


app.listen(PORT , ()=>{
    console.log(`server listen on  http://localhost:${PORT}`);
    
})