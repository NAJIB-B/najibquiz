// id lenght is 10 
export function generatePassword() {
  const allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let genPassword = "";
  for (let i = 10; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * allChar.length) + 1;
    genPassword += allChar[randomNumber];
  }
  return genPassword;
}
