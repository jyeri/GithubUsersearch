export interface   User {  // Define the User interface
    login: string;
    id:number; 
    avatar_url:string;
    html_url:string;
}

export type TargetUser = User; // Define the TargetUser type

export type ErrorData = { // Define the ErrorData type
    happened: boolean | false;
    errormsg: string | null;
}

export interface   SearchResultProps {  // Define the SearchResultProps interface
    UserData: User[] | null;
    Visible: boolean; 
}