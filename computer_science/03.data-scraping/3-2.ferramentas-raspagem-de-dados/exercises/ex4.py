from bs4 import BeautifulSoup
import requests

url = "https://pt.wikipedia.org/wiki/Rock_in_Rio"

response = requests.get(url)

soup = BeautifulSoup(response.text, "html.parser")

for element in soup.find_all("a"):
    print(element)
