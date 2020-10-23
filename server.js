const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the Contact Keeper API...' });
});

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/contacts', require('./routes/api/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
