# https://www.codewars.com/kata/56747fd5cb988479af000028/python

def get_middle(s):
    theMiddleIndex = len(s) // 2
    if len(s) % 2 == 0:
        return ''.join([s[theMiddleIndex - 1], s[theMiddleIndex]])
    else:
        return s[theMiddleIndex]

print(get_middle("test")) # es
print(get_middle("123")) # 2
print(get_middle("O")) # O
print(get_middle("tu")) # O
print(get_middle("Laravel")) # a
