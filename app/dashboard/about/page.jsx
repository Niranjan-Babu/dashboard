import styles from "@/app/ui/dashboard/about/about.module.css"
import Image from 'next/image'
import nir from '@/public/niranjan.jpg'
import '@fontsource/roboto/300.css';
import nextmon from '@/public/nextmon.png'

const About = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.Images}>
      <Image src={nir} height={250} width={250} className={styles.Image} priority={true} />
        <p className={styles.intro}>I am Niranjan Babu. As a Frontend Developer. I specialize in crafting visually
          appealing and user-friendly interfaces. Proficient in HTML, CSS, Javascript and React Js.
           I bring designs to life by ensuring seamless interaction and responsiveness. I have experience
           with various frontend frameworks and libraries, with a focus on optimizing user
           experiences. Dedicated to staying abreast of industry trends. Also I am currently
           learning MongoDB and Next Js. </p>
      </div>
      <div className={styles.Images}>
      <Image src={nextmon} height={200} width={300} className={styles.Image2} priority={true} />
        <p className={styles.intro}>
        In the realm of web development, the demand for efficient admin dashboards is ever-growing.
         This introduction explores the synergy of Next.js and MongoDB in crafting a robust solution. 
         Next.js provides a foundation with server-side rendering, while MongoDB offers flexibility and scalability.
          The admin dashboard features real-time updates, user authentication, data visualization, and responsive design.
           This tutorial will guide you through the step-by-step process of harnessing the power of Next.js and MongoDB 
           to create a dynamic and scalable admin dashboard, enabling effective data management.
        </p>
        
      </div>
    </div>
  )
}

export default About