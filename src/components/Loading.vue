<template>
    <div class="loader loaded">
        <div class="ball a"></div>
        <div class="ball b"></div>
        <div class="meter">
            <div class="fill" style="height: 100%;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="currentColor" d="M0,128L34.3,138.7C68.6,149,137,171,206,176C274.3,181,343,171,411,154.7C480,139,549,117,617,144C685.7,171,754,245,823,234.7C891.4,224,960,128,1029,106.7C1097.1,85,1166,139,1234,165.3C1302.9,192,1371,192,1406,192L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg></div>
            <span class="fill-text">文件导入中...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
    .loader {
        font-size: 25vmin;
        width: 1em;
        height: 1em;
        background-color: #21346e;
        border-radius: 1em;
        position: relative;
    }
    .loader::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 0.1rem solid #21346e;
        border-radius: inherit;
    }
    .loader.loaded::after {
        opacity: 0;
        border-color: #3d7af5;
        transform: scale(1.6);
        transition: opacity 0.6s ease, transform 0.6s ease-out;
    }
    .loader .meter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        overflow: hidden;
        animation: light 2s ease-in-out infinite alternate;
    }
    .loader .meter .fill {
        background-color: #3d7af5;
        width: 100%;
        height: 0%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 10;
        transform: translateY(1.5vh);
        filter: drop-shadow(0 0 1rem black);
        transition: height 0.2s linear;
    }
    .loader .meter .fill svg {
        color: #3d7af5;
        position: absolute;
        transform: translateY(calc(-100% + 1px));
        width: 200%;
        animation: waves 4s ease-in-out infinite alternate;
    }
    @keyframes waves {
        0% {
            left: -10%;
            top: 2vh;
        }
        50% {
            top: 0vh;
        }
        100% {
            left: -60%;
            top: 1vh;
        }
    }
    .loader .meter .fill-text {
        position: absolute;
        z-index: 15;
        top: 50%;
        left: 50%;
        font-size: 14px;
        transform: translate(-50%, -50%);
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 900;
        pointer-events: none;
    }
    .loader .ball {
        position: absolute;
        background-color: #21346e;
        top: 50%;
        left: 0;
        border-radius: inherit;
    }
    .loader .ball.a {
        width: 0.25em;
        height: 0.25em;
        transform-origin: 1.5em;
        animation: rotate-a 4s linear infinite;
    }
    .loader .ball.b {
        width: 0.3em;
        height: 0.3em;
        transform-origin: 1em;
        animation: rotate-b 7s linear reverse infinite;
    }
    @keyframes rotate-a {
        from {
            transform: translate(-1em, -50%) rotate(0deg);
        }
        to {
            transform: translate(-1em, -50%) rotate(360deg);
        }
    }
    @keyframes rotate-b {
        from {
            transform: translate(-0.5em, -50%) rotate(0deg);
        }
        to {
            transform: translate(-0.5em, -50%) rotate(360deg);
        }
    }
    .reload-button {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        border: 0;
        background-color: #21346e;
        font-family: monospace;
        color: rgba(15, 5, 20, 0.9);
        border-radius: 8px;
        padding: 1rem 2rem;
        box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.5);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        outline: none;
        font-weight: 900;
    }
    .reload-button:hover {
        background-color: #3d7af5;
        cursor: pointer;
        box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.5);
    }
    .reload-button:active {
        transform: translateY(0.5em);
    }

    .signature {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
    .signature a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #ffffff;
        font-family: monospace;
    }
    .signature img {
        height: 2rem;
        width: 2rem;
        margin-left: 1em;
        border-radius: 2rem;
    }
    @keyframes meter {
        from {
            box-shadow:0px 0px 4px #ffffff;
        }
        to {
            box-shadow:0px 0px 16px #ffffff;
        }
    }
</style>
