import requests


url = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

headers = {"User-agent": "Chrome", "Accept": "text/html"}

response = requests.get(url, headers=headers)

assert "bot detected" not in response.text
