const greeter = (name = "Anon") => {
  console.log("Hello " + name);
};

greeter("Bob");
greeter();

const greeterForm = ({ username = "anon", email } = {}) => {
  console.log("Hello " + username);
  console.log("mail: " + email);
};

const userData = {
  username: "Name",
  email: "email@...",
};
greeterForm(userData);
greeterForm();
