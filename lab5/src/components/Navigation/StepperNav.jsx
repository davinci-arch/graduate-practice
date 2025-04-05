import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


export default function StepperNav({ completedStep }) {
    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#007aff',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#007aff',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#b9b9c3',
            borderTopWidth: 3,
            borderRadius: 1,
        },
    }));

    const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#b9b9c3',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#007aff',
        }),
        '& .QontoStepIcon-circle': {
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
        '& .QontoStepIcon-circle-completed': {
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#007aff',
        },
        '& .QontoStepIcon-circle-unreachable': {
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '1px solid #b9b9c3',
        },
    }));

    function QontoStepIcon(props) {
        const { active, completed, className } = props;

        return (
            <QontoStepIconRoot ownerState={{ active }} className={className}>
                {completed ? (
                    <div className="QontoStepIcon-circle-completed" />
                ) : (
                    active ? (
                        <div className="QontoStepIcon-circle" />
                    ) : (
                        <div className="QontoStepIcon-circle-unreachable" />
                    )
                )}
            </QontoStepIconRoot>
        );
    }

    QontoStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
    };

    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];


    return (
        <div className="w-full mr-[59px]">
            <Stack sx={{ width: '50%' }} spacing={4}>
                <Stepper alternativeLabel activeStep={completedStep} connector={<QontoConnector />}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Stack>

        </div>
    )
}