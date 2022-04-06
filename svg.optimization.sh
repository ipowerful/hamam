#!/bin/sh
svgFolderPathArray=(./assets/svg ./static/favicons)
for n in ${!svgFolderPathArray[@]};
do \
	find ${svgFolderPathArray[$n]} -type f -iname '*.svg' -exec bash -c './node_modules/svgo/bin/svgo $1' _ {} \;
done
