export const FetchUsers = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    let errorMessage = '';

    switch(response.status) {
      case 403:
        errorMessage = 'Time Limit Exceeded';
        break;
      case 404:
        errorMessage = 'Not Found';
        break;
      default:
        errorMessage = 'An error occurred';
    }

    throw new Error(`Error fetching users: ${response.status} (${errorMessage}), try again later.`);
  }

  const data = await response.json();
  return data;
};