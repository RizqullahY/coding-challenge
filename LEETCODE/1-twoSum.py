class Solution(object):

    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        numToIndex = {}

        print(target)
        for i, num in enumerate(nums):
            # Diperika 1 persatu dari kiri ke kanan dan bakal disimpan sebagai object di varible numToIndex
            if target - num in numToIndex:
                # kalau target dikurangi dengan num di numToIndex ada hasilnya
                return [numToIndex[target - num], i]
                '''
                kembalikan index angka hasil pengurangan, 
                index angka saat ini yang mengurangi target dan menghasilkan hasil pengurangan
                '''
            print(numToIndex)
            numToIndex[num] = i


solution = Solution()

print(solution.twoSum([1, 23, 21, 2, 11, 15, 7], 9))  # Output: [0, 1]
# print(solution.twoSum([3,2,4], 6))  # Output: [1,2]
# print(solution.twoSum([3,3], 6))  # Output: [0,1]
