class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Integer cannot be reversed -> change to list | string
        # reversedInt = x.reverse()
        # return reversedInt == x
        
        # menyimpan data x asli
        reversedX = list(str(x)) 
        
        # menyimpan data x yang di balik
        originX = list(str(x))
        reversedX.reverse()

        return reversedX == originX



sl = Solution()

print(sl.isPalindrome(12345))
print(sl.isPalindrome(3113))



# CHATGPT SOLUTION - Algoritma tercepat tanpa convert ke list
# class Solution:
#     def isPalindrome(self, x: int) -> bool:
#         # Angka negatif atau angka yang berakhiran 0 (kecuali angka 0 sendiri) bukan palindrom
#         if x < 0 or (x % 10 == 0 and x != 0):
#             return False
        
#         reversed_num = 0
#         original = x
        
#         while x > 0:
#             digit = x % 10  # Ambil digit terakhir
#             reversed_num = reversed_num * 10 + digit  # Tambahkan digit ke angka terbalik
#             x //= 10  # Buang digit terakhir dari x
        
#         return original == reversed_num


# # Testing
# sl = Solution()
# print(sl.isPalindrome(12345))  # Output: False
# print(sl.isPalindrome(3113))   # Output: True
# print(sl.isPalindrome(121))    # Output: True
# print(sl.isPalindrome(-121))   # Output: False
