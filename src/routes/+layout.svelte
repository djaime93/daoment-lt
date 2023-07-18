<script>
    import Nav from "../components/Nav.svelte"
    import Footer from "../components/Footer.svelte"
</script>

<Nav/>
<slot></slot>
<Footer/>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @font-face {
        font-family: "RenoMono";
        src: url("/fonts/renomono/RenoMono.otf");
    }
    @font-face {
        font-family: "NeueMachina";
        src: url("/fonts/neuemachina/NeueMachina-Regular.otf");
    }
</style>
<svelte:head>
    <title>Daoment - Democratized Real Estate Investing</title>
    <!-- <meta name="description" content="Democratized Real Estate Investing"> -->
    <!-- <meta itemprop="image" content=""> -->

    <meta name="title" content="Daoment - Democratized Industrial Real Estate Investing">
    <meta name="description" content="Daoment revolutionizes industrial real estate investing by providing a platform that democratizes access to this lucrative sector. Explore a new era of investment opportunities in industrial real estate, where individuals from all backgrounds can participate and prosper. Leveraging cutting-edge technology and industry expertise, Daoment empowers you to unlock the untapped potential of the industrial real estate market. Join Daoment today and transform your investment portfolio with diverse, accessible, and profitable industrial real estate investments.">
    <meta name="keywords" content="Daoment, industrial real estate investing, democratized access, investment platform, diverse investment opportunities, accessible investing, profitable investments, industrial real estate market, cutting-edge technology, industry expertise">
</svelte:head>
    