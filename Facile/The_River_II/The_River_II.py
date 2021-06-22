import sys
import math

r1 = int(input())
value = "NO"

def riverSum(n):
    value = n
    for i in str(n): value += int(i)
    return value

for i in range(r1-1,1,-1):
    r2 = riverSum(i)
    if r2==r1:
        value = "YES"
        break
print(value)