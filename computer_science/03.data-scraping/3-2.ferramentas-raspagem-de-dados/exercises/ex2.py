from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

sleep(3)

options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")
options.add_argument("--headless")

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)

base_url = "https://www.wikimetal.com.br"
endpoint = "/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982"

url = f"{base_url}{endpoint}"

firefox.get(url)

elements = firefox.find_elements(By.TAG_NAME, "p")

for element in elements:
    print(element.text)

firefox.quit()
