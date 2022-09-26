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
    