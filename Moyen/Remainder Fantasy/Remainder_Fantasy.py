import sys
import math

n = int(input())
tabm = []
tabr = []
M = 1

for i in range(n):
    m, r = [int(j) for j in input().split()]
    tabm.append(m)
    M *= m
    tabr.append(r)

def _pgcd(a,b):
    while b: a, b = b, a%b
    return a

def ppcm(n):
    p = abs(n[0]*n[1])//_pgcd(n[0], n[1])
    for x in n[2:]:
        p = abs(p*x)//_pgcd(p, x)
    return p

def findK(a,b):
    k = 1
    maxK = ((a*k)-1)/b
    minK = ((-a*k)-1)/b
    while (maxK%1 != 0 or minK%1 != 0):
        if (((a*k)-1)/b)%1==0: return k
        if (((-a*k)-1)/b)%1==0: return -k
        k += 1
    return k

def decomposition(a):
    L = dict()
    k = 2
    while a != 1:
        exp = 0
        while a%k==0:
            a = a//k
            exp += 1
        if exp != 0: L[k] = exp
        k += 1
    return L

def dpgcd(t):
    for a in range(len(t)):
        if a+1 != len(t):
            for b in range(a+1,len(t)):
                if _pgcd(t[a],t[b]) != 1:
                    if t[a] == _pgcd(t[a],t[b]): t[a] = t[a]//_pgcd(t[a],t[b])
                    elif t[a]//_pgcd(t[a],t[b]) != 1 and math.log(t[a])/math.log(_pgcd(t[a],t[b]))%1 != 0:
                        t[a] = t[a]//_pgcd(t[a],t[b])
                    elif math.log(t[a])/math.log(_pgcd(t[a],t[b]))%1 == 0 or math.log(t[b])/math.log(_pgcd(t[a],t[b]))%1 == 0:
                        if math.log(t[a])/math.log(_pgcd(t[a],t[b]))%1 == 0: t[b] = t[b]//_pgcd(t[a],t[b])
                        else: t[a] = t[a]//_pgcd(t[a],t[b])
    return t

if M == ppcm(tabm):
    x = 0
    for i in range(len(tabm)):
        x += tabr[i]*(M/tabm[i])*findK(M/tabm[i],tabm[i])
    print(int(x%M))
else:
    x = 0
    tabm = dpgcd(tabm)
    M = 1
    for i in range(len(tabm)):
        M *= tabm[i]
        tabr[i] = tabr[i]%tabm[i]
    for i in range(len(tabm)):
        x += tabr[i]*(M/tabm[i])*findK(M/tabm[i],tabm[i])
    if (x%M)<max(tabm): print(int((x%M)+M))
    else: print(int(x%M))