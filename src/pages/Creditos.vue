<script setup>
import MovieCard from '../components/MovieCard.vue'

// Seus 3 filmes fixos
const filmesFixos = [
  {
    titulo: "Irmão Urso",
    ano: "2003",
    nota: "10",
    comentario: "Cinema 🙌"
  },
  {
    titulo: "Como treinar seu dragão.",
    ano: "2010",
    nota: "9",
    comentario: "Todos os filmes são perfeitos e poucas."
  },
  {
    titulo: "Atlantis: O Reino Perdido",
    ano: "2001",
    nota: "8",
    comentario: "É bom em tudo o que promete."
  }
]
</script>

<template>
  <main class="creditos-container">

    <!-- Créditos -->
    <section class="sobre-mim">
      <h1 class="titulo">Desenvolvido por:</h1>
      <p class="destaque">Israel Henrique</p>

      <p class="tempo">
        Tempo até "finalizar" o projeto:
        <span>7 horas e 15 minutos</span>
      </p>
    </section>

    <!-- Meus 3 Films Favoritos (fixos) -->
    <section class="favoritos-fixos">
      <h2 class="subtitulo">Meus 3 Filmes Favoritos 🎬</h2>

      <div class="lista-filmes">
        <MovieCard
          v-for="(f, index) in filmesFixos"
          :key="index"
          :posicao="index"
          :titulo="f.titulo"
          :ano="f.ano"
          :nota="f.nota"
          :comentario="f.comentario"
        />
      </div>
    </section>

    <!-- Contatos -->
    <section class="contato">
      <h2 class="subtitulo">Meios de Contato</h2>

      <div class="links">
        <a href="https://www.instagram.com/ei.rik_/" target="_blank">Instagram</a>
        <a href="https://github.com/isrique9" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/israel-henrique-068a33334/" target="_blank">LinkedIn</a>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* Container geral */
.creditos-container {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  color: #fff;
}

/* PRIMEIRA SESSÃO — SOBRE MIM */
.sobre-mim {
  text-align: center;
  margin-bottom: 25px;
}

.titulo {
  font-size: 24px;
  margin-bottom: 4px;
}

.destaque {
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 0 8px rgba(255,255,255,0.2);
}

.tempo {
  margin-top: 10px;
  font-size: 16px;
}

.tempo span {
  font-weight: bold;
  color: #ccc;
}

/* SEGUNDA SESSÃO — FILMES */
.favoritos-fixos {
  margin-top: 30px;
}

.subtitulo {
  font-size: 22px;
  margin-bottom: 14px;
  text-align: center;
}

/* GRID RESPONSIVO */
.lista-filmes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
}

/* TERCEIRA SESSÃO — CONTATOS */
.contato {
  margin-top: 35px;
  text-align: center;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

.links a {
  color: #66b2ff;
  text-decoration: none;
  font-size: 18px;
  transition: 0.2s;
}

.links a:hover {
  color: #fff;
  text-shadow: 0 0 10px #66b2ff;
}

/* SUPER RESPONSIVO — telas MUITO pequenas (250px–350px) */
@media (max-width: 350px) {
  .titulo {
    font-size: 20px;
  }

  .destaque {
    font-size: 24px;
  }

  .subtitulo {
    font-size: 18px;
  }

  .lista-filmes {
    grid-template-columns: 1fr;
  }
}
</style>
