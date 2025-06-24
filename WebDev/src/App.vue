<script>
import Home from './components/Home.vue'
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import TaskManager from './components/TaskManager.vue';

const routes = {
  '/': Home,
  '/login': Login,
  '/signup': Signup,
  '/taskmanager': TaskManager,
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>



<template>

  <div id="app">
    <Login />
    <TaskManager />
  </div>

  <div class="wrapper">
    <header class="header">
      <!--<div id="pages"> 
        <a href="#/">Home</a> |
        <a href="#/login">Login</a> |
        <a href="#/signup">Signup</a> |
        <a href="#/taskmanager">TaskManager</a>
      </div>-->

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Nicolas C. Garzon</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true" href="#/signup">Signup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true" href="#/taskmanager">Projects</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </header>

    <article class="main">
      <component :is="currentView" />
    </article>
    <aside class="aside aside-1">Aside 1</aside>
    <aside class="aside aside-2">Aside 2</aside>
    <footer class="footer">
      <p><a href="#/">Home</a></p>
      <p><a href="#/login">Login</a></p>
      <p><a href="#/signup">Signup</a></p>
      <p><a href="#/taskmanager">Projects</a></p>
      Website created by Nicolas C. Garzon
    </footer>
  </div>

</template>



<style>
#app {
  align-items: center;
  padding-left: 0%;
}



.wrapper {
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
}

.wrapper>* {
  padding: 10px;
  flex: 1 100%;
}

.header {
  background: white;
}

.footer {
  background: #616161;
}

.main {
  text-align: left;
  background: #F2F2F2;
}

.aside-1 {
  background: #F2F2F2;
}

.aside-2 {
  background: #F2F2F2;
}

@media all and (min-width: 600px) {
  .aside {
    flex: 1 0 0;
  }
}

@media all and (min-width: 800px) {
  .main {
    flex: 3 0px;
  }

  .aside-1 {
    order: 1;
  }

  .main {
    order: 2;
  }

  .aside-2 {
    order: 3;
  }

  .footer {
    order: 4;
  }
}

body {
  padding: 0em;
}
</style>