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
});



app.get('/users/:id', (req , res) =>{
    const userId = req.params.id;

    const user = users.find(u => u.id === +userId);


    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
})


// POST - Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


// PUT - Update an existing user
app.put('/users/:id', (req, res) => {
    const userId = +req.params.id;

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { name, email } = req.body;

    user.name = name;
    user.email = email;

    res.json(user);
});


// DELETE - Delete an existing user
app.delete('/users/:id', (req, res) => {
    const userId = +req.params.id;

    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.json({
        message: 'User deleted successfully',
        user: deletedUser[0]
    });
});


app.listen(PORT , ()=>{
    console.log(`server listen on  http://localhost:${PORT}`);
    
})