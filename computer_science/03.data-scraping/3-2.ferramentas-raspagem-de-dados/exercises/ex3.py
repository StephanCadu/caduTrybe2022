# from time import sleep
# from selenium import webdriver
# from selenium.webdriver.common.by import By

# sleep(3)

# options = webdriver.FirefoxOptions()
# options.add_argument("--ignore-certificate-errors")
# options.add_argument("--ignore-ssl-errors=yes")
# options.add_argument("--start-maximized")
# options.add_argument("--headless")

# firefox = webdriver.Remote(
#     command_executor="http://localhost:4444/wd/hub", options=options
# )

# url = "https://diolinux.com.br/"

# firefox.get(url)

# posts = []

from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")
options.add_argument("--headless")

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)


def scrape(url):
    firefox.get(url)

    posts = []
    for post in firefox.find_elements(By.CLASS_NAME, "inhype-post"):
        new_item = dict()
        new_item["title"] = (
            post.find_element(By.CLASS_NAME, "inhype-post-details")
            .find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )
        posts.append(new_item)
    return posts


print(scrape("https://diolinux.com.br/"))
