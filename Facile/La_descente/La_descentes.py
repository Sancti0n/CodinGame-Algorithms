import sys
import math

while True:
    max = 0
    rang = 0
    for i in range(8):
        mountain_h = int(input())
        if max < mountain_h:
            max = mountain_h
            rang = i
    print(rang)
