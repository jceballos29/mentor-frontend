import style from '@/assets/styles/style.module.css';
import ImageOmelette from '@/assets/images/image-omelette.jpeg';

function App() {

  return (
    <div className={style.recipe_page}>
			<div className={style.container}>
				<header>
					<img src={ImageOmelette} alt='Omelette' />
				</header>
				<div className={style.content}>
					<h1>Simple Omelette Recipe</h1>
					<p>
						An easy and quick dish, perfect for any meal. This classic
						omelette combines beaten eggs cooked to perfection,
						optionally filled with your choice of cheese, vegetables,
						or meats.
					</p>
					<aside>
						<h3>Preparation time</h3>
						<ul>
							<li>
								<strong>Total:</strong> Approximately 10 minutes
							</li>
							<li>
								<strong>Preparation:</strong> 5 minutes
							</li>
							<li>
								<strong>Cooking:</strong> 5 minutes
							</li>
						</ul>
					</aside>
					<section>
						<h2>Ingredients</h2>
						<ul>
							<li>2-3 large eggs</li>
							<li>Salt, to taste</li>
							<li>Pepper, to taste</li>
							<li>1 tablespoon of butter or oil</li>
							<li>
								Optional fillings: cheese, diced vegetables, cooked meats, herbs
							</li>
						</ul>
					</section>
					<section>
						<h2>Instructions</h2>
						<ol>
							<li>
								<strong>Beat the eggs:</strong> In a bowl, beat the
								eggs with a pinch of salt and pepper until they are
								well combined. You can add a tablespoon of water or
								milk for a fluffier texture.
							</li>
							<li>
								<strong>Heat the pan:</strong> Place a non-stick
								frying pan over medium heat and add butter or oil.
							</li>
							<li>
								<strong>Cook the omelette:</strong> Once the butter is
								melted and bubbling, pour in the eggs. Tilt the pan to
								ensure the eggs evenly coat the surface.
							</li>
							<li>
								<strong>Add fillings (optional):</strong> When the
								eggs begin to set at the edges but are still slightly
								runny in the center, sprinkle your chosen fillings
								over half of the omelette.
							</li>
							<li>
								<strong>Fold and serve:</strong> As the omelette
								continues to cook, carefully lift one edge and fold it
								over the fillings. Let it cook for another minute,
								then slide it onto a plate.
							</li>
							<li>
								<strong>Enjoy:</strong> Serve hot, with additional
								salt and pepper if needed.
							</li>
						</ol>
					</section>
					<section style={{ border: 'none' }}>
						<h2>Nutrition</h2>
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
				</div>
			</div>
		</div>
  )
}

export default App
