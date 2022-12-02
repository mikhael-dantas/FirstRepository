import { Flex, Grid } from '@chakra-ui/react';
import { customTheme } from '@myStyles/GlobalStyles';
import Link from 'next/link';
import React from 'react';

// a navbar that navigates between nextjs pages
const hrefs = [
    { href: '/categories', label: 'Categories' },
    { href: '#/hot', label: 'Hot!' },
    { href: '#/new', label: 'New ☼' },
    { href: '#/daily', label: 'Daily Offer!' },
]
const MyHeader: React.FC = () => {
    return (
        <Flex align="center" justify="space-between" direction={'column'} color="white" marginBottom={'.1rem'}>
            <Link href="/">
                <a ><Flex className='home-link' style={{
                    padding: '.2rem',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none',
                }}
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-home"
                        >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span style={{marginLeft: '.6rem'}}>E-commerce Simplified</span>
                </Flex></a>
            </Link>

            <Grid templateColumns="repeat(4, 1fr)"
            >
                {hrefs.map(({ href, label }) => (
                    <Link key={href} href={href}>
                        <a style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: customTheme.colors[10],
                            fontSize: '.8rem',
                            width: '100%',
                            padding: '.2rem',
                            height: '100%',
                            textAlign: 'center',
                            borderRadius: '0.5rem',
                        }}
                        >{label}</a>
                    </Link>
                ))}
            </Grid>
        </Flex>
    )
}

export default MyHeader;