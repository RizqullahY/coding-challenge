# https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/solutions/python
def draw_stairs(n):
    stairs = ""
    for i in range(n - 1):
        space_1 = (i) * " "
        stairs += f"{space_1}I\\n"
        
    space_2 = (n - 1) * " "    
    stairs += f"{space_2}I"    
    return(stairs)

print(draw_stairs(7))
