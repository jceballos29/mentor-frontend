import style from '@/assets/styles/social-links-profile.module.css'
import avatar from '@/assets/images/avatar-jessica.jpeg'

const SocialLinksProfile = () => {

  const links = [
    {
      id: 1,
      name: 'GitHub',
    },
    {
      id: 2,
      name: 'Frontend Mentor',
    },
    {
      id: 3,
      name: 'LinkedIn',
    },
    {
      id: 4,
      name: 'Twitter',
    },
    {
      id: 5,
      name: 'Instagram',
    }
  ]

  return (
    <div className={style.social_links_profile}>
      <div className={style.profile_card}>
        <img className={style.avatar} src={avatar} alt="Jessica Randall" />
        <h1 className={style.name}>Jessica Randall</h1>
        <h2 className={style.location}>London, United Kingdom</h2>
        <p className={style.title}>"Front-end developer and avid reader"</p>
        <ul className={style.links}>
          {links.map(link => (
            <li className={style.link} key={link.id}>
                {link.name}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default SocialLinksProfile