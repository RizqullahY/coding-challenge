# https://www.codewars.com/kata/515decfd9dcfc23bb6000006/solutions/python

def is_valid_IP(strng):
    strings = strng.split('.')
    
    if len(strings) != 4:
        return False
    
    for string in strings:
        # Tidak boleh kosong dan harus digit
        if not string.isdigit():
            return False
        
        # tidak boleh awalan 0 (leading zero)
        if len(string) > 1 and string[0] == '0':
            return False
        
        int_string = int(string)
        if int_string < 0 or int_string > 255:
            return False
        
    return True
