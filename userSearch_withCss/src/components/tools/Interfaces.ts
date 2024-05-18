export interface User { // Define the User interface
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    node_id: string;
    followers: number | null;
    following: number | null;
    email: string | null;
    name: string | null;
    created_at: string | null;
    updated_at: string | null;
}

export type TargetUser = User; // Define the TargetUser type, not needed, but it helps to understand what are we working with

export type ErrorData = { // Define the ErrorData type
    happened: boolean | false;
    errormsg: string | null;
}

export interface   SearchResultProps {  // Define the SearchResultProps interface
    UserData: User[] | null;
    Visible: boolean; 
}