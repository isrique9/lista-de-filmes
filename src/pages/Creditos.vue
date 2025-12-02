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

    <section class="favoritos-fixos">
      <h2 class="subtitulo">Filmes favoritos do Israel 🎬</h2>

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
        <a href="https://www.instagram.com/ei.rik_/" target="_blank" class="btn instagram">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://github.com/isrique9" target="_blank" class="btn github">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/israel-henrique-068a33334/" target="_blank" class="btn linkedin">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>

  </main>
</template>

<style scoped>
.creditos-container {
  padding: 20px;
  margin: 0 auto;
  color: #fff;
  max-width: 768px;
  width: 100%;
}

/* PRIMEIRA SESSÃO — SOBRE MIM */
.sobre-mim {
  text-align: center;
  margin-bottom: 25px;
}

.titulo {
  font-size: 21px;
  margin-bottom: 4px;
}

.destaque {
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0 0 8px rgba(255,255,255,0.2);
}

.tempo {
  margin-top: 10px;
  font-size: 16px;
}

.tempo span {
  font-weight: bold;
}

/* SEGUNDA SESSÃO — FILMES */
.favoritos-fixos {
  margin-top: 30px;
  width: 100%;
  background: #383838;
  border-radius: 12px;
}

.subtitulo {
  font-size: 21px;
  margin-bottom: 14px;
  text-align: center;
}

/* GRID RESPONSIVO */
.lista-filmes {
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
  justify-content: center;
  width: 100%;
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

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
  color: #fff;
}

.btn i {
  font-size: 20px;
}

/* Estilos específicos para cada rede */
.instagram {
  background: linear-gradient(45deg, #feda75, #d62976, #962fbf, #4f5bd5);
}

.github {
  background: #333;
}

.linkedin {
  background: #0077b5;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px rgba(255,255,255,0.4);
}

/* SUPER RESPONSIVO */
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
}
</style>
