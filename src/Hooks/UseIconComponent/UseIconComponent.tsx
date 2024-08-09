import React, { useCallback } from 'react';
import Groups2Icon from '@mui/icons-material/Groups2';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FlagIcon from '@mui/icons-material/Flag';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export const useIconComponent = () => {
    const getIconComponent = useCallback((iconName: string): React.ReactElement | null => {
        switch (iconName) {
            case 'Groups2Icon':
                return <Groups2Icon />;
            case 'EmojiObjectsIcon':
                return <EmojiObjectsIcon />;
            case 'FlagIcon':
                return <FlagIcon />;
            case 'LocalFireDepartmentIcon':
                return <LocalFireDepartmentIcon />;
            case 'ElectricBoltIcon':
                return <ElectricBoltIcon />;
            case 'LocalLibraryIcon':
                return <LocalLibraryIcon />;
            case 'BorderColorIcon':
                return <BorderColorIcon />;
            case 'BurstModeIcon':
                return <BurstModeIcon />;
            case 'ViewInArIcon':
                return <ViewInArIcon />;
            case 'AutoAwesomeMotionIcon':
                return <AutoAwesomeMotionIcon />;
            case 'KeyboardDoubleArrowRightIcon':
                return <KeyboardDoubleArrowRightIcon />;
            case 'SportsEsportsIcon':
                return <SportsEsportsIcon />;
            case 'SearchIcon':
                return <SearchIcon />;
            case 'VerifiedIcon':
                return <VerifiedIcon />;
            case 'MilitaryTechIcon':
                return <MilitaryTechIcon />;
            default:
                return <CancelPresentationIcon />;
        }
    }, []);
    return getIconComponent;
};

