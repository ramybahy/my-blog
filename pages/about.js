import aboutpic from '../assets/aboutpic.jpeg'
import Image from 'next/image'
import styles from '../styles/About.module.scss'

export default function About() {
    return <div className={styles.container}>
    <div  className={styles.textContainer} > 
        <div  className={styles.textContainerWhite} >
            <p className={styles.tagline}>About us</p>
            <h1>We are a team of content writers who share their learnings</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
<div className={styles.imageContainer}>
<Image className={styles.image} src={aboutpic} alt="familypic"/>
<div className={styles.imageCaptionContainer}>
    <div className={styles.imageCaption}>
        <h2>12+</h2>
        <p>Blogs Published</p>
    </div>
    <div  className={styles.imageCaption}>
        <h2>18K+</h2>
        <p>Views on Finsweet</p>
    </div>   
    <div  className={styles.imageCaption}>
        <h2>30K+</h2>
        <p>Total active Users</p>
    </div>
</div>
</div>
<div className={styles.imageFooter} >
<div>
<p className={styles.tagline} >Our mision</p>
<h2>Creating valuable content for creatives all around the world</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div>
<p className={styles.tagline} >Our vision</p>
<h2>Creating valuable content for creatives all around the world</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</div>
    </div>
  }