import { Box, Typography } from '@mui/material';
import { WaterDrop } from '@mui/icons-material';

import { CircleIcon } from '@/components';

interface Props {
    title: string;
    value: any;
    icon: JSX.Element;
}

export const InfoCard = ({ title, value, icon }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                width: '100%'
            }}
        >
            <CircleIcon icon={icon} />
            <Box>
                <Typography sx={{ fontWeight: 600, color: '#444444' }}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: '25px',
                        color: 'black'
                    }}
                >
                    {value}
                </Typography>
            </Box>
        </Box>
    )
}
