<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="./../assets/logo.svg" width="60" height="60" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item">
        <a class="nav-link" href="http://localhost:8081/?genere=M">Uomo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:8081/?genere=F">Donna</a>
      </li>
    </ul>
  </div>
</nav>

</template>



<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data(){
    return{
        colore: 'rosso'
    }
  }
}
</script>
