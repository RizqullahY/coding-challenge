```python
def toNumber(s: str) -> int:
    s = s.lower()
    res = 0
    for ch in s:
        res = res * 26 + (ord(ch) - ord('a') + 1)
    return res

def toLabel(n: int) -> str:
    if n <= 0:
        raise ValueError("n must be > 0")
    word = []
    while n > 0:
        n -= 1
        word.append(chr(n % 26 + ord('a')))
        n //= 26
    return ''.join(reversed(word))


print(toNumber("a"))   # 1
print(toNumber("b"))   # 2
print(toNumber("aa"))  # 27
print(toNumber("abc")) # 731

print(toLabel(1))     # a
print(toLabel(27))    # aa
print(toLabel(731))   # abc
```
