import SvgIcon from '@material-ui/core/SvgIcon';
import React, { Component, useEffect } from "react";
import RegisterSvg from "../../assets/icons/note.svg";
import AccountSvg from "../../assets/icons/accounting.svg"
import MemberSvg from '../../assets/icons/community.svg'
import SettingSvg from '../../assets/icons/settings.svg';
import ProfileSvg from '../../assets/icons/user.svg'


export const HomeIcon = (props) => {
    return (
        <SvgIcon style={{ margin: "0rem 1.5rem" }} {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}


export const RegisterIcon = () => {
    return (
        <img style={{ margin: "0rem 1.5rem", width: "2rem" }} src={RegisterSvg} />
    )
}

export const AccountIcon = () => {
    return (
        <img style={{ margin: "0rem 1.5rem", width: "2rem" }} src={AccountSvg} />
    )
}

export const MemberIcon = () => {
    return (
        <img style={{ margin: "0rem 1.5rem", width: "2rem" }} src={MemberSvg} />
    )
}

export const SettingIcon = () => {
    return (
        <img style={{ margin: "0rem 1.5rem", width: "2rem" }} src={SettingSvg} />
    )
}


export const ProfileIcon = () => {
    return (
        <img style={{ margin: "0rem 1.5rem", width: "2rem" }} src={ProfileSvg} />
    )
}




