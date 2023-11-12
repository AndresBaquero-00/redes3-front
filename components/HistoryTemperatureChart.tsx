import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import { Datum } from '@/interfaces';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    yaxis: {
        title: {
            text: 'ºC'
        }
    },
    fill: {
        opacity: 1
    }
}

interface Props {
    data: Datum[];
}

export const HistoryTemperatureChart = ({ data }: Props) => {
    return (
        <Box>
            {
                typeof window !== 'undefined' && (
                    <Chart
                        options={{
                            ...options,
                            xaxis: {
                                categories: data.map(({ datetime }) => {
                                    const splitted = datetime.split('T');
                                    return `${splitted.at(0)}  ${splitted.at(1)?.split('.').at(0)}`
                                }).reverse(),
                            },
                        }}
                        series={[
                            {
                                name: 'Temperatura',
                                data: data.map(({ weather }) => weather.temp).reverse()
                            }
                        ]}
                        type='bar'
                        height={350}
                    />
                )
            }
        </Box>
    )
}
