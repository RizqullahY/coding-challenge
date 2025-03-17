# https://www.codewars.com/kata/5810085c533d69f4980001cf/train/python

def calculator(x, y, op):
    try:
        x = int(x)
        y = int(y)
        if op == '+':
            return x + y
        elif op == '-':
            return x - y
        elif op == '*':
            return x * y
        elif op == '/':
            return x / y
        else:
            return 'unknown value'
    except :
            return 'unknown value'
    
print(calculator(':', ',', '+'))
print(calculator(6, 2, '+'))

# BEST
# def calculator(x, y, op):
#     try:
#         return {'+': x + y, '-': x - y, '*': x * y, '/': x / y}[op]
#     except (TypeError, KeyError): 
#         return 'unknown value'