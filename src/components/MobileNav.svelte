<script>
    let menuOpen = false

    let hiddenLines = `hidden`

    function toggleMenu() {
        this.menuOpen = !this.menuOpen
        console.log(this.menuOpen)
    }

    let style = {
        wrapper: `md:hidden`,
        container: `absolute top-0 z-10 w-12 h-12 right-3`,
        menuLines: `inline-block w-8 h-0.5 absolute rounded-sm bg-daoblue`
    }
</script>

<div class={style.wrapper}>
   <div on:click={toggleMenu} class={style.container}>
    <span class={`${style.menuLines} top-7`}></span>
    <span class={`${style.menuLines} duration-500 top-9`}></span>
    <span class={`${style.menuLines} duration-500 top-9`}></span>
    <span class={`${style.menuLines} top-11`}></span>
   </div> 
   <!-- <div on:click={toggleMenu} class="absolute top-0 z-10 w-12 h-12 right-3">
    <span class="inline-block w-8 h-0.5 absolute rounded-sm top-7 bg-daoblue hidden"></span>
    <span class="duration-500 inline-block w-8 h-0.5 absolute rounded-sm top-9 bg-daoblue -rotate-45 bg-green-400"></span>
    <span class="duration-500 inline-block w-8 h-0.5 absolute rounded-sm top-9 bg-daoblue rotate-45 bg-green-400"></span>
    <span class="inline-block w-8 h-0.5 absolute rounded-sm top-11 bg-daoblue hidden"></span>
   </div>
   
   <div class="absolute top-0 right-0 w-48 overflow-hidden h-96 border border-black">
    <div class="absolute flex flex-col justify-between w-48 transition duration-500 bg-daoblue border border-black h-96 -right-100">
        <nav class="self-center"></nav>
        <div class="flex flex-col"></div>
    </div>
   </div> -->
</div>