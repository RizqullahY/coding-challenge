# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

def square_digits(num):
    result = []
    for i in str(num):
        s = int(i) ** 2
        result.append(str(s))
    x = ''.join(result)
    return int(x)

print(square_digits(9119))
print(square_digits(456))
print(square_digits(0))