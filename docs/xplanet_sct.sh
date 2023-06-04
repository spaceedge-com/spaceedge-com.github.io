#!/bin/bash


# xplanet -body Mars -origin Major -latitude 5 -projection orthographic
#  -north orbit  -wait 60  -transparency  -window &
# -random Place observer above a random latitude and longitude.

#OUTPUT 
OUTPUT="$HOME/.xplanet/output/"
#OUTPUT1="/var/www/html/"

xy=1280x1024

#OPTIONS
XOPTIONS="-origin major -config configs -arc_file constellations -marker_file brightStars -starmap BSC -radius 40 -range 3 -gmtlabel -transparency -geometry=$xy -num_times 1"
SOPTIONS="-origin major -config configs -marker_file brightStars -starmap BSC -radius 40 -range 3 -gmtlabel -transparency -geometry=$xy -num_times 1"


#run xplanet
sleep 02
xplanet -body Sun $XOPTIONS -glare 25 -output $OUTPUT/Sun.jpg & 
sleep 03
xplanet -body Mercury $XOPTIONS -output $OUTPUT/Mercury.jpg &
sleep 03
xplanet -body Venus $XOPTIONS -output $OUTPUT/Venus.jpg & 
sleep 03
xplanet -body Earth $XOPTIONS -output $OUTPUT/Earth.jpg & 
sleep 03
xplanet -body Mars $XOPTIONS -output $OUTPUT/Mars.jpg &
sleep 03
xplanet -body Jupiter $XOPTIONS -output $OUTPUT/Jupiter.jpg & 
sleep 03
xplanet -body Saturn $SOPTIONS -output $OUTPUT/Saturn.jpg &
sleep 03
xplanet -body Uranus $XOPTIONS -output $OUTPUT/Uranus.jpg &
sleep 03
xplanet -body Neptune $XOPTIONS -output $OUTPUT/Neptune.jpg & 
sleep 03
xplanet -body Pluto $XOPTIONS -output $OUTPUT/Pluto.jpg &


# sleep 05
# igal2 -s -y 150 -f -i index-xplanet.html -d ./.xplanet/output/ &
# webmagick --columns 5 --thumblabel "%f\n%wx%h" --thumbforeground white --forcegif --thumbgeometry 120x96 --srcdir ~/.xplanet/output/ &

# echo " optimize jpgs "
sleep 05
jpegoptim ./.xplanet/output/*.jpg --all-progressive -m40 -q -o &

# echo " perm. "  chmod -R +rw  ./.xplanet/output/* &

# echo " cp .jpgs to images "
sleep 05
cp ./.xplanet/output/*.jpg /var/www/html/images/. &


# sleep 05
# echo " cp for .files"
# cp ./.xplanet/output/.*jpg /var/www/html/images/ &
# echo " cp for .gif
# cp ./.xplanet/output/.*gif /var/www/html/images/ &


#echo "bye"
