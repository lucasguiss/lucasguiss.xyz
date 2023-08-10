<template>
    <div class="main-container">
        <img class="avatar" alt="Avatar" src="https://avatars.githubusercontent.com/u/37088202" />
        <div class="presentation">
            <h2>Lucas Guiss Gusmão </h2>
            <p>I am a Software Engineer based in Brazil
                <BrazilFlag />, with extensive experience in software development and system architecture.
                My career reflects my ability to provide creative and efficient solutions in dynamic development
                environments.
            </p>
            <div class="icons">
                <GithubIcon />
                <LinkedinIcon />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '#components'

const ICON_COLOR = '2E4F4F' as const
const GithubIcon = h(Icon, { name: 'uil:github', color: ICON_COLOR })
const LinkedinIcon = h(Icon, { name: 'uil:linkedin', color: ICON_COLOR })
const BrazilFlag = h(Icon, { name: '🇧🇷', size: '16' })

</script>
<style>
.main-container {
    display: flex;
    background-color: #CBE4DE;
    border-radius: 20px;
    width: 50%;
    height: 30%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

h2,
p {
    color: #2E4F4F;

}

h2 {
    margin-bottom: 5px;
    padding: 0;
}

p {
    margin-bottom: 5px;
    margin-top: 0;
}

.avatar {
    border-radius: 50%;
    max-width: 30%;
    height: 50%;
}

.icons {
    gap: 20px;
}

.presentation {
    display: flex;
    flex-direction: column;
}

@media (max-width: 768px) {
    .main-container {
        flex-direction: column;
        width: 80%;
        height: auto;
    }

    .avatar {
        max-width: 50%;
        height: auto;
    }

    .icons {
        gap: 10px;
    }
}

@media (max-width: 480px) {
    .main-container {
        padding: 10px;
    }

    .avatar {
        max-width: 60%;
        height: auto;
    }
}
</style>