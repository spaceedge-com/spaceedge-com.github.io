#!/bin/sh

# echo ' download xplanet data, cloud, satellite '

mol='.xplanet/latest_moll.gif'

sleep 05
if [[ -s $mol ]]; 
then 
   echo "file ok;"; 
else 
   echo "file=0; remove."; 
   rm $mol;
fi

sleep 05
wget -q https://www.ssec.wisc.edu/data/comp/latest_moll.gif -O $mol &

sleep 05
wget -q https://www.celestrak.com/NORAD/elements/stations.txt -O ~/.xplanet/satellites/iss.tle &

sleep 05
echo '==== xplanet-dl done:' $(date) >> ./done
echo 'latest_moll:' $(date -r $mol) >> ./done
echo 'iss.tle:' $(date -r ~/.xplanet/satellites/iss.tle) >> ./done


# echo 'call php file to download, cache, rss data '
#php -f /var/www/html/feeds/Rss-W-FeedCache.php
#echo 'cachefile test.rss:' $(date -r /var/www/html/feeds/cache/test.rss) >> ./done


# echo 'call python file to download, apod data '
sleep 05
pth="./Downloads/APOD/"
cd $pth
python2 desktop_nasa.032121.py
sleep 05
cd
echo 'apod.html:' $(date -r $pth'apod.html') >> ./done

