  <script>
    import SignUp from "../../components/forms/SignUp.svelte"

    const style = {
        wrapper: "p-6 w-full h-full flex",
        containerLeft: "flex flex-col w-full md:w-1/2 p-6",
        containerRight: "hidden md:block flex w-1/2 rounded-2xl",
        leftarrow: "h-5 w-5",
        titleItem: `flex items-center`,
        titleText: `text-2xl`,
        image: `h-full w-full object-cover shadow-lg`
    }
  </script>



<div class={style.wrapper}>
    <div class={style.containerLeft}>
    <div class={style.titleItem}>

        <a href="/">
        <svg class={style.leftarrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17.17 24a1 1 0 0 1-.71-.29l-8.17-8.17a5 5 0 0 1 0-7.08L16.46.29a1 1 0 1 1 1.42 1.42L9.71 9.88a3 3 0 0 0 0 4.24l8.17 8.17a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z"/>
        </svg> 
        </a>
        <div class={style.titleText}>Sign Up</div>
        </div>
        <SignUp/>
    </div>
    <div class={style.containerRight} style="background-image: url('https://cdn.pixabay.com/photo/2016/08/30/13/23/efaflex-1630741_1280.jpg')">
        <!-- <img class={style.image} src="https://cdn.pixabay.com/photo/2016/08/30/13/23/efaflex-1630741_1280.jpg" alt=""> -->
    </div>
</div>