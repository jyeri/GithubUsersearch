export const fetchUsers = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      if(response.status == 403){
        console.log("Time Limit Exceed");
      }
      throw new Error(`Error fetching users: ${response.status}`);
    }
  
    const data = await response.json();
  
    return data;
  };