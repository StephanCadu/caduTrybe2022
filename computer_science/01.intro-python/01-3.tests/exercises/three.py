import re


def check_email(email):
    if not re.match("^\w[a-zA-Z0-9_\-]{3,}@[a-z0-9]+(\.[a-z]{1,3})+$", email):
        raise ValueError("Email is not valid!")
    else:
        return True
