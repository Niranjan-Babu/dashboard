import styles from './sidebar.module.css';
import {
  MDashboard,
  MdSuperviesdUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md'
import MenuLink from './menuLink/menuLink';
import Image from 'next/image'
import admin from '@/public/niranjan.jpg'

const menuItems =[
  {    
    title:"Pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdAnalytics/>
      },
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdAnalytics/>
      },
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdShoppingBag/>
      },
      {
        title:"Transaction",
        path:"/dashboard/transaction",
        icon:<MdAttachMoney/>
      }
    ]
  },
  {
    title:"Analytics",
    list:[
      {
        title:"Revenue",
        path:"/dashboard/revenue",
        icon:<MdWork/>
      },
      {
        title:"Reports",
        path:"/dashboard/reports"
        ,icon:<MdAnalytics/>
      },{
        title:"Teams",
        path:"/dashboard/teams",
        icon:<MdPeople/>
      }
    ]
  },
  {
    title:"User",
    list:[
      {
        title:"Settings",
        path:"/dashboard/settings"
        ,icon:<MdOutlineSettings/>
      },
      {
        title:"Help",
        path:"/dashboard/help",
        icon:<MdHelpCenter/>
      }
    ]
  }
]
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
          <Image  className={styles.userImage} src={admin} alt="" width="50" height="50"/>
          <div className={styles.userDetials}>
            <span className={styles.userName}>Niranjan</span>
            <span className={styles.title}>Administrator</span>
          </div>
      </div>
      <ul>
       {menuItems.map((cat)=>(
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list?.map((item)=>(
            <MenuLink item={item} key={item.title}/>
          ))}
        </li>
       ))} 
      </ul>
      <button className={styles.logout}>
        <MdLogout/>
        LogOut</button>
    </div>
  )
}

export default Sidebar