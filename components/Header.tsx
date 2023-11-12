import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

import { CircleIcon } from '@/components/CircleIcon';

interface Props {
    city: string;
    country: string;
    datetime: string;
}

export const Header = ({ city, country, datetime }: Props) => {
    const splitted = useMemo(() => datetime.split('T'), [datetime])
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
                <Typography sx={{ fontSize: '30px', fontWeight: 600 }}>
                    {city}, {country}
                </Typography>
                <Typography sx={{ color: '#777777', fontWeight: 400 }}>
                    Información sobre el clima y el ambiente.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                <Box
                    component='span'
                    sx={{ fontWeight: '500', color: '#444444' }}
                >
                    {splitted.at(0)}  {splitted.at(1)?.split('.').at(0)}
                </Box>
                <CircleIcon icon={<CalendarMonth sx={{ color: '#444444' }} />} />
            </Box>
        </Box>
    )
}
