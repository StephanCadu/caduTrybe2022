from four import find_valid_emails


def test_find_valid_emails():
    "Para a lista a seguir deve retornar apenas os dois emails válidos"
    input_list = ["nome@dominio.com", "errad#@dom.com", "outro@dominio.com"]
    output_list = ["nome@dominio.com", "outro@dominio.com"]
    assert find_valid_emails(input_list) == output_list
