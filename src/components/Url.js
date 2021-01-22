import React from "react";
import { ChampionGraph } from "../pages/ChampionGraph";
import { Home } from "../pages/Home";
import { Test } from "../pages/Test";

const Url = {
  "/": () => <Home />,
  "/test": () => <Test />,
  "/Aatrox": () => <ChampionGraph />,
  "/Ahri": () => <ChampionGraph />,
  "/Akali": () => <ChampionGraph />,
  "/Alistar": () => <ChampionGraph />,
  "/Amumu": () => <ChampionGraph />,
  "/Anivia": () => <ChampionGraph />,
  "/Annie": () => <ChampionGraph />,
  "/Aphelios": () => <ChampionGraph />,
  "/Ashe": () => <ChampionGraph />,
  "/Aurelion Sol": () => <ChampionGraph />,
  "/Azir": () => <ChampionGraph />,
  "/Bard": () => <ChampionGraph />,
  "/Blitzcrank": () => <ChampionGraph />,
  "/Brand": () => <ChampionGraph />,
  "/Braum": () => <ChampionGraph />,
  "/Caitlyn": () => <ChampionGraph />,
  "/Camille": () => <ChampionGraph />,
  "/Cassiopeia": () => <ChampionGraph />,
  "/Cho'Gath": () => <ChampionGraph />,
  "/Corki": () => <ChampionGraph />,
  "/Darius": () => <ChampionGraph />,
  "/Diana": () => <ChampionGraph />,
  "/Dr. Mundo": () => <ChampionGraph />,
  "/Draven": () => <ChampionGraph />,
  "/Ekko": () => <ChampionGraph />,
  "/Elise": () => <ChampionGraph />,
  "/Evelynn": () => <ChampionGraph />,
  "/Ezreal": () => <ChampionGraph />,
  "/Fiddlesticks": () => <ChampionGraph />,
  "/Fiora": () => <ChampionGraph />,
  "/Fizz": () => <ChampionGraph />,
  "/Galio": () => <ChampionGraph />,
  "/Gangplank": () => <ChampionGraph />,
  "/Garen": () => <ChampionGraph />,
  "/Gnar": () => <ChampionGraph />,
  "/Gragas": () => <ChampionGraph />,
  "/Graves": () => <ChampionGraph />,
  "/Hecarim": () => <ChampionGraph />,
  "/Heimerdinger": () => <ChampionGraph />,
  "/Illaoi": () => <ChampionGraph />,
  "/Irelia": () => <ChampionGraph />,
  "/Ivern": () => <ChampionGraph />,
  "/Janna": () => <ChampionGraph />,
  "/Jarvan IV": () => <ChampionGraph />,
  "/Jax": () => <ChampionGraph />,
  "/Jayce": () => <ChampionGraph />,
  "/Jhin": () => <ChampionGraph />,
  "/Jinx": () => <ChampionGraph />,
  "/Kai'Sa": () => <ChampionGraph />,
  "/Kalista": () => <ChampionGraph />,
  "/Karma": () => <ChampionGraph />,
  "/Karthus": () => <ChampionGraph />,
  "/Kassadin": () => <ChampionGraph />,
  "/Katarina": () => <ChampionGraph />,
  "/Kayle": () => <ChampionGraph />,
  "/Kayn": () => <ChampionGraph />,
  "/Kennen": () => <ChampionGraph />,
  "/Kha'Zix": () => <ChampionGraph />,
  "/Kindred": () => <ChampionGraph />,
  "/Kled": () => <ChampionGraph />,
  "/Kled & Skaarl": () => <ChampionGraph />,
  "/Kog'Maw": () => <ChampionGraph />,
  "/LeBlanc": () => <ChampionGraph />,
  "/Lee Sin": () => <ChampionGraph />,
  "/Leona": () => <ChampionGraph />,
  "/Lillia": () => <ChampionGraph />,
  "/Lissandra": () => <ChampionGraph />,
  "/Lucian": () => <ChampionGraph />,
  "/Lulu": () => <ChampionGraph />,
  "/Lux": () => <ChampionGraph />,
  "/Malphite": () => <ChampionGraph />,
  "/Malzahar": () => <ChampionGraph />,
  "/Maokai": () => <ChampionGraph />,
  "/Master Yi": () => <ChampionGraph />,
  "/Mega Gnar": () => <ChampionGraph />,
  "/Miss Fortune": () => <ChampionGraph />,
  "/Mordekaiser": () => <ChampionGraph />,
  "/Morgana": () => <ChampionGraph />,
  "/Nami": () => <ChampionGraph />,
  "/Nasus": () => <ChampionGraph />,
  "/Nautilus": () => <ChampionGraph />,
  "/Neeko": () => <ChampionGraph />,
  "/Nidalee": () => <ChampionGraph />,
  "/Nocturne": () => <ChampionGraph />,
  "/Nunu & Willump": () => <ChampionGraph />,
  "/Olaf": () => <ChampionGraph />,
  "/Orianna": () => <ChampionGraph />,
  "/Ornn": () => <ChampionGraph />,
  "/Pantheon": () => <ChampionGraph />,
  "/Poppy": () => <ChampionGraph />,
  "/Pyke": () => <ChampionGraph />,
  "/Qiyana": () => <ChampionGraph />,
  "/Quinn": () => <ChampionGraph />,
  "/Rakan": () => <ChampionGraph />,
  "/Rammus": () => <ChampionGraph />,
  "/Rek'Sai": () => <ChampionGraph />,
  "/Renekton": () => <ChampionGraph />,
  "/Rengar": () => <ChampionGraph />,
  "/Riven": () => <ChampionGraph />,
  "/Rumble": () => <ChampionGraph />,
  "/Ryze": () => <ChampionGraph />,
  "/Samira": () => <ChampionGraph />,
  "/Sejuani": () => <ChampionGraph />,
  "/Senna": () => <ChampionGraph />,
  "/Seraphine": () => <ChampionGraph />,
  "/Sett": () => <ChampionGraph />,
  "/Shaco": () => <ChampionGraph />,
  "/Shen": () => <ChampionGraph />,
  "/Shyvana": () => <ChampionGraph />,
  "/Singed": () => <ChampionGraph />,
  "/Sion": () => <ChampionGraph />,
  "/Sivir": () => <ChampionGraph />,
  "/Skarner": () => <ChampionGraph />,
  "/Sona": () => <ChampionGraph />,
  "/Soraka": () => <ChampionGraph />,
  "/Swain": () => <ChampionGraph />,
  "/Sylas": () => <ChampionGraph />,
  "/Syndra": () => <ChampionGraph />,
  "/Tahm Kench": () => <ChampionGraph />,
  "/Taliyah": () => <ChampionGraph />,
  "/Talon": () => <ChampionGraph />,
  "/Taric": () => <ChampionGraph />,
  "/Teemo": () => <ChampionGraph />,
  "/Thresh": () => <ChampionGraph />,
  "/Tristana": () => <ChampionGraph />,
  "/Trundle": () => <ChampionGraph />,
  "/Tryndamere": () => <ChampionGraph />,
  "/Twisted Fate": () => <ChampionGraph />,
  "/Twitch": () => <ChampionGraph />,
  "/Udyr": () => <ChampionGraph />,
  "/Urgot": () => <ChampionGraph />,
  "/Varus": () => <ChampionGraph />,
  "/Vayne": () => <ChampionGraph />,
  "/Veigar": () => <ChampionGraph />,
  "/Vel'Koz": () => <ChampionGraph />,
  "/Vi": () => <ChampionGraph />,
  "/Viktor": () => <ChampionGraph />,
  "/Vladimir": () => <ChampionGraph />,
  "/Volibear": () => <ChampionGraph />,
  "/Warwick": () => <ChampionGraph />,
  "/Wukong": () => <ChampionGraph />,
  "/Xayah": () => <ChampionGraph />,
  "/Xerath": () => <ChampionGraph />,
  "/Xin Zhao": () => <ChampionGraph />,
  "/Yasuo": () => <ChampionGraph />,
  "/Yone": () => <ChampionGraph />,
  "/Yorick": () => <ChampionGraph />,
  "/Yuumi": () => <ChampionGraph />,
  "/Zac": () => <ChampionGraph />,
  "/Zed": () => <ChampionGraph />,
  "/Ziggs": () => <ChampionGraph />,
  "/Zilean": () => <ChampionGraph />,
  "/Zoe": () => <ChampionGraph />,
  "/Zyra": () => <ChampionGraph />,
};

export default Url;