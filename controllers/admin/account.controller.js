import bcrypt from "bcryptjs";
import AccountAdmin from "../../models/accountAdmin.model.js";

export const register = async (req, res) => {

  const { fullName, email, password } = req.body;
  
  const checkAccount = await AccountAdmin.findOne(
    {
      email: email,
    }
  )

  if(checkAccount) {
    res.json({
      code: "error",
      message: "Your email is exists!"
    });
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  
  req.body.password = hash;

  const newAccountAdmin = new AccountAdmin(req.body);
  await newAccountAdmin.save(); //0.5s
  res.json(
    {
      code: "success",
      message: "register completed"
    }
  )
}
