export interface login{
  username: string,
  password: string;
}

export interface user{
  id: string,
  password: string;
  name: string;
  email:string;
  role: string;
  gender:string;
  // terms:string;
}

export interface Role{
  value: string,
  viewValue: string;
}
