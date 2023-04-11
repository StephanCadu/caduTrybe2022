import requests
from parsel import Selector


url = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(url)

selector = Selector(text=response.text)

flags = selector.css(".image > img::attr(src)").getall()

print(flags)
