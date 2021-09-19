<template>
  <header>
    <div class="container">
      <img alt="logo zé" src="../assets/logo_dark.svg" class="logo" />
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about" class="btn btn--secondary">login</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss">
header {
  display: flex;
  padding: 0.475rem 1rem;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  align-items: center;
  z-index: 999;

  p {
    margin-left: 1rem;
  }
  > .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
  }
  .logo {
    height: 60px;
  }
}

nav {
  margin-left: auto;

  ul li {
    display: inline-flex;
    margin-left: 1rem;
    a {
      color: $secondary;
      font-weight: 600;
      &:hover {
        color: $secondary;
      }
    }
  }
}
</style>
