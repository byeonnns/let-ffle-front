<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide container mb-4 d-none d-lg-block">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner mb-3">
        <div class="carousel-item active">
          <img src="@/assets/tempImage/Kith.webp" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/tempImage/Perverze.webp" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/tempImage/samsung.webp" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <RaffleMain/>
    <!-- Todo : 임시로 해놓음 컴포넌트화 할 것인지? -->
  </div>
</template>

<script setup>
import RaffleMain from "./Raffle/Main"
</script>

<style scoped></style>