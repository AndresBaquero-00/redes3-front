import { Box, Typography } from '@mui/material';
import { AcUnit, Cloud, NightsStay, Thunderstorm, WaterDrop, WbSunny } from '@mui/icons-material';
import React, { useMemo } from 'react';

interface Props {
    code: number;
    temp: number;
    feels_like: number;
}

const iconAndDescription: {[key: number]: {icon: JSX.Element, desc: string}} = {
    200: {
        icon: <Thunderstorm />,
        desc: 'Tormenta'
    },
    600: {
        icon: <AcUnit />,
        desc: 'Nieve'
    },
    800: {
        icon: <WbSunny />,
        desc: 'Despejado'
    },
    80: {
        icon: <Cloud />,
        desc: 'Nubado'
    }
}

export const Temperature = ({ code, temp, feels_like }: Props) => {
    const data = useMemo(() => {
        if (code > 800) return iconAndDescription[80];
        if (code >= 200 && code < 300) return iconAndDescription[200];
        if (code >= 600 && code < 700) return iconAndDescription[600];

        return iconAndDescription[code] ?? {icon: <NightsStay />, desc: ''}
    }, [code]);

    return (
        <Box
            sx={{
                flex: 2,
                backgroundColor: '#F3F2F2',
                borderRadius: '10px',
                padding: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                {
                    React.cloneElement(data.icon, {
                        sx: {
                            width: '100px',
                            height: '100px',
                            color: '#EC6E4C'
                        }
                    })
                }
                <Box>
                    <Typography variant='h2'>
                        {temp}
                        <sup>º</sup>
                        C
                    </Typography>
                    <Typography sx={{ color: '#777777', fontWeight: 400 }}>
                        Real Feel - {feels_like}
                        <sup>º</sup>
                        C
                    </Typography>
                </Box>
            </Box>
            <Typography
                variant='h4'
                sx={{ fontWeight: 600 }}
            >
                {data.desc}
            </Typography>
        </Box>
    )
}
