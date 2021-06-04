import bcrypt from "bcryptjs";
const users = [
  {
    firstName: "Admin",
    userName: "Admin",
    email: "admin@gmail.com",
    phone: 12345678,
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    firstName: "sanjay",
    lastName: "RD",
    userName: "sanjay Rishidev",
    email: "rishidevsanjay9@gmail.com",
    phone: 9869617375,
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },

  {
    firstName: "bibek",
    lastName: "raj tripathi",
    userName: "Bibek Raj",
    email: "bibek@gmail.com",
    phone: 9869617373,
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default users;
