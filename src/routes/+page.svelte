<script>
    import StepsCard from "../components/StepsCard.svelte";
    import DaomentReitSvg from "../components/svgs/DaomentReitSVG.svelte";
    import LineChart from "../components/charts/LineChart.svelte";
    import BarChart from "../components/charts/BarChart.svelte";
    import BarChartMin from "../components/charts/BarChartMin.svelte";
    import HorizontalBarChart from "../components/charts/HorizontalBarChart.svelte";
    import Register from "../components/forms/Register.svelte"

    const style = {
        wrapper: `flex flex-col w-full justify-center items-center text-gray-500 gap-20`,
        banner: `flex h-80 rounded-2xl my-4 w-full`,
        container: ``,
        hero: ``,
        heroImage: `h-30 w-30`,
        stepImage: `h-40`,
    }

</script>

<div class={style.wrapper}>

    <div class="w-full h-full max-w-7xl sm:p-6 mt-5">
        <div class="w-full relative sm:rounded-2xl overflow-hidden h-[80vh] sm:max-h-[50rem] bg-cover bg-center">
            <div class="w-full h-full top-0 left-0 absolute opacity-80 bg-gradient-to-br from-[#D1EFCB] via-[#071F25] to-[#071E26]"></div>
            <div class="w-full h-full flex absolute top-0 left-0 justify-center items-start px-4 flex-col">

                <div class="flex w-full"><DaomentReitSvg/></div>
                <a class="py-3 px-6 ml-8 bg-daoblue text-white font-semibold rounded-lg mt-4" href="/signup">Sign Up</a>
            </div>
            <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2019/08/15/17/56/production-4408573_960_720.jpg" alt="">
        </div>
    </div>

    <div class="w-full h-full py-10 sm:px-6 max-w-7xl">
                <div class="text-4xl pb-6 font-reno font-bold text-daoblue text-center">A New Way To Invest</div>
        <div class="flex flex-col sm:flex-row w-full justify-between items-center gap-6">
            <div class="flex flex-col sm:w-1/2 pb-6">
                <div class="flex flex-col items-center">
                    <img class="aspect-square" src="/images/ilustracion.png" alt="">
                </div>
            </div>
            <div class="flex flex-col divide-y-2 divide-gray-200 sm:w-1/2 px-4 sm:px-0">
                <div class="pb-3 text-xl">Get exclusive access to commercial and residential real estate deals</div>
                <div class="py-3 text-xl">Earn monthly rental distributions</div>
                <div class="py-3 text-xl">Accessible ticket prices</div>
                <div class="py-3 text-xl">Increased liquidity through a global market</div>
                <div class="pt-3 text-xl">Transparent management and distributions through blockchain</div>
            </div>
        </div>
    </div>

    <div class="w-full h-full py-6 sm:px-6 max-w-7xl">
        <div class="flex flex-col w-full lg:h-80 relative sm:rounded-2xl bg-gray-100 items-center py-10 gap-5">
            <div class="text-4xl font-bold font-reno font-bold text-daoblue">How It Works</div>
            <div class="lg:absolute lg:bottom-0 lg:left-0 lg:transform lg:translate-y-1/3 grid lg:grid-cols-3 w-full justify-center items-center gap-4 px-4 sm:px-10">
                
                <StepsCard content={{image:"/images/Buy.svg",
                                    title:"Buy",
                                    info:"Buy equity shares of hand picked real estate deals, open to both accredited and non-accredited investors."}}/>

                <StepsCard content={{image:"/images/Earn.svg",
                                    title:"Earn",
                                    info:"Recieve monthly rental distributions and accrue apreciation as the value of the asset goes up over time."}}/>

                <StepsCard content={{image:"/images/Trade.svg",
                                    title:"Trade",
                                    info:"Exit your position without lockups or holding periods. Sell your shares to a global market in a global platform."}}/>

            </div>
        </div>
        <div class="hidden lg:block h-40"></div>
    </div>

    <div class="w-full h-full flex flex-col justify-center items-center p-2">

            <div class="text-4xl font-bold font-reno font-bold text-daoblue">Why Invest in Real Estate?</div>
    <div class="w-full h-full py-6 sm:px-6 max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10">
        <div class="flex flex-col gap-3 lg:w-1/2 pb-10 text-center lg:text-start">
            <div class="flex flex-col divide-y-2 divide-gray-200">
                <div class="text-xl pb-3">Best Performing Asset Class During the Last 20 Years</div>
                <div class="text-xl py-3">Volatility and Inflation Hedge</div>
                <div class="text-xl py-3">Earn Passive Income Plus Land Appreciation</div>
                <div class="text-xl pt-3">Leverage to Build Wealth</div>
            </div>
        </div>

        <div class="lg:w-2/3">
        <div class="text-center text-xl font-reno font-bold">20-year annualized returns by asset class</div>
        <div class="hidden sm:block">
            <BarChart/>
        </div>
        
        <div class="sm:hidden">
        <BarChartMin/>
        </div>
        <!-- <HorizontalBarChart/> -->
        <!-- <LineChart/> -->
        <div class="text-end text-xs pt-2">Source: (1999-2018) J.P. Morgan Asset Management</div>
        </div>
    </div>
    </div>

    <!-- <div class="flex flex-col justify-center items-center w-full">
        <div class="text-4xl font-semibold text-daoblue">Get notifications about our first tokenized property</div>
        <div class="w-full flex pt-20 pb-20 justify-center items-center gap-6">
            <div><input class="rounded-xl border border-daoblue focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2" type="text" placeholder="Email"></div>
            <button class="border border-daoblue text-daoblue hover:bg-daoblue hover:text-white rounded-xl px-4 py-2">Sign Up</button>
        </div>

    </div> -->

    <Register/>
</div>