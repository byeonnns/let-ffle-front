<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner d-none d-lg-block mb-3">
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
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
          <div class="card mx-1 my-2 border-0">
            <img src="@/assets/tempImage/test1.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">테스트 렛플<br>대충 설명</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
          <div class="card mx-1 my-2 border-0">
            <img src="@/assets/tempImage/test1.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">테스트 렛플<br>대충 설명</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
          <div class="card mx-1 my-2 border-0">
            <img src="@/assets/tempImage/test1.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">테스트 렛플<br>대충 설명</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
          <div class="card mx-1 my-2 border-0">
            <img src="@/assets/tempImage/test1.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">테스트 렛플<br>대충 설명</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped></style>