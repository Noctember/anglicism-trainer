import os
import codecs

file = codecs.open(os.path.join(os.path.dirname(__file__), 'list.txt'), 'r', 'UTF-8')
newfile = codecs.open(os.path.join(os.path.dirname(__file__), 'questions.json'), 'w', 'UTF-8')
newfile.write('{ "questions": [')
buf = []
count = 0
for index, line in enumerate(file.readlines()):
    if line.startswith('==='):
        continue
    if not line or line.isspace(): # Empty lines
        continue
    count += 1
    line = line.replace(os.linesep, '')
    splitted = line.split(', ')
    s = '{'
    s += f'"answer":"{splitted[0]}",'
    good = ",".join('"'+s+'"' for s in splitted[1:])
    s += f'"choices":[{good},"{splitted[0]}"]'
    s += '},'
    buf.append(s)
buf[len(buf) -1] = buf[len(buf) -1][:len(buf[len(buf) -1]) -1]
newfile.writelines(buf)
newfile.write(']}')
print("Total questions:", count)
