from three import check_email


def find_valid_emails(emails):
    valids = []
    for email in emails:
        try:
            if check_email(email):
                valids.append(email)
        except ValueError:
            print(f"{email} is not a valid email")

    return valids


if __name__ == "__main__":
    print(
        find_valid_emails(
            ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]
        )
    )
