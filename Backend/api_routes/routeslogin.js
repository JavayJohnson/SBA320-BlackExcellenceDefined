const expressLogin = require('express');
const UserLogin = require('../models/user');
const loginRouter = expressLogin.Router();

loginRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserLogin.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      if (password !== user.password) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      res.json({ message: 'Login successful', userId: user._id });
    } catch (error) {
      res.status(500).json({ error: 'Login failed', details: error.message });
    }
  });
  
  module.exports = loginRouter;