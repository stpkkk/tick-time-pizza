import { RecaptchaVerifier } from 'firebase/auth';

export interface ExtendedWindow extends Window {
  recaptchaVerifier?: RecaptchaVerifier;
}
