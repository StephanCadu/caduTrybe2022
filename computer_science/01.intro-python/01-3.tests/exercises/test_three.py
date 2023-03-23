import pytest
from three import check_email


def test_check_email_with_valid_email():
    "Para o email test@email.com deve retornar True"
    assert check_email("test@email.com") is True


def test_check_email_with_invalid_email():
    "Para o email #wrong#@email.com deve lançar um ValueError"
    with pytest.raises(ValueError):
        check_email("#wrong#@email.com")


def test_check_email_with_invalid_extension():
    "Para o email test@email-com deve lançar um ValueError"
    with pytest.raises(ValueError):
        check_email("test@email-com")


def test_check_email_with_invalid_website():
    "Para o email test@$ite.com deve lançar um ValueError"
    with pytest.raises(ValueError):
        check_email("test@$ite.com")
