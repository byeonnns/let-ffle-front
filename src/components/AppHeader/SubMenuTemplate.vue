<template>
<div>
    <nav class="navbar navbar-expand bg-body-white">
        <ul class="navbar-nav nav-underline">
            <li class="nav-item">
                <!-- slot -->
                <slot name="menu1"></slot>
            </li>
            <li class="nav-item">
                <slot name="menu2"></slot>
            </li>
            <li class="nav-item">
                <slot name="menu3"></slot>
            </li>
            <li class="nav-item">
                <slot name="menu4"></slot>
            </li>
        </ul>
    </nav>
</div>
</template>

<script setup>
</script>

<style scoped>
</style>