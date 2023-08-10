<template>
    <div class="main-container">
        <div class="presentation">
            <div class="info">
                <div class="title">
                    <img class="avatar" alt="Avatar" src="https://avatars.githubusercontent.com/u/37088202" />
                    <div class="asd">
                        <p>Lucas Guiss Gusmão </p>
                        <p>Software Engineer @ROIT </p>
                    </div>
                </div>
                <p class="description">I am a Software Engineer based in Brazil with extensive experience in software
                    development and system architecture.
                    My career reflects my ability to provide creative and efficient solutions in dynamic development
                    environments.
                </p>
                <div class="icons">
                    <NuxtLink to="https://www.github.com/lucasguiss" target="_blank"> <GithubIcon /> </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/lucasguissgusmao" target="_blank"> <LinkedinIcon /> </NuxtLink>
                </div>
            </div>
            <div>
                <NuxtLink class="contact" to="/contact">Contact <ArrowIcon/> </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '#components'

const ICON_COLOR = 'F2F4F7' as const
const GithubIcon = h(Icon, { name: 'uil:github', color: ICON_COLOR })
const LinkedinIcon = h(Icon, { name: 'uil:linkedin', color: ICON_COLOR })
const ArrowIcon = h(Icon, { name: 'ic:baseline-arrow-outward', color: ICON_COLOR, size: '1.25rem'})

</script>
<style>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20rem;
    margin-right: 20rem;
}

p {
    margin: 0;
}

.avatar {
    border-radius: 50%;
    max-width: 10%;
    height: 10%;
}

.icons {
    gap: 0.5rem;
    margin-top: 1.6rem;
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    gap: 2rem;
    margin-bottom: 1.6rem;
}

.presentation {
    display: flex;
    flex-direction: column;
    gap: 7rem;
    margin-top: 7rem;
}

.description {
    font-size: 4.3rem;
}

.contact {
    text-decoration: underline;
    color: inherit;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 150%;
}

@media (max-width: 1200px) {
    .main-container {
        margin-left: 10rem;
        margin-right: 10rem;
    }
}

@media (max-width: 992px) {
    .main-container {
        margin-left: 5rem;
        margin-right: 5rem;
    }
    
    .title {
        font-size: 1.2rem;
    }
    
    .presentation {
        gap: 4rem;
        margin-top: 4rem;
    }
}

@media (max-width: 768px) {
    .main-container {
        flex-direction: column;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    .avatar {
        max-width: 20%;
        height: auto;
    }

    .icons {
        margin-top: 1rem;
    }

    .title {
        font-size: 1.1rem;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .presentation {
        gap: 3rem;
        margin-top: 3rem;
    }

    .description {
        font-size: 3rem;
    }
}
</style>