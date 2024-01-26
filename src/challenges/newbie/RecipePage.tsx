import style from '@/assets/styles/recipe-page.module.css';
import ImageOmelette from '@/assets/images/image-omelette.jpeg';

const RecipePage = () => {
	return (
		<div className={style.recipe_page}>
			<div className={style.container}>
				<header className={style.header}>
					<img className={style.image} src={ImageOmelette} alt='Omelette' />
				</header>
				<article className={style.content}>
					<h1 className={style.title}>Simple Omelette Recipe</h1>
					<p>
						An easy and quick dish, perfect for any meal. This classic
						omelette combines beaten eggs cooked to perfection,
						optionally filled with your choice of cheese, vegetables,
						or meats.
					</p>
					<aside className={style.preparation}>
						<h3 className={style.preparation_title}>Preparation time</h3>
						<ul className={style.list}>
							<li className={style.list_item}>
								<strong>Total:</strong> Approximately 10 minutes
							</li>
							<li className={style.list_item}>
								<strong>Preparation:</strong> 5 minutes
							</li>
							<li className={style.list_item}>
								<strong>Cooking:</strong> 5 minutes
							</li>
						</ul>
					</aside>
					<section className={style.section}>
						<h2 className={style.subtitle}>Ingredients</h2>
						<ul className={style.list}>
							<li className={style.list_item}>2-3 large eggs</li>
							<li className={style.list_item}>Salt, to taste</li>
							<li className={style.list_item}>Pepper, to taste</li>
							<li className={style.list_item}>1 tablespoon of butter or oil</li>
							<li className={style.list_item}>
								Optional fillings: cheese, diced vegetables, cooked
								meats, herbs
							</li>
						</ul>
					</section>
					<section className={style.section}>
						<h2 className={style.subtitle}>Instructions</h2>
						<ol className={style.list}>
							<li className={style.list_item}>
								<strong>Beat the eggs:</strong> In a bowl, beat the
								eggs with a pinch of salt and pepper until they are
								well combined. You can add a tablespoon of water or
								milk for a fluffier texture.
							</li>
							<li className={style.list_item}>
								<strong>Heat the pan:</strong> Place a non-stick
								frying pan over medium heat and add butter or oil.
							</li>
							<li className={style.list_item}>
								<strong>Cook the omelette:</strong> Once the butter is
								melted and bubbling, pour in the eggs. Tilt the pan to
								ensure the eggs evenly coat the surface.
							</li>
							<li className={style.list_item}>
								<strong>Add fillings (optional):</strong> When the
								eggs begin to set at the edges but are still slightly
								runny in the center, sprinkle your chosen fillings
								over half of the omelette.
							</li>
							<li className={style.list_item}>
								<strong>Fold and serve:</strong> As the omelette
								continues to cook, carefully lift one edge and fold it
								over the fillings. Let it cook for another minute,
								then slide it onto a plate.
							</li>
							<li className={style.list_item}>
								<strong>Enjoy:</strong> Serve hot, with additional
								salt and pepper if needed.
							</li>
						</ol>
					</section>
					<section style={{ border: 'none' }}>
						<h2 className={style.subtitle}>Nutrition</h2>
						<p>
							The table below shows nutritional values per serving
							without the additional fillings.
						</p>
						<div className={style.table}>
							<div className={style.table_row}>
								<div className={style.table_cell}>Calories</div>
								<div className={style.table_cell}>
									<strong>277kcal</strong>
								</div>
							</div>
							<div className={style.table_row}>
								<div className={style.table_cell}>Carbs</div>
								<div className={style.table_cell}>
									<strong>0g</strong>
								</div>
							</div>
							<div className={style.table_row}>
								<div className={style.table_cell}>Protein</div>
								<div className={style.table_cell}>
									<strong>20g</strong>
								</div>
							</div>
							<div className={style.table_row}>
								<div className={style.table_cell}>Fat</div>
								<div className={style.table_cell}>
									<strong>22g</strong>
								</div>
							</div>
						</div>
					</section>
				</article>
			</div>
		</div>
	);
};

export default RecipePage;
