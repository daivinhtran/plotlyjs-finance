var PlotlyFinance = require('../index.js');
var plotly = require('plotly')('username', 'apikey');

var fig = PlotlyFinance.createOHLC(
    {
        open: [33.01, 33.31, 33.50, 32.06, 34.12, 33.05, 33.31, 33.50],
        high: [34.20, 34.37, 33.62, 34.25, 35.18, 33.25, 35.37, 34.62],
        low: [31.70, 30.75, 32.87, 31.62, 30.81, 32.75, 32.75, 32.87],
        close: [34.10, 31.93, 33.37, 33.18, 31.18, 33.10, 32.93, 33.70],
        dates: [
            [2013,3,4] ,[2013,6,5], [2013,9,6], [2013,12,4],
            [2014,3,5], [2014,6,6] ,[2014,9,4], [2014,12,5]
        ].map(function(d) { return new Date(d[0], d[1]-1, d[2]); })
    }
);

var graphOptions = {
    filename: 'ohlc-first',
    fileopt: 'overwrite',
    layout: fig.layout
};

plotly.plot(fig.data, graphOptions, function(err, msg) {
    console.log(msg);
});
