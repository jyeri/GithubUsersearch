export interface   User {  // Define the User interface
    login: string;
    id:number; 
    avatar_url:string;
    html_url:string;
}

export type TargetUser = User;

export type ErrorData = {
    happened: boolean | false;
    errormsg: string | null;
} // Define the details interface

export interface   SearchResultProps {  // Define the User interface
    UserData: User[] | null; // User data
    Visible: boolean; // User data visibility
}