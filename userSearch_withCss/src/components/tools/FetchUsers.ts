// FetchUsers is a utility function to fetch user data from a given URL
export const FetchUsers = async (url: string) => {
  try {
    // Attempt to fetch data from the provided URL
    const response = await fetch(url);

    // If the response is not ok (status is not in the range 200-299), 
    // we want to throw an error with a custom message
    if (!response.ok) {
      throw new Error(generateErrorMessage(response.status));
    }

    // If the response is ok, parse it as JSON and return the data
    const data = await response.json();
    return data;
  } catch (error) {
    // If an error is caught, it could be due to network issues or the custom error we threw
    // We log the error and re-throw it to be handled by the calling code
    console.error('There was an error!', error);
    throw error;
  }
};

// This function generates a custom error message based on the HTTP status code
function generateErrorMessage(status: number): string {
  switch(status) {
    case 403:
      return 'API Rate Limit Exceeded, waiting for reset...';
    case 404:
      return 'Not Found';
    default:
      return 'An error occurred';
  }
}