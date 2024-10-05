router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(400).json({ error: 'Registration failed', details: error.message });
    }
  });