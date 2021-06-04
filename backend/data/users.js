import bcrypt from "bcryptjs";
const users = [
  {
    firstName: "sanjay",
    lastName: "RD",
    userName: "sanjay Rishidev",
    email: "rishidevsanjay9@gmail.com",
    phoneNumber: 9869617375,
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    firstName: "Admin",
    userName: "Admin",
    email: "admin@gmail.com",
    phoneNumber: 0000000000,
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    firstName: "bibek",
    lastName: "raj tripathi",
    userName: "Bibek Raj",
    email: "bibek@gmail.com",
    phoneNumber: 9869617375,
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default users;
