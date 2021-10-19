import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import { useSearch } from '../../hooks/search';
import { useUser } from '../../hooks/user';

import { FormCard } from '../../components/Cards';

import * as SC from './styles';


const SingIn: React.FC = () => {

    const [redirect, setRedirect] = useState(false);

    const { handleUserLogonChange } = useUser();
    // const { searchUser, userResultData } = useSearch();

    const handleSingIn = useCallback(() => {
        setRedirect(!redirect)
    }, [redirect])

    return (
        <>
            {
            redirect
                ? <Redirect to="/home" />
                : <SC.Container>
                    <SC.Title>Re-GitHub</SC.Title>
                    <FormCard
                        onSubmit={handleSingIn}
                        width={20}
                        height={28}
                    >
                        <SC.Title>SingIn</SC.Title>
                        <SC.Input
                            type="text"
                            placeholder="GitHub username"
                            onChange={event => handleUserLogonChange(event.target.value)}
                        />
                        <SC.Button type="submit">Login</SC.Button>
                    </FormCard>
                    {/* <SC.Icon/> */}
                    <SC.SvgBG
                        id="visual"
                        viewBox="0 0 960 540"
                        // width="960"
                        // height="540"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                    >
                        <path d="M0 109L192 66L384 125L576 60L768 93L960 77L960 0L768 0L576 0L384 0L192 0L0 0Z" fill="#230aad">
                        </path>
                        <path d="M0 152L192 249L384 201L576 249L768 163L960 271L960 75L768 91L576 58L384 123L192 64L0 107Z" fill="#3115b6">
                        </path>
                        <path d="M0 217L192 320L384 287L576 293L768 249L960 298L960 269L768 161L576 247L384 199L192 247L0 150Z" fill="#3d1ebf">
                        </path>
                        <path d="M0 406L192 379L384 422L576 390L768 455L960 417L960 296L768 247L576 291L384 285L192 318L0 215Z" fill="#4826c7">
                        </path>
                        <path d="M0 428L192 460L384 492L576 444L768 503L960 487L960 415L768 453L576 388L384 420L192 377L0 404Z" fill="#532ed0">
                        </path>
                        <path d="M0 541L192 541L384 541L576 541L768 541L960 541L960 485L768 501L576 442L384 490L192 458L0 426Z" fill="#5d36d9">
                        </path>
                    </SC.SvgBG>
                    {/* <SC.SvgBG
                        id="visual"
                        viewBox="0 0 960 540"
                        // width="100vw"
                        // height="100vh"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                    >
                        <path d="M0 82L74 82L74 82L148 82L148 60L222 60L222 60L295 60L295 39L369 39L369 55L443 55L443 87L517 87L517 60L591 60L591 60L665 60L665 77L738 77L738 87L812 87L812 87L886 87L886 87L960 87L960 50L960 0L960 0L886 0L886 0L812 0L812 0L738 0L738 0L665 0L665 0L591 0L591 0L517 0L517 0L443 0L443 0L369 0L369 0L295 0L295 0L222 0L222 0L148 0L148 0L74 0L74 0L0 0Z" fill="#6600ff">
                        </path>
                        <path d="M0 201L74 201L74 201L148 201L148 260L222 260L222 314L295 314L295 239L369 239L369 168L443 168L443 287L517 287L517 168L591 168L591 206L665 206L665 201L738 201L738 217L812 217L812 282L886 282L886 222L960 222L960 168L960 48L960 85L886 85L886 85L812 85L812 85L738 85L738 75L665 75L665 58L591 58L591 58L517 58L517 85L443 85L443 53L369 53L369 37L295 37L295 58L222 58L222 58L148 58L148 80L74 80L74 80L0 80Z" fill="#5b20cf">
                        </path>
                        <path d="M0 266L74 266L74 282L148 282L148 336L222 336L222 379L295 379L295 314L369 314L369 271L443 271L443 341L517 341L517 260L591 260L591 293L665 293L665 266L738 266L738 282L812 282L812 363L886 363L886 266L960 266L960 233L960 166L960 220L886 220L886 280L812 280L812 215L738 215L738 199L665 199L665 204L591 204L591 166L517 166L517 285L443 285L443 166L369 166L369 237L295 237L295 312L222 312L222 258L148 258L148 199L74 199L74 199L0 199Z" fill="#5029a0">
                        </path>
                        <path d="M0 411L74 411L74 417L148 417L148 417L222 417L222 482L295 482L295 449L369 449L369 433L443 433L443 465L517 465L517 449L591 449L591 433L665 433L665 417L738 417L738 471L812 471L812 449L886 449L886 428L960 428L960 460L960 231L960 264L886 264L886 361L812 361L812 280L738 280L738 264L665 264L665 291L591 291L591 258L517 258L517 339L443 339L443 269L369 269L369 312L295 312L295 377L222 377L222 334L148 334L148 280L74 280L74 264L0 264Z" fill="#442c73">
                        </path>
                        <path d="M0 541L74 541L74 541L148 541L148 541L222 541L222 541L295 541L295 541L369 541L369 541L443 541L443 541L517 541L517 541L591 541L591 541L665 541L665 541L738 541L738 541L812 541L812 541L886 541L886 541L960 541L960 541L960 458L960 426L886 426L886 447L812 447L812 469L738 469L738 415L665 415L665 431L591 431L591 447L517 447L517 463L443 463L443 431L369 431L369 447L295 447L295 480L222 480L222 415L148 415L148 415L74 415L74 409L0 409Z" fill="#362b48">
                        </path>
                    </SC.SvgBG> */}
                    {/* <SC.SvgBG
                        id="visual"
                        viewBox="0 0 960 540"
                        width="100vw"
                        height="100vh"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        // style={{
                        //     position: 'absolute',

                        // }}
                    >
                        <g fill="rgba(18,11,129,1)">
                            <circle r="273" cx="439" cy="526"></circle>
                            <circle r="188" cx="928" cy="95"></circle>
                            <circle r="246" cx="185" cy="42"></circle>
                        </g>
                    </SC.SvgBG> */}
                </SC.Container>
            }
        </>
    );
}

export default SingIn;
