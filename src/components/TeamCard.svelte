<script>
	export let image;
	export let name;
	export let text;

	let style = {
		card: `flex flex-col justify-center items-center gap-6 p-6`,
		imageContainer: ``,
		image: `h-40 object-cover rounded-xl aspect-square`,
		name: `font-bold`,
		text: ``
	};
</script>

<div class={style.card}>
	<div class={style.imageContainer}><img class={style.image} src={image} alt="" /></div>
	<div class={style.name}>{name}</div>
	<div class={style.text}>{text}</div>
</div>
