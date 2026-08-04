export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  hearAbout: string;
  captchaToken: string;
  captchaAnswer: string;
  agreed: boolean;
};

export type ContactFieldErrors = Partial<
  Record<
    | "firstName"
    | "lastName"
    | "email"
    | "phone"
    | "company"
    | "message"
    | "hearAbout"
    | "captcha"
    | "consent",
    string
  >
>;

export type ContactValidationCopy = {
  firstNameRequired: string;
  firstNameInvalid: string;
  lastNameRequired: string;
  lastNameInvalid: string;
  emailRequired: string;
  emailInvalid: string;
  phoneRequired: string;
  phoneInvalid: string;
  companyRequired: string;
  messageTooLong: string;
  hearAboutRequired: string;
  captchaRequired: string;
  consentRequired: string;
};

const NAME_PATTERN = /^[\p{L}\p{M}' -]{2,60}$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/;
const MAX_MESSAGE_LENGTH = 2000;

export function validateContactForm(
  values: ContactFormValues,
  copy: ContactValidationCopy,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const company = values.company.trim();
  const message = values.message.trim();

  if (!firstName) {
    errors.firstName = copy.firstNameRequired;
  } else if (!NAME_PATTERN.test(firstName)) {
    errors.firstName = copy.firstNameInvalid;
  }

  if (!lastName) {
    errors.lastName = copy.lastNameRequired;
  } else if (!NAME_PATTERN.test(lastName)) {
    errors.lastName = copy.lastNameInvalid;
  }

  if (!email) {
    errors.email = copy.emailRequired;
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = copy.emailInvalid;
  }

  if (!phone) {
    errors.phone = copy.phoneRequired;
  } else if (!PHONE_PATTERN.test(phone) || phone.replace(/\D/g, "").length < 7) {
    errors.phone = copy.phoneInvalid;
  }

  if (!company) {
    errors.company = copy.companyRequired;
  } else if (company.length < 2) {
    errors.company = copy.companyRequired;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = copy.messageTooLong;
  }

  if (!values.hearAbout.trim()) {
    errors.hearAbout = copy.hearAboutRequired;
  }

  if (!values.captchaToken.trim() || !values.captchaAnswer.trim()) {
    errors.captcha = copy.captchaRequired;
  }

  if (!values.agreed) {
    errors.consent = copy.consentRequired;
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
