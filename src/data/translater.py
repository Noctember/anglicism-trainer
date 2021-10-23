file = open('list.txt', 'r')
newfile = open('questions.json', 'w')
newfile.write('{ "questions": [')
buf = []
for index, line in enumerate(file.readlines()):
    if line.startswith('====='):
        continue
    line = line.replace('\n', '')
    splitted = line.split(', ')
    s = '{'
    s += f'"answer":"{splitted[0]}",'
    good = ",".join('"'+s+'"' for s in splitted[1:])
    s += f'"choices":[ {good}, "{splitted[0]}"]'
    s += '},'
    buf.append(s)
buf[len(buf) -1] = buf[len(buf) -1][:len(buf[len(buf) -1]) -1]
newfile.writelines(buf)
newfile.write(']}')
