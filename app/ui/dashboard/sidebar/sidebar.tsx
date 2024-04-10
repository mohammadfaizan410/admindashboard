import MenuLink from './menulink/menulink';
import styles from './sidebar.module.css';
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdOutlineSettings, MdLogout } from 'react-icons/md';


const sidebarData = [
      {
        title : "Pages",
       list : [{
          "title": "Dashboard",
          "icon":<MdDashboard/>,
          "link": "/dashboard"
        },
        {
          "title": "Users",
          "icon": <MdSupervisedUserCircle/>,
          "link": "/dashboard/users"
        },
        {
          "title": "Products",
          "icon": <MdShoppingBag/>,
          "link": "/dashboard/products"
        },
        {
            "title": "Transactions",
            "icon": <MdAttachMoney/>,
            "link": "/dashboard/transactions"
          },
        ],
    },
     
    {
        title : "Reports",
        list : [
        {
          "title": "Revenue",
          "icon": <MdAttachMoney/>,
          "link": "/dashboard/revenue"
        },
        {
           "title": "Reports",
            "icon": <MdAnalytics/>,
            "link": "/dashboard/reports"
        },
        {
            "title": "Teams",
            "icon": <MdWork/>,
            "link": "/dashboard/teams"
          },
      ],
    },
    {
        title : "Settings",
        list : [
        {
          "title": "Settings",
          "icon": <MdOutlineSettings/>,
          "link": "/dashboard/settings"
        },
        {
            "title": "Help",
            "icon": <MdOutlineSettings/>,
            "link": "/dashboard/help"
          },
        
      ],
    },
    ]

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img src="/vercel.svg" className={styles.userImage} alt="user" width={40} height={40} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Jhon Joe</span>
                    <span className={styles.usertitle}>Jhon Joe</span>
                </div>
            </div>
            <ul className={styles.list}>
            {
                sidebarData.map((category, index) => (
                   <li key={index}  >
                        <span className={styles.category}>{category.title}</span>
                        <ul>
                            {
                                category.list.map((item, index) => (
                                    <MenuLink key={index} props={item} />
                                ))
                            }
                        </ul>
                   </li>
                ))
            }
            </ul>
            <button className={styles.logout}>
                <MdLogout size={20} />
                <span>Logout</span>
            </button>
        </div>
    );
}