<script>
	import TeamCard from '../../components/TeamCard.svelte';
	import Carousel from './Carousel.svelte';

	const teamCards = [
		{
			image: 'about/Alonso.png',
			name: 'Alonso Ayala',
			text: 'Passionate about making real estate investing easy, transparent, and accessible.'
		},
		{
			image: 'about/Cesar.png',
			name: 'Alonso Ayala',
			text: 'Passionate about making real estate investing easy, transparent, and accessible.'
		},
		{
			image: 'about/Alonso.png',
			name: 'Alonso Ayala',
			text: 'Passionate about making real estate investing easy, transparent, and accessible.'
		}
	];

	const values = [
		{
			title: 'Integrity',
			text: 'We operate transparently and look to build trust through financial auditability.'
		},
		{
			title: 'Client Service',
			text: 'We make every effort to anticipate and adapt to our investor needs by delivering thoughtful and innovative solutions.'
		},
		{
			title: 'Discipline',
			text: 'Focused on long term fundamentals and follow a systematic, quantitative approach in our decision-making process.'
		}
	];

	const style = {
		wrapper: `flex flex-col w-full justify-center items-center gap-20`,
		wrapperContainer: `flex flex-col w-full items-center justify-center`,
		container: `flex flex-col lg:flex-row max-w-6xl p-6 justify-center`,
		valuesContainer: `flex flex-col max-w-2xl bg-gray-300 p-10 rounded-2xl justify-center items-center`,
		textContainer: `flex flex-col gap-4 text-center max-w-2xl lg:text-start`,
		titleItem: `flex items-center font-bold`,
		titleText: `text-2xl font-bold underline`,
		teamContainer: `flex flex-col gap-6 lg:flex-row p-6 justify-between max-w-6xl`,
		paragraph: ``,
		image: `h-full w-full object-cover shadow-lg`,
		processIcon: `w-50 h-50 aspect-1/1`,
		processText: `flex justify-between text-center w-[92%] pl-2 font-bold`,
		itemText: `text-daoblue`,
		itemdiv: `py-4 flex flex-col items-center`,
		iconContainer: `flex flex-col max-w-2xl gap-2`
	};
</script>

<div class={style.wrapper}>
	<div class=""></div>
	<div class={`${style.container} gap-6 items-center`}>
		<div class={style.textContainer}>
			<div class={`${style.titleText}`}>Our Mission</div>
			<div>
				To democratize, increase liquidity and give investors more control over their real estate
				investments through the tokenization of industrial and residential income producing
				properties.
			</div>
		</div>

		<div class={style.iconContainer}>
			<img class={style.processIcon} src="about/About US  - Mision.svg" alt="" />
			<div class={style.processText}>
				<div class={style.itemText}>US $1M</div>
				<div class={style.itemText}>Tokenization</div>
				<div class={style.itemText}>US $10k</div>
			</div>
		</div>
	</div>

	<div class={`${style.container}`}>
		<div class={style.valuesContainer}>
			<div class={style.titleText}>Our Values</div>

			{#each values as value}
				<div class={style.itemdiv}>
					<div class={style.titleItem}>{value.title}</div>
					<div class={style.paragraph}>
						{value.text}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class={`${style.wrapperContainer} py-6 bg-daogreen`}>
		<div class={style.titleText}>Our Partners</div>
		<Carousel
			logos={['about/banregio.png', 'about/Bitso.png', 'about/Jumio.png', 'about/Creel.png']}
		/>
	</div>

	<div class={`${style.wrapperContainer}`}>
		<div class={style.titleText}>The Team</div>
		<div class={style.teamContainer}>
			{#each teamCards as teamCard}
				<TeamCard image={teamCard.image} name={teamCard.name} text={teamCard.text} />
			{/each}
		</div>
	</div>
</div>
