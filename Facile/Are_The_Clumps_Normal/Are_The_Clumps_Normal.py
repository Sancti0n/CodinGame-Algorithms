import sys
import math

n = str(input())
t = []
value, longueur, base = 0, 0, 2
e = ''

while base<10:
    for i in range(len(n)):
        if i == 0:
            value = int(n[i])%base
            e = n[i]
        else:
            if value == int(n[i])%base: e += n[i]
            else:
                t.append(e)
                e = n[i]
                value = int(n[i])%base
        if i == len(n)-1: t.append(e)
    if len(t)<longueur:
        longueur = base
        break
    else: longueur = len(t)
    t = []
    base += 1
print('Normal') if base == 10 else print(longueur)