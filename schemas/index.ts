import * as yup from 'yup';

const emailRules = /\S+@\S+\.\S+/;

export const profileSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().matches(emailRules),
  birthday: yup.string(),
});
