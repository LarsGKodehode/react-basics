// To avoid leakage of css classes into the global scope, we can make use of something from Vite called CSS Modules

// This is done by having a CSS file and adding the *.module.css as a file extenstion
// Them we can import a JavaScript object from that file which we are using instead of hardcoding the className prop
import styles from './layout.module.css'

// Uncomment the console log to see what we are actually importing
// console.log(styles)

function StyledCSSModules() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Look at me</h2>
      <p className={styles.text}>I'm Stylish!</p>
   </div>
  )
}

export default StyledCSSModules