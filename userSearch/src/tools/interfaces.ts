export interface   user {  // Define the User interface
    login: string;
    id:number; 
    avatar_url:string;
    html_url:string;
}

export interface   UserData {  // Define the User interface
    UserData: user[] | null; // User data
}

export interface   targetUser {  // Define the User interface
    targetUser: user; // User data
}

export type ErrorData = {
    happened: boolean | false;
    errormsg: string | null;
} // Define the details interface