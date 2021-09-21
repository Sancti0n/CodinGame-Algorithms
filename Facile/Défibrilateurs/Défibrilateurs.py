import sys
import math

lon = float(input().replace(',', '.'))
lat = float(input().replace(',', '.'))
n = int(input())
tab = []
d = []
for i in range(n):
    defib = input().replace(',', '.')
    tab.append((defib.split(';'))[1])
    data = [(defib.split(';'))[4], (defib.split(';'))[5]]
    d.append(math.sqrt(pow((float(data[0])-lon),2) + pow(float(data[1])-lat, 2)))
index = d.index(min(d,key=lambda y:float(y)))
print(tab[index])