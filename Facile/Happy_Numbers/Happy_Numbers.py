import sys
import math

n = int(input())
arr = [4, 16, 37, 58, 89, 145, 42, 20]

def sommeCarre(value):
    n = value
    while value != 1:
        value = sum(int(digit)*int(digit) for digit in str(value))
        if value in arr:
            print(str(n)+" :(")
            break
    if value == 1:
        print(str(n)+" :)")

for i in range(n):
    sommeCarre(input())