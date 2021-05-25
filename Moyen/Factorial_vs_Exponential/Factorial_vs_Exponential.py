import sys
import math

k = int(input())
tabNumber = []
tabFinal = []
stringN = ''
for i in input().split():
    tabNumber.append(float(i))
for number in tabNumber:
    sum = 0
    n = 0
    sumN = 0
    while (math.log(number) > sumN):
        sum += math.log(n+1)
        sumN = sum/(n+1)
        n += 1
    if number == tabNumber[-1]:
        stringN += str(n)
    else:
        stringN += str(n) + ' '
print(stringN)
