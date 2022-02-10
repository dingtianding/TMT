const stockChart = (data) => {

    const xdates = [];
    const yprices = [];
    createChart();

    async function createChart() {
    const data = await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Tesla Stock Price in USD ($)',
                data: data.ys,
                fill: true,
                backgroundColor: 'rgba(0, 255, 0, .2)',
                borderColor: 'rgba(0, 100, 0, 1)',
                borderWidth: 1
                }
            ]
        },
        plugins: [plugin],
        options: {
        scales: {
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return '$' + value;
                }
            }
        }
    }
}
    });
}
const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = "rgba(0, 0, 0, 0.88)";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};
    //Data from https://finance.yahoo.com/quote/TSLA/history/
    
    getData();
    async function getData(){
        const xs = [];
        const ys = [];
        
        const response = await fetch('TSLA.csv');
        const data = await response.text();


        const table = data.split('\n').slice(1);
        table.forEach(row => {
            const columns = row.split(',');
            const date = columns[0].slice(0, 7);
            xs.push(date);
            const open = columns[1];
            ys.push(open)
        });
        return { xs, ys }
    }
}
export default stockChart
