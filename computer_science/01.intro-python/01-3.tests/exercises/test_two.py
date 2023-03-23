import pytest
from two import find_number_by_text


def test_find_number_by_text_with_string():
    "Para o texto 'MY LOVE' deve retornar 69 5683"
    assert find_number_by_text("MY LOVE") == "69 5683"


def test_find_number_by_text_with_other_string():
    "Para o texto '@#$ %&*' deve retornar ' '"
    assert find_number_by_text("@#$ %&*") == "@#$ %&*"


def test_find_number_by_text_with_number():
    "Para um número deve lançar um TypeError"
    with pytest.raises(TypeError):
        find_number_by_text(2)


def test_find_number_by_text_with_list():
    "Para uma lista deve lançar um TypeError"
    with pytest.raises(TypeError):
        find_number_by_text([1, 2])


def test_find_number_by_text_with_empty_text():
    "Para um texto vazio deve lançar um ValueError"
    with pytest.raises(ValueError):
        find_number_by_text("")


def test_find_number_by_text_with_long_text():
    "Para um texto vazio deve lançar um ValueError"
    with pytest.raises(ValueError):
        find_number_by_text("The quick brown fox jumps over the lazy dog")
