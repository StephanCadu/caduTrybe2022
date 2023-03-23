from one import fizz_buzz
import pytest


def test_fizz_buzz_with_four():
    "Para um valor 4 deve retornar [1, 2, Fizz]"
    assert fizz_buzz(3) == [1, 2, "Fizz"]


def test_fizz_buzz_with_zero():
    "Para um valor 4 deve retornar um array vazio"
    assert fizz_buzz(0) == []


def test_fizz_buzz_with_string():
    "Para uma string deve lançar um TypeError"
    with pytest.raises(TypeError):
        fizz_buzz("a")


def test_fizz_buzz_with_array():
    "Para um array deve lançar um TypeError"
    with pytest.raises(TypeError):
        fizz_buzz([1, 2, 3])
