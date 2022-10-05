<script>
    const style = {
        wrapper: `flex w-full h-full justify-center items-center text-[#0030C9]`,
        container: ` flex w-full h-full justify-between items-center`,
        footerLogoContainer: `py-4 px-6 w-1/2 h-full`,
        footerInfoContainer: `py-4 px-6 w-1/2 h-full flex flex-col sm:flex-row items-start justify-between gap-4`,
        // wrapper: ``,
        logoContainer: `flex h-full justify-start items-start`,
        logo: `h-36`,
        logoText: ``,
        menuCol: `flex flex-col`,
        menuHeading: ``,
        menuItem: `text-gray-500`,
    }
</script>

<div class={style.wrapper}>
    <div class={style.container}>
        <div class={style.footerLogoContainer}>
            <div class="flex items-center w-full h-full flex-col sm:flex-row gap-10">
                <div class={style.logoContainer}>
                    <a href="/"><img class={style.logo} src="/images/DAOMENT-SELLO-CMYK-2.svg" alt="" /></a>
                    <!-- <a href="/"><img class={style.logo} src="/images/IconoNegro.png" alt="" /></a> -->
                </div>
            </div>

        </div>
        <div class={style.footerInfoContainer}>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Navigation</div>
                <a class={style.menuItem} href="/">Home</a>
                <a class={style.menuItem} href="/">About Us</a>
                <a class={style.menuItem} href="/">FAQs</a>
            </div>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Services</div>
                <a class={style.menuItem} href="/">Marketplace</a>
            </div>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Contact Us</div>
                <a class={style.menuItem} href="mailto:info@daoment.io">info@daoment.io</a>
                <a class={style.menuItem} href="tel:+52-81-1911-7718">+52 (81) 1911 7718</a>
            </div>
        </div>
    </div>
</div>