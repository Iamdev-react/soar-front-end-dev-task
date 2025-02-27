export interface UserData {
  name: string;
  userName: string;
  email: string;
  password: string;
  dob: string;
  address: string;
  permanantAddress: string;
  postalCode: string;
  city: string;
  country: string;
  avatar: string | File;
}

export const userInitialValues: UserData = {
  name: "",
  userName: "",
  email: "",
  password: "",
  dob: "",
  address: "",
  permanantAddress: "",
  postalCode: "",
  city: "",
  country: "",
  avatar: "",
};
