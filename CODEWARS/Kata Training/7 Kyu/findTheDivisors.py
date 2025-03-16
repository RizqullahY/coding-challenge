# https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python
from aptdaemon.worker.aptworker import read_high_trust_repository_dir


def divisors(integer):
    result = []
    if integer == 1:
        return
    for i in range(integer - 1):
        if integer % (i + 1) == 0:
            # print(str(integer) + ' habis dibagi ' + str(i + 1))
            result.append((i + 1))
    del result[0]
    if len(result) == 0:
        return f'{integer} is prime'
    return result

print(divisors(15))
