import bcrypt from "bcrypt";
import prisma from "./src/prisma";


async function updatePassword() {
  const email = "admin@gmail.com"; 
  const password = "admin123"; 
  const hashedPassword = await bcrypt.hash(password, 10); 

  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword }, 
  });

  console.log("Password updated successfully");
}

updatePassword();
