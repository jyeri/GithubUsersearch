// FetchUsers is a utility function to fetch user data from a given URL
export const FetchUsers = async (url: string) => {
  // Fetch data from the provided URL
  const response = await fetch(url);

  // If the response is not ok (status is not in the range 200-299), throw an error
  if (!response.ok) {
    let errorMessage = '';

    // Customize error message based on response status for better user experience
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

    // Throw a new error with a custom message
    throw new Error(`Error fetching users: ${response.status} (${errorMessage}), try again later.`);
  }

  // If the response is ok, parse it as JSON and return the data
  const data = await response.json();
  return data;
};