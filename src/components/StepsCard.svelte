<script>
    export let content;

    const style = {
        card: `flex flex-col p-5 rounded-2xl bg-white h-full justify-center items-center max-w-sm border border-[#0030C9]`,
        cardLogo: `w-1/2 flex items-center justify-center`,
        cardTitle: `text-center text-2xl font-normal`,
        cardItem: `h-full text-center`,
        container: ``,
        image: `h-40`,
    }
</script>

<div class={style.card}>
    <div class={style.cardLogo}>
        <img class={style.image} alt="Earn" src={content.image} />
    </div>
    <div class={style.cardTitle}>
        {content.title}
    </div>
    <div class={style.cardItem}>
        {content.info}
    </div>
</div>