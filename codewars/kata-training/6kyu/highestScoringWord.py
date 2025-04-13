# https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/python

def high(x):
    x = x.split(' ')
    res = []
    for i in x:
        res.append(len(i))
    return res

print(high('ayam panggang saya'))
print(high('hitam putih abu abu'))
