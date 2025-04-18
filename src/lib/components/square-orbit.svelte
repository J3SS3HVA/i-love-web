<script>

</script>

<section>
<div class="box">
    <div class="square1">
        <div class="core"></div>
    </div>
    <div class="square2">
        <div class="core"></div>
    </div>
</div>
</section>

<style>
    section {
        position: absolute;
        top: 0;
        right: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: var(--primary-orange);
        z-index: -1;
    }

    .box {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .square1, .square2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background-color: transparent;
        animation: rotate 10s linear infinite;
    }

    .square1 {
        border: 5px solid var(--primary-color);
        animation: configure-clockwise 3s ease-in-out 0s infinite alternate;;
    }

    .square2 {
        border: 5px solid var(--secondary-color);
        transform: translate(-50%, -50%) rotate(45deg); /* Add rotation */
        animation: configure-clockwise-reverse 3s ease-in-out 0s infinite alternate;
    }

    @keyframes configure-clockwise {
        0% {
            transform: translate(-50%, -50%) rotate(0);
        }
        25% {
            transform: translate(-50%, -50%) rotate(90deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(180deg);
        }
        75% {
            transform: translate(-50%, -50%) rotate(270deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    @keyframes configure-clockwise-reverse {
        0% {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        25% {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(-135deg);
        }
        75% {
            transform: translate(-50%, -50%) rotate(-225deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-315deg);
        }
    }
</style>