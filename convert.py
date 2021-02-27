import os
from PIL import Image

src = input("Enter image dir: ")
tar = input("Enter image target dir: ")

for entry in os.listdir(src):
    read = Image.open(src+"/"+entry)
    read.save(tar+"/"+entry[:-3]+"jpg")