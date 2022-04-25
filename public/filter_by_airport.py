# gets all_covid.csv file, filters it by LAX International Airport Property in the AirportName property of the csv and writes a new file only with data from that airport

import csv

reader = csv.reader(open(r"public/all_covid.csv"),delimiter=',')
filtered = filter(lambda p: 'Los Angeles International' == p[3], reader)
csv.writer(open(r"public/filtered_covid.csv",'w'),delimiter=',').writerows(filtered)

