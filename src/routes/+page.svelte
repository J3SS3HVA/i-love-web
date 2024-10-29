<script>
    import { onMount } from 'svelte';
    import { Me } from '$lib'
    export let data = data;
    export let person = data.person;

</script>


<Me {person} />

<section class="about-me">
    <h2>Welkom bij mijn Portfolio</h2>
    <section>
        <h3>Laat ik mij als eerst zelf eens even voorstellen</h3>
        <p>Ik ben dus Jesse. Bij het maken van dit portfolio ben ik momenteel 21-22 jaar oud. Ik ben een student van het Hva en studeer bij de opleiding Ad Front-End & Design

            Mijn goal binnen mijn opleiding is om het af te sluiten met een diploma, zodat ik uiteindelijk een mooie baan kan vinden in het gebied van front-end
        </p>
        <h3>Wat vind je hier in mijn portfolio?</h3>
        <ul>
            <li>More About me</li>
            <li>Vaardigheden</li>
            <li>Journal</li>
            <li>We Love Web</li>
            <li>Projecten die ik in deze 2 jaar heb gemaakt.</li>
        </ul>
    </section>
</section>

<style>

    p, li{
        font-size: 1.5em;
        list-style: unset;
    }

    .about-me{
        margin: 0 23em;
    }

    .about-me h2{
        margin-bottom: 2em;
        border-bottom: 5px solid var(--primary-color);
        width: fit-content;
    }

    .about-me section h3{
        margin: 1em 0;
    }
    
</style>