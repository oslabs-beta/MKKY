import mongoose from 'mongoose';
import User from '../../../model/user';

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  console.log('i am in the signup route ackend')
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const user = new User({ username, password });
      await user.save();
      res.status(200).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.status(404);
  }
}
