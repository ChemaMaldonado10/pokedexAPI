import requests
import bs4 
import urllib

f = open("names.txt")
i=0
for line in f.readlines():
        
        pkmnName = line.strip('\n')
        res = requests.get('https://www.wikidex.net/wiki/Archivo:'+pkmnName+'.png') 
        #print res

        soup = bs4.BeautifulSoup(res.text, 'lxml')
        
        review_container = soup.findAll("div", {"class": "fullImageLink"})
        
        for img in review_container:
                i = i + 1
                #print (review_container[0].select('img')[0]['alt'].split()[0])
                src = review_container[0].select('img')[0]['src'].split()[0]
                
                urllib.urlretrieve(src, str(i)+".png")

