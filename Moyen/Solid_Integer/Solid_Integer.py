import sys
import math

n = int(input())

def base9(n):
    r = ''
    while n>0:
        if n%9 == 0:
            r = str(9) + r
            n = n//9 - 1
        else:
            r = str(n%9) + r
            n = n//9
    return r
print(base9(n))