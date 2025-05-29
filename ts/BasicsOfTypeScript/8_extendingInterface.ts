interface NewUser {
  name: string;
  email: string;
  password: string;
}

interface Admin extends NewUser {
  admin: boolean;
}

function createUser(user: Admin) {
  user.name = "Harsh";
  user.email = "harsh@gmail.com";
  user.admin = true;
}
