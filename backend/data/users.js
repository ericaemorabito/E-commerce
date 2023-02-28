import bcrypt from 'bcryptjs';

const users = [
  { 
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10), // hashes password
    isAdmin: true
  },
  { 
    name: 'Tarzan',
    email: 'tarzan@example.com',
    password: bcrypt.hashSync('123456', 10), // hashes password
  },
  { 
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10), // hashes password
  },
];

export default users;