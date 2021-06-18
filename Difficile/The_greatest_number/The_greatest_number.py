import sys
import math

n = int(input())
string = input().replace(" ", "")
arrValue = []
for a in range(len(string)):
    if string[a]=='-' or string[a]=='+' or string[a]=='.':
        arrValue.append(string[a])

newstr = list(map(int, ((string.replace('-', '')).replace('.', '')).replace(' ', '')))
value = ''

if '-' in arrValue:
    newstr.sort()
    for i in range(len(newstr)):
        if i==0: value += '-'
        if i==1: 
            if '.' in arrValue: value += '.'
        value += str(newstr[i])
if '+' in arrValue or not '-' in arrValue:
    newstr.sort(reverse=True)
    for i in range(len(newstr)):
        if i==len(newstr)-1 and newstr[i]!=0:
            if '.' in arrValue: value += '.'
        value += str(newstr[i])
        if i==len(newstr)-1 and newstr[len(newstr)-1]==0: value = value[:-1]
if newstr.count(0)==len(newstr): value = 0
print(value)