import requests
from parsel import Selector


url = "http://books.toscrape.com"

endpoint = "/catalogue/the-grand-design_405/index.html"

response = requests.get(f"{url}{endpoint}")

selector = Selector(text=response.text)

title = selector.css(".product_main > h1::text").get()

regex = r"£\d+\.\d{2}"
price = selector.css(".price_color::text").re_first(regex)

description = selector.css(".sub-header + p::text").get()

suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

src_url = selector.css(".item.active > img::attr(src)").get()
src_url = src_url.replace("../..", "")

img_url = f"{url}{src_url}"

print(title, price, description, img_url)
