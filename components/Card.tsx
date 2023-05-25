
import { CardInterface } from "../src/types"
import Badge from "./Badge"
import Button from "./Button"
import styles from './Card.module.css'

const Card = ({body,btn0,btn,title,badge,image,indicator, subtitle, ani}: CardInterface) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
      {indicator &&
        <small className={styles.indicator}>{indicator}</small>
      }
      {badge &&
        <Badge text={badge.text} filled={badge.filled} />
      }
      {image &&
        <img src={image} alt="Random Image" className={styles.image} />
      }
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle &&
          <small className={styles.subtitle}>{subtitle}</small>
        }
      </div>
      <p className={styles.body}>{body}</p>
     <div>{ani.animation0}</div>
      <div className={styles.rowC}>
        <Button 
          filled={btn0.filled}
          type={btn0.type}
          text={btn0.text}
          href={btn0.href}
          icon={btn0.icon}
        />
        <span>&nbsp;&nbsp;</span>
        <Button
          filled={btn.filled}
          type={btn.type}
          text={btn.text}
          href={btn.href}
          icon={btn.icon}
        />
      </div>
    </article>
  )
}
export default Card