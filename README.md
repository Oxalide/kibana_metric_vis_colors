# Kibana Colored Metric Vizualisation Plugin with colors

This visualization plugin is like the default Metric plugin, improved to be colorful !

![Colorized Kibana Dashboard](http://hillys.valouille.fr/kibana_metric_colors_3.png)

## Installation Steps

You can install this plugin in Kibana 4 by doing the following in your home directory ($KIBANA_HOME is generally /opt/kibana) :

```
git clone https://github.com/oxalide/kibana_metric_vis_colors.git
zip -r kibana_metric_vis_colors kibana_metric_vis_colors
$KIBANA_HOME/bin/kibana plugin --install metric-vis-colors -u file:///$HOME_DIRECTORY/kibana_metric_vis_colors.zip
```

## How to use

Go to "Visualize" in Kibana and create a new visualization

![Colorized Kibana Dashboard](http://hillys.valouille.fr/kibana_metric_colors_1.png)

Then you can choose the colors you want in the options. You can use any color listed [here](http://www.w3schools.com/colors/colors_names.asp), or any hexadecimal color code like #000000.

![Colorized Kibana Dashboard](http://hillys.valouille.fr/kibana_metric_colors_2.png)
