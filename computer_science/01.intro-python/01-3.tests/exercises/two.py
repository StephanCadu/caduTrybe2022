import re

transcript = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
}


def verify_text(text):
    if not isinstance(text, str):
        raise TypeError("Value must be a string")
    if not text:
        raise ValueError("Text can't be empty")
    if len(text) > 30:
        raise ValueError("Text is too long")


def find_number_by_text(text):
    verify_text(text)
    result = ""
    for letter in text:
        if not re.match("[A-Z]", letter):
            result += letter
        for option in transcript.items():
            if letter in option[1]:
                result += f"{option[0]}"

    return result


if __name__ == "__main__":
    print(find_number_by_text("MY LOVE"))
