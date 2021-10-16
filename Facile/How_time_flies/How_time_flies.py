import sys
import math
import datetime

def remove(a):
    tab = []
    s = a.split('.')
    for i in range(len(s)):
        if int(s[i])<10: tab.append(s[i][1])
        else: tab.append(s[i])
    return tab

b = remove(input())
e = remove(input())
d = (datetime.date(int(e[2]), int(e[1]), int(e[0])) - datetime.date(int(b[2]), int(b[1]), int(b[0]))).days

if d/365<1 and d/30<=1: print("total", d, "days")
if d/365<1 and d/30>1:
    if d/30<2: print(int((d%365)/30),"month, total", d, "days")
    else: print(int((d%365)/30),"months, total", d, "days")
if d/365>=1 and d%365<30:
    if int(d/365)==1: print(int(d/365),"year, total", d,"days")
    else: print(int(d/365),"years, total", d,"days")
if d/365>=1 and d%365>=30:
    if int(d/365)==1:
        if ((d/365)%1)*12<2: print(int(d/365),"year,",int(((d/365)%1)*12), "month, total", d,"days")
        else: print(int(d/365),"year,",int((d/30)%12), "months, total", d,"days")
    else:
        if ((d/365)%1)*12<2: print(int(d/365),"years,",int(((d/365)%1)*12), "month, total", d,"days")
        else: print(int(d/365),"years,",int(((d/365)%1)*12), "months, total", d,"days")