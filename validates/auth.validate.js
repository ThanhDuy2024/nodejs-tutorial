import Joi from "joi";

export const registerValidate = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().min(5).max(50).required()
      .messages({
        "string.min": "fullName must be least 5 character!",
        "string.max": "fullName must not more than 50 character!",
        "string.empty": "fullName is required!"
      }),
    email: Joi.string().email().required()
      .messages({
        "string.empty": "email is required!",
        "string.email": "error sytax email!",
      }),
    password: Joi.string().min(5).required()
      .messages({
        "string.min": "password must be least 5 character!",
        "string.empty": "password is required!"
      })
  })

  const { error } = schema.validate(req.body);

  if(error) {
    res.json({
      code: "error",
      message: error.details[0].message,
    });
    return;
  }
 
  next();
}