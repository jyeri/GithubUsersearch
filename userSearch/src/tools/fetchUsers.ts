export const fetchUsers = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      if(response.status == 403){
        console.log("Time Limit Exceed");
      }
      if(response.status == 404){
        console.log("Not Found");
      }
      throw new Error(`Error fetching users: ${response.status}, try again later.`);
    }
    const data = await response.json();
    console.log("IM TRYING TO FETCH DATA");
    return data;
  };