This document will give instructions how to use widget.
---

How to use
---
Upload csvWidget.wgt to Fiware Wirecloud resources.
Insert widget to workspace and connect it's endpoint to desired widget.
Widget expects to receive following object:

	dates :
		["27.7", "28.7", "29.7", "30.7", "31.7", "1.8", "2.8", "3.8", "4.8", "5.8", "6.8"],
	values : {
		"name1" : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, " "],
		"name2" : [10, 9, 8, 7, 6, 5, " ", 4, 3, 2, 1],
		"name3" : [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	}
	
Each call to widget will create new downloadable .csv file.

Customization
---
If you want to customize the widget. Make your customizations, delete old csvWidget.wgt, select all files in the folder, compress them to .zip and change .zip to .wgt manually.
