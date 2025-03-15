# https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python

def xo(s):
    s = list(s.lower())
    # print(s)
    # MENGHITUNG JUMLAH KARAKTER DALAM SEBUAH LIST!
    count_x = s.count('x')
    count_o = s.count('o')
    # print(count_o)
    return count_o == count_x

print(xo("xxoox"))  # False
print(xo("ooxx"))   # True
print(xo("xooxx"))  # False
print(xo("ooxXm"))  # True
print(xo("zpzpzpp")) # True
print(xo("zzoo"))   # False
print(xo("oxOx"))   # True