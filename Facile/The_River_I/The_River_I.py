import sys
import math

r1 = int(input())
r2 = int(input())

def riverSum(n):
    value = n
    for i in str(n): value += int(i)
    return value

while(1):
    if r1<r2: r1 = riverSum(r1)
    else:
        if (r1==r2): break
        r2 = riverSum(r2)
print(r1)