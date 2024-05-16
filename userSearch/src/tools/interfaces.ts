export interface   user {  // Define the User interface
    login: string;
    id:number; 
    avatar_url:string;
    html_url:string;
}

export interface   UserData {  // Define the User interface
    UserData: user[] | null; // User data
}

export type TargetUser = user;

export type ErrorData = {
    happened: boolean | false;
    errormsg: string | null;
} // Define the details interface

export interface   visible {  // Define the User interface
    visible: boolean; // User data visibility
}

export interface   SearchResultProps {  // Define the User interface
    UserData: user[] | null; // User data
    visible: boolean; // User data visibility
}