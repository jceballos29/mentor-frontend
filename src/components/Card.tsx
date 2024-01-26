import style from '@/assets/styles/home.module.css'
import { Link } from 'react-router-dom';

interface CardProps {
  id: string,
	challenge: {
		title: string;
		description: string;
		image: string;
		path: string;
	};
}

const Card = ({ id, challenge }: CardProps) => {
	return (
		<Link to={challenge.path} key={id} className={style.challenge}>
			<figure className={style.challenge__image}>
				<img src={challenge.image} alt={challenge.title} />
			</figure>
		</Link>
	);
};

export default Card;
