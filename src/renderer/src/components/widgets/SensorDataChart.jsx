	import React from 'react'
	import { Line } from 'react-chartjs-2'
	import 'chart.js/auto'
	import { getRoundedHourLabelsLast12HoursFrench } from '../../utils/TimeUtil'

	const SensorDataChart = (props) => {
	// Oxydants: NO²
	// Reducteurs: CO

	const sensorHistories = [
		{
		id: 1,
		oxydants: 0.8,
		reducers: 2.4,
		nh3: 25,
		pressure: 15,
		humidity: 60,
		pm1: 54,
		pm2_5: 24,
		pm10: 80
		},
		{
		id: 2,
		oxydants: 8.41,
		reducers: 5.85,
		nh3: 26.4,
		pressure: 12.92,
		humidity: 62.54,
		pm1: 56.1,
		pm2_5: 22.22,
		pm10: 87.47
		},
		{
		id: 3,
		oxydants: 7.26,
		reducers: 11.77,
		nh3: 31.48,
		pressure: 18.31,
		humidity: 65.11,
		pm1: 65.56,
		pm2_5: 25.99,
		pm10: 89.07
		},
		{
		id: 4,
		oxydants: 6.79,
		reducers: 2.36,
		nh3: 24.72,
		pressure: 11.54,
		humidity: 65.25,
		pm1: 55.79,
		pm2_5: 25.79,
		pm10: 88.11
		},
		{
		id: 5,
		oxydants: 7.19,
		reducers: 5.5,
		nh3: 27.74,
		pressure: 19.72,
		humidity: 62.17,
		pm1: 58.62,
		pm2_5: 26.07,
		pm10: 89.03
		},
		{
		id: 6,
		oxydants: 2.62,
		reducers: 1.82,
		nh3: 23.46,
		pressure: 16.68,
		humidity: 64.04,
		pm1: 59.29,
		pm2_5: 25.84,
		pm10: 83.64
		},
		{
		id: 7,
		oxydants: 2.17,
		reducers: 8.11,
		nh3: 29.34,
		pressure: 21.92,
		humidity: 64.67,
		pm1: 64.39,
		pm2_5: 19.64,
		pm10: 89.56
		},
		{
		id: 8,
		oxydants: 3.64,
		reducers: 10.57,
		nh3: 27.79,
		pressure: 20.27,
		humidity: 63.16,
		pm1: 62.62,
		pm2_5: 27.1,
		pm10: 89.63
		},
		{
		id: 9,
		oxydants: 9.34,
		reducers: 6.19,
		nh3: 29.11,
		pressure: 19.08,
		humidity: 63.08,
		pm1: 56.04,
		pm2_5: 23.87,
		pm10: 89.77
		},
		{
		id: 10,
		oxydants: 3.82,
		reducers: 6.13,
		nh3: 30.45,
		pressure: 22.2,
		humidity: 61.16,
		pm1: 60.57,
		pm2_5: 28.08,
		pm10: 86.35
		},
		{
		id: 11,
		oxydants: 4.44,
		reducers: 2.49,
		nh3: 23.56,
		pressure: 12.43,
		humidity: 61.16,
		pm1: 53.96,
		pm2_5: 23.06,
		pm10: 80.55
		},
		{
		id: 12,
		oxydants: 2.41,
		reducers: 9.48,
		nh3: 28.32,
		pressure: 22.13,
		humidity: 62.94,
		pm1: 64.01,
		pm2_5: 28.66,
		pm10: 88.64
		}
	]

	let chartData = []
	for (let h in sensorHistories) {
		chartData.push(sensorHistories[h][props.pollutant])
	}

	const data = {
		labels: getRoundedHourLabelsLast12HoursFrench(),
		datasets: [
		{
			data: chartData,
			fill: false,
			borderColor: props.color,
			borderWidth: 2,
			borderJoinStyle: 'bevel',
			pointRadius: 2
		}
		]
	}

	const options = {
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					callback: function(value, index, ticks) {
						let unit = props.unit ? ' '+props.unit : ''
						return value + unit
					}
				}
			}
		},
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
		legend: {
			display: false
		}
		}
	}

	return (
		<>
			<p className='sensor-chart-title'>{props.label}</p>
			<div className="lineChart d-flex flex-row justify-content-center align-items-center pb-4">
			<Line data={data} options={options} />
			</div>
		</>
	)
	}

	export default SensorDataChart
