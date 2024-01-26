import style from '@/assets/styles/home.module.css'
import { challenges } from '@/utils'
import Card from './Card'

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.container}>
        <header>
          <h1>Frontend Mentor Challenges</h1>
        </header>
        <div className={style.challenges}>
          <ul>
          {
            challenges.map((challenge,) => (
              <li key={challenge.id}>
               <Card challenge={challenge} id={challenge.id}/>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home