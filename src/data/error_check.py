import os
import codecs
from typing import Counter

file = codecs.open(os.path.join(os.path.dirname(__file__), 'list.txt'), 'r', 'UTF-8')
count = 0
for index, line in enumerate(file.readlines()):
    if "," in (line.replace(", ", "")):
        print(line)
    if " , " in line:
        print(line)
    if len(line.split(",")) == 0:
        print(line)
    count += len(line.split(" "))
print(count)
