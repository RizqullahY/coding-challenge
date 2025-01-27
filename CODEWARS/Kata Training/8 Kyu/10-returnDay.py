# 1. Barbar
# def whatday(num):
#    if(num == 1):
#       return "Sunday"
#    elif(num == 2):
#       return "Monday"
#    elif(num == 3):
#       return "Tuesday"
#    elif(num == 4):
#       return "Wednesday"
#    elif(num == 5):
#       return "Thursday"
#    elif(num == 6):
#       return "Friday"
#    elif(num == 7):
#       return "Saturday"
#    else:
#       return "Wrong, please enter a number between 1 and 7"

# 2
def whatday(num):
   days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   if 1 <= num <= 7:
      return days[num - 1]
   else:
      return "Wrong, please enter a number between 1 and 7"
