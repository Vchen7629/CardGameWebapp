import requests
import json

# Define the API endpoint
api_endpoint = "https://db.ygoprodeck.com/api/v7/cardinfo.php/archetype"

try:
    # Send an HTTP GET request to the API
    response = requests.get(api_endpoint)

    # Check if the request was successful (HTTP status code 200)
    if response.status_code == 200:
        data = response.json()

        # Specify the filename for the local JSON file
        filename = "cardarchetypeinfo.json"

        # Save the data to a local JSON file
        with open(filename, "w", encoding="utf-8") as json_file:
            json.dump(data, json_file, ensure_ascii=False, indent=4)

        print(f"Data has been successfully saved to {filename}")

    else:
        print(f"Failed to retrieve data from the API. Status code: {response.status_code}")

except Exception as e:
    print(f"An error occurred: {str(e)}")