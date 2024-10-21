

export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
  };
  
 
  
 
  

 
  export type INewUser = {
    name: string;
    email: string;
    username: string;
    password: string;
  };


  export type IRegisterUser = {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
  };

  export type ISignUser = {
    email: string;
    password: string;
  };