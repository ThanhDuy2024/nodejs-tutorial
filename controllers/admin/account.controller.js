import AccountAdmin from "../../models/accountAdmin.model.js";
export const register = async (req, res) => {
  const newAccountAdmin = new AccountAdmin(req.body);
  await newAccountAdmin.save(); //0.5s
  res.json(
    {
      code: "success",
      message: "register completed"
    }
  )
}

//fullName
//email
//password
//image
//adress
//roleid