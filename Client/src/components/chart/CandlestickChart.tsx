// src/components/CandlestickChart.js
import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import { mockHistoricalData, testData } from '@/lib/spring/api/mock';
import { set } from 'react-hook-form';

const CandlestickChart = ({ data, setInterval }: { data: any; setInterval: (newData: any) => void }) => {
    const chartContainer = useRef<HTMLDivElement | null>(null);
    const buttonsContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!chartContainer.current) return;

        const chart = createChart(chartContainer.current, {
            width: chartContainer.current.clientWidth,
            height: chartContainer.current.clientHeight,
            layout: {
                background: { type: ColorType.Solid, color: '#fff' },
                textColor: '#000',
            },
            grid: {
                vertLines: { visible: true, color: '#eee' },
                horzLines: { visible: true, color: '#eee' },
            },
        });

        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#4fff77',
            borderUpColor: '#4fff77',
            wickUpColor: '#4fff77',
            downColor: '#ff4976',
            borderDownColor: '#ff4976',
            wickDownColor: '#ff4976',
        });

        candlestickSeries.setData(data);

        // Ensure buttons are created only once
        if (!buttonsContainerRef.current) {
            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('buttons-container');
            buttonsContainerRef.current = buttonsContainer;

            const intervals = ["1min", "1day", "1week", "1month"];
            intervals.forEach(interval => {
                const button = document.createElement('button');
                button.innerText = interval;
                button.classList.add('interval-button');
                button.addEventListener('click', () => setInterval(interval));
                buttonsContainer.appendChild(button);
            });

            chartContainer.current.appendChild(buttonsContainer);

            // Add styles for positioning inside the chart
            const styles = `
                .buttons-container {
                    position: absolute;
                    top: 10px; /* Adjust position inside the chart */
                    left: 10px; /* Align buttons to the right */
                    display: flex;
                    gap: 8px;
                    background: rgba(255, 255, 255, 0.8);
                    padding: 5px 10px;
                    border-radius: 6px;
                    z-index: 99999; /* Ensure buttons are on top of the chart */
                }
                .interval-button {
                    all: unset;
                    font-family: sans-serif;
                    font-size: 14px;
                    font-weight: bold;
                    padding: 6px 12px;
                    color: #131722;
                    background-color: #f0f3fa;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                .interval-button:hover {
                    background-color: #e0e3eb;
                }
                .interval-button:active {
                    background-color: #d1d4dc;
                }
            `;
            const styleElement = document.createElement('style');
            styleElement.innerHTML = styles;
            document.head.appendChild(styleElement);
        }

        return () => {
            chart.remove();
        };
    }, [data, setInterval]);

    return (
        <div className='rounded-md shadow-sm' style={{ position: 'relative', width: '100%', height: '50vh', borderRadius: '6px' }}>
            <div ref={chartContainer} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default CandlestickChart;
