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

// FetchUsers is a utility function to fetch data from a given URL
export const FetchUsers = async <T>(url: string): Promise<{ data?: T, error?: string }> => {
  try {
    const response = await fetch(url);

    // If the response is not ok, generate a custom error message
    if (!response.ok) {
      return { error: generateErrorMessage(response.status) };
    }

    // If the response is ok, parse it as JSON and return the data
    const data = await response.json();
    return { data };
  } catch (error) {
    // Log and return any caught errors
    console.error('There was an error!', error);
    return { error: (error as Error).message };
  }
};
