InputWidget does must be connected to another widget. 
It sends string containing all the informations about time periods and type of the search.

Expected outputs
----------------

Time Period search:

``` "?aggrMethod=" + "max" + "&aggrPeriod=" + "hour" + "&dateFrom=" + date1 + "&dateTo=" + date2 ```

aggrMethod: max/min

aggrPeriod: min/hour/day

dateFrom: Start Date

dateTo: End Date

Last Values search:

``` "?lastN=" + nValue ```

lastN: Number of desired searches

All of these values can be changed through widget's UI and can be added to proper search URL in another widget.
