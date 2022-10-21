import os 

def table_of_file(filename):
    with open(filename) as f:
        table = {}
        for l in f.readlines():
            fields = l.split()
            key = fields[0]
            values = fields[1:]
            table[key] = values
        return table
    
def list_foods():
    for k, vs in table_of_file('calories.txt').items():
        print(k, end=' ')
        for v in vs: print(v, end=' ')
        print('')
        