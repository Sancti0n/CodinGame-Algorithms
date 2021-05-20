import sys
import math

n = int(input())
t = []
for i in input().split():
    t.append(int(i))
a = 0
if not t:
    print(0)
else:
    while not (a in t or -a in t): a = a + 1
    if a in t: print(a)
    elif -a in t and not (a in t): print(-a)
