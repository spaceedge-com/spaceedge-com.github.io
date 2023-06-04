## clnr.sh script that cleans the cache and history

#!/bin/sh

rm -rfv ~/.cache/*

rm -rfv ~/.local/share/recently-used*
rm -rfv ~/.thumbnails/*

rm -rfv ~/.mozilla/firefox/*.default*/datareporting/*

rm -rfv ~/.config/opera*/Local\ Storage/*
rm -rfv ~/.config/opera*/Service\ Worker/*

rm -rfv ~/.config/vivaldi/Local\ Storage/*
rm -rfv ~/.config/vivaldi/Default/Service\ Worker/*

rm -rfv ~/.config/midori/history.db*

rm -rfv ~/.config/chromium/Default/Local\ Storage/*

rm -rfv ~/.config/google-chrome/Default/Local\ Storage/*

rm -rfv ~/.config/midori/history.db*
rm -rfv ~/.kde/share/apps/konqueror/konq_history*


#rm -rfv ~/.mozilla/firefox/*.default/*.sqlite
#rm -rfv ~/.adobe/*
#rm -rfv ~/.moonchild\ productions/pale\ moon/*.default/*.sqlite
#rm -rfv ~/.config/opera/Local\ Storage/*
#rm -r ~/.config/opera/ShaderCache/GPUCache/*
#find ~/.mozilla -type f -name '*.sqlite' -delete
#find ~/.mozilla/firefox/*.default -type f -name '*.sqlite*' -delete

