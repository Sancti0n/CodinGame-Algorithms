import sys
import math

n = int(input())

def Modular_exponentiation(b,e,m):
    result = 1
    while (e > 0):
        if (e & 1 > 0): result = (result*b)%m
        e = e >> 1
        b = (b*b)%m
    return result

def S_N(a, n):
    value = 0
    for i in range(n):
        value += Modular_exponentiation(16,n-i-1,8*i+a)/(8*i+a)
    for i in range(n,n+10):
        value += pow(16,n-i-1)/(8*i+a)
    return value

N = 4*S_N(1, n) - 2*S_N(4, n) - S_N(5, n) - S_N(6, n)

if N<0: print(int((1-(-N%1))*16))
else: print(int((N%1)*16))