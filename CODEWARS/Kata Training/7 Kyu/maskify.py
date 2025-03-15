# https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python

# return masked string
def maskify(cc):
    if len(str(cc)) >= 4:
        for i in range(len(cc)):
            if(i >= (len(cc) - 4)):
                print(i, cc[i])
            else:
                print('#')
    else:
        return cc
    

print(maskify('123'))
print(maskify('ARSILAROSYIDAH'))