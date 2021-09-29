import sys
import math
import re

tab = re.split('[+=]', input())
symboles = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
N = 2
base = 0

def calculBase(N, str):
    value = 0
    for i in range(len(str)):
        if (int(symboles.index(str[i])) >= N):
            return None
        value += int(symboles.index(str[i]))*pow(N,len(str)-i-1)
    return value

while (N<=36 and base == 0):
    X = calculBase(N, tab[0])
    Y = calculBase(N, tab[1])
    Z = calculBase(N, tab[2])
    if (X != None and Y != None and Z != None and X+Y == Z):
        base = N
    N += 1

print(base)