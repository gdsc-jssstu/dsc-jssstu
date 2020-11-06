import React, { useContext, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CreateIcon from '@material-ui/icons/Create';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ({ page }) {
    const pageMap = {'home':0, 'team': 1, 'events': 2, 'projects': 3}
    const useStyles = makeStyles({
        root: {
            width: "100%",
            position: "fixed",
            bottom: 0,
            zIndex: 100,
            "& .MuiBottomNavigationAction-root": {
                "@media (max-width: 768px)": {
                    minWidth: "auto",
                    padding: "6px 0"
                }
            }
        }
    });
    const classes = useStyles();
    const themeContext = useContext(ThemeContext);

    return (
        <div className="bottomNav">
            <div style={{
                width: '100vw',
                height: '56px'
            }}></div>
            <BottomNavigation
                value={pageMap[page]}
                showLabels
                className = {classes.root}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100vw',
                    boxShadow: themeContext.theme === 'dark' ?  '0px -1px 5px #333' : '0px -1px 5px #ccc'
                }}
            >
                <Link href='/'><BottomNavigationAction showLabel component='a' label="Home" icon={<HomeIcon />} /></Link>
                <Link href={page === 'home' ? '/#team' : '/team'}><BottomNavigationAction showLabel label="Team" icon={<GroupIcon />} /></Link>
                <Link href='events'><BottomNavigationAction showLabel label="Event" icon={<EventIcon />} /></Link>
                <Link href={page === 'home' ? '/#updates' : '/projects'}><BottomNavigationAction showLabel label="Project" icon={<EmojiObjectsIcon />} /></Link>
                <Link href={page === 'home' ? '/#blog' : 'https://medium.com/dscjssstu'}><BottomNavigationAction showLabel label="Blog" icon={<CreateIcon />} /></Link>
                <Link href='/#contact'><BottomNavigationAction showLabel label="Contact Us" icon={<EmailIcon />} /></Link>
            </BottomNavigation>
        </div>
    );
}