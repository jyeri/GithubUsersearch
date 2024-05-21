// Define the User interface
export interface User {
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

// Define the SearchResultProps interface
export interface SearchResultProps {
    UserData: User[] | null;
    Visible: boolean; 
}

// Define the ApiResponse interface for fetched data and error handling
export interface ApiResponse {
    data: {
      items: User[];
    };
    error: string;
}

// Define the TargetUser type
export type TargetUser = User;

// Define the ErrorData type
export type ErrorData = {
    happened: boolean | false;
    errormsg: string | null;
}
