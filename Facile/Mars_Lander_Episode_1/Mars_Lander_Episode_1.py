import sys
import math

surface_n = int(input())  # the number of points used to draw the surface of Mars.
for i in range(surface_n):
    land_x, land_y = [int(j) for j in input().split()]

while True:
    # h_speed: the horizontal speed (in m/s), can be negative.
    # v_speed: the vertical speed (in m/s), can be negative.
    # fuel: the quantity of remaining fuel in liters.
    # rotate: the rotation angle in degrees (-90 to 90).
    # power: the thrust power (0 to 4).
    x, y, h_speed, v_speed, fuel, rotate, power = [int(i) for i in input().split()]

    if abs(v_speed)>=39: print("0 4")
    else: print("0 1")