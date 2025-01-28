'''
NOT SOLVED YET
'''

# Definition for singly-linked list.
from typing import Optional


class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# # class Solution:
# #     def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

# #         listNumber = ''.join(str(e) for e in l1)
# #         print(listNumber)
# #         listNumber2 = ''.join(str(e) for e in l2)
# #         print(listNumber2)

# #         res = int(listNumber) + int(listNumber2)
# #         print(res)

# #         res = list(str(res))
# #         print(res)
# #         res.reverse()
# #         print(res)

# #         return res.reverse()


# # sl = Solution()
# # print(sl.addTwoNumbers([2, 4, 3], [5, 6, 4]))  # [7,0,8]

# # TypeError: 'ListNode' object is not iterable
# #     listNumber = ''.join(str(e) for e in l1)
# # Line 13 in addTwoNumbers (Solution.py)
# #     ret = Solution().addTwoNumbers(param_1, param_2)
# # Line 56 in _driver (Solution.py)
# #     _driver()
# # Line 70 in <module> (Solution.py)


class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        dummyHead = ListNode(0)
        curr = dummyHead
        carry = 0
        while l1 != None or l2 != None or carry != 0:
            l1Val = l1.val if l1 else 0
            l2Val = l2.val if l2 else 0
            columnSum = l1Val + l2Val + carry
            carry = columnSum // 10
            newNode = ListNode(columnSum % 10)
            curr.next = newNode
            curr = newNode
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummyHead.next

sl = Solution()
print(sl.addTwoNumbers([2, 4, 3], [5, 6, 4]))  # [7,0,8]