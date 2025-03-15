# https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python

# return masked string
def maskify(cc):
    if len(str(cc)) >= 4:
        result = [] # DILUAR FOR LOOP DONG
        for i in range(len(cc)):
            if(i >= (len(cc) - 4)):
                # print(cc[i], end='')
                result.append(cc[i])
            else:
                # print('#', end='')
                result.append('#')
        
        return ''.join(result)
    else:
        return cc
    

print(maskify('123'))
print(maskify('ARSILAROSYIDAH'))