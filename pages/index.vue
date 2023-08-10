<template>
    <div class="main-container">
        <img class="avatar" src="https://avatars.githubusercontent.com/u/37088202" />
        <div class="presentation">
            <h2>Lucas Guiss Gusmão</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo labore unde ad quam vel mollitia cum, blanditiis est non aperiam vitae esse, vero eaque neque doloribus fugiat iusto rem repellat.</p>
            <div class="icons">
                <Icon name="uil:github" color="2E4F4F" size=24 />
                <Icon name="uil:linkedin" color="2E4F4F" size=24 />
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">

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
    gap: 2%;
}

h2, p {
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
</style>