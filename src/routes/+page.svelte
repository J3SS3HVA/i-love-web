<script>
    import { onMount } from 'svelte';
    import { Me } from '$lib'
    export let data = data;
    export let person = data.person;

</script>


<Me {person} />

<section class="about-me">
    <div class="about-me-container">
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
    </div>
</section>

<style>

    p, li{
        font-size: 1.5rem;
        list-style: unset;
    }

    .about-me{
        background-color: var(--primary-color);
        padding: 20px 0;
    }

    .about-me-container{
        margin: 0 300px;
    }

    .about-me h2{
        margin-bottom: 20px;
        border-bottom: 5px solid var(--primary-color);
        width: fit-content;
    }

    .about-me section h3{
        margin: 20px 0;
    }

    .about-me h2,
    .about-me h3,
    .about-me p,
    .about-me li{
        color: #1a1a1a;
    }
    
</style>