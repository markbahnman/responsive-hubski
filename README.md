## Responsive Hubski

An attempt at making hubski responsive and thus look good on devices with smaller resolultions. Most of the work will be done in [LESS](http://lesscss.org/) and then compiled into CSS. I would like to try and first attempt to do as much work in pure CSS (aside from needing the userscript to put the CSS on hubski for testing purposes) before using any javascript manipulation.

### Testing it yourself

So far this has only been tested on Firefox using the its Web Developer Tools, in particular the Responsive Design View tool.

After downloading this repo you will need to:  
1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/GreaseMonkey/)
2. Install the hubski-responsive.user.js userscript.
3. Open [Hubski](http://hubski.com) in Firefox.
4. Go to Tools -> Web Developer -> Responsive Design View.
5. Change the view to something like 320x480.

If you want to edit the CSS file and see your changes you will have to edit the ```cssFile``` variable in hubski-responsive.user.js to point to your editted CSS file. (I recommend using your Dropbox public folder). For some reason pointing to the raw CSS file on github doesn't work. If you can get it to work, send a pull request.

## License

Copyright (C) 2013 Mark Bahnman
Licensed under MIT License 