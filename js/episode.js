
const urlParams = new URLSearchParams(window.location.search);
const animeIsim = urlParams.get('anime');
//const animeDetailsContainer = document.getElementById("anime-details");
const animePath = document.getElementById("top-path");
const animeName = document.getElementById("top-name");
const animeDescription = document.getElementById("desc");

// JSON dosyasını al
fetch("https://anistia-rest-api.capan.workers.dev/v1/animes")
  .then((response) => {
    if (!response.ok) {
      throw new Error("JSON dosyası yüklenemedi");
    }
    return response.json();
  })
  .then((episodes) => {
    const episode = episodes.find(e => e.isim === animeIsim);
    console.log(animeIsim)
    console.log(episodes)

    if (episode) {
      animePath.innerHTML = `
      <a href="list.html" class="path">Tüm Animeler</a> / ${episode.isim}
      `;
      animeName.innerHTML = `${episode.isim}`;
      animeDescription.innerHTML = `${(episode.aciklama)}`;
      console.log(episode)
    } else {
      animeName.innerHTML = "Anime bulunamadı";
    }
  })
  .catch((error) => console.error("Hata:", error));
