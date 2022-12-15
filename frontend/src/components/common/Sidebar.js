import { Home,Dashboard, Mail, ContactMail } from '@material-ui/icons';

import {  useNavigate } from 'react-router-dom';



import "./css/sidebar.css"

const Sidebars = () => {

    const navigate = useNavigate()

    const SidebarData = [
        {
            title : "Dashboard",
            icon : <Dashboard/>,
            path : "/dashboard"
        },
        {
            title : "Admin",
            icon : <Home/>,
            path : "/admin"
        },
        {
            title : "Home",
            icon : <Home/>,
            path : "/"
        },
        {
            title : "Timer",
            icon : <Home/>,
            path : "/timer"
        },
        {
            title : "Contacts",
            icon : <ContactMail/>,
            path : "/contact",
            sybNav : [
                {
                    title : "s1",
                    icon : <Home/>,
                    path : '/s1'
            },
                {
                    title : "s2",
                    icon : <Home/>,
                    path : '/s2'
            },
               
        ]
        },
        {
            title : "Mails",
            icon : <Mail/>,
            path : "/mail"
        },
        {
            title : "Timer3",
            icon : <Mail/>,
            path : "/timer3"
        }
    ]

    return (
        <div className='Sidebar'>
            <ul className='SidebarList' >
                {SidebarData && SidebarData.map((val,key) => {
                    return (
                        <li 
                        className='row'
                        id={window.location.pathname === val.path ? "active" : ""}
                        key={key} 
                        onClick={() => {navigate(val.path) }}
                        >
                            <div id='icon'>{val.icon}</div>
                            <div id='title' >{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebars