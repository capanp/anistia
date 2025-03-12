// JSON dosyasını al
fetch("https://anistia-rest-api.capan.workers.dev/v1/animes")
  .then((response) => {
    if (!response.ok) {
      throw new Error("JSON dosyası yüklenemedi");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // Global değişken olarak window.animeEpisodes'a atama yap
    window.animeEpisodes = data.naruto;

    if (animeEpisodes) {
      let i = 1;
      console.log(i)
      console.log(i <= animeEpisodes.length)
      console.log(animeEpisodes.length)
      console.log("uie")
      for (let i = 1; i <= animeEpisodes.length; i++) {
        // Yeni bir div oluştur ve container içine ekle
        $('.bolumler').append(`<li class="bolum-buttons">${i}. Bölüm</li>`);
        console.log(i+"bolum")
      }
    } else {
      console.log("bölüm yok.")
    }
  })
  .catch((error) => console.error("Hata:", error));