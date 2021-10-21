import React from 'react';
import * as SC from './styles';

import { useTheme } from '../../hooks/theme';

export const Background: React.FC = () => {
    
    const { colorScheme } = useTheme();
    
    return(
        <SC.SvgBG
            id="visual"
            viewBox="0 0 960 540"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
        >
            <path d="M0 109L192 66L384 125L576 60L768 93L960 77L960 0L768 0L576 0L384 0L192 0L0 0Z" fill={colorScheme.background.shade1}>
            </path>
            <path d="M0 152L192 249L384 201L576 249L768 163L960 271L960 75L768 91L576 58L384 123L192 64L0 107Z" fill={colorScheme.background.shade2}>
            </path>
            <path d="M0 217L192 320L384 287L576 293L768 249L960 298L960 269L768 161L576 247L384 199L192 247L0 150Z" fill={colorScheme.background.shade3}>
            </path>
            <path d="M0 406L192 379L384 422L576 390L768 455L960 417L960 296L768 247L576 291L384 285L192 318L0 215Z" fill={colorScheme.background.shade4}>
            </path>
            <path d="M0 428L192 460L384 492L576 444L768 503L960 487L960 415L768 453L576 388L384 420L192 377L0 404Z" fill={colorScheme.background.shade5}>
            </path>
            <path d="M0 541L192 541L384 541L576 541L768 541L960 541L960 485L768 501L576 442L384 490L192 458L0 426Z" fill={colorScheme.background.shade6}>
            </path>
        </SC.SvgBG>       
    );
}
