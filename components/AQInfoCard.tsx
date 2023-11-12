import { Box, Typography } from '@mui/material'

interface Props {
    title: string;
    value: any;
    color?: string;
    units?: boolean;
}

export const AQInfoCard = ({ title, value, color, units = true }: Props) => {
    return (
        <Box
            sx={{
                padding: '30px',
                borderRadius: '5px',
                backgroundColor: color ?? '#E3EA46',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minWidth: '200px'
            }}
        >
            <Typography
                variant='h6'
                sx={{ fontWeight: 400 }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: '40px',
                    color: 'black',
                }}
            >
                {value}
                {units && <span style={{ fontSize: '15px' }}>μg/m3</span>}
            </Typography>
        </Box>
    )
}
