<script>
  const style = {
    navItem: ``
  }
</script>

<div class="flex flex-col absolute p-6 h-screen w-full z-20 bg-daoblue text-white">
  <button class="w-full flex justify-end">
    
    <!-- <img class="h-10" src="icons/cross.svg" alt=""> -->
  
    <svg class="h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
      <path d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"/>
    </svg>
  </button>
  <div class="flex flex-col">
    <a class={style.navItem} href="/">Home</a>
    <a class={style.navItem} href="/about">About</a>
    <a class={style.navItem} href="/faqs">FAQs</a>
    <a class={style.navItem} href="/marketplace">Marketplace</a>
  </div>
</div>