import sys
import math

n = int(input())
trash = []
for i in range(n):
    isbn = input()
    value = 0
    if len(isbn)!=13 and len(isbn)!=10 or 'X' not in isbn and not any(i.isdigit() for i in isbn):
        trash.append(isbn)
    if len(isbn)==10:
        for i in range(len(isbn)):
            if isbn[i].isdigit(): value += int(isbn[i])*(len(isbn)-i)
            if isbn[i]=='X': value += 10*(len(isbn)-i)
        if value%11!=0: trash.append(isbn)
    if len(isbn)==13:
        if 'X' in isbn: trash.append(isbn)
        else:
            for i in range(len(isbn)):
                if isbn[i].isdigit():
                    if i%2==0: value += int(isbn[i])
                    else: value += int(isbn[i])*3
            if value%10!=0 and not(value%10)%3==0: trash.append(isbn)

print(len(trash), "invalid:")
for i in range(len(trash)): print(trash[i])