<header>
  <div class="container">
    <a href="/">
      <img src="/vite.svg" alt="" />
    </a>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Docs</a></li>
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  header {
    border-bottom: 1px solid lightgray;
  }

  header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 2rem;
    }

    nav {
      ul {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      ul li {
        display: flex;
      }

      ul li a {
        padding: 1rem;
      }
    }
  }
</style>
