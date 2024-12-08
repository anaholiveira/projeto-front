import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.titulo}> ˙⋆ Hanni 𐙚 ⋆˙ </h1>

      <div className={styles.fotos}>
        <div>
            <Image className={styles.img} src='/images/heart1.jpg' alt="Imagem 01" width={240} height={170} / >
        </div>

        <div>
          <Image className={styles.img} src='/images/gifhanni.gif' alt="Imagem 02" width={240} height={170} / >
        </div>

        <div>
          <Image className={styles.img} src='/images/heart2.jpg' alt="Imagem 03" width={240} height={170} / >
          </div>
      </div>

      <p className={styles.paragrafo}>Hanni (하니) é uma das integrantes do grupo de K-pop NewJeans. É uma das cantoras e dançarinas do grupo, ela tem chamado bastante atenção pela sua personalidade carismática, sua energia no palco e seu visual adorável.</p>

      <h2 className={styles.subtitulo}>˙⋆ O NewJeans ⋆˙</h2>

      <Image className={styles.imgnewjeans} src='/images/njpink.jpg' alt="Imagem NewJeans" width={590} height={280} / >

      <p className={styles.paragrafo}>NewJeans (hangul: 뉴진스) é um girl group sul-coreano formado pela ADOR, uma subsidiária da Hybe Corporation. O grupo é composto por cinco integrantes: Minji, <span className={styles.span}>Hanni</span>, Danielle, Haerin e Hyein. O grupo, conhecido por sua sonoridade fresca e influências da música pop dos anos 2000, rapidamente se destacou na cena do K-pop. O nome do fandom internacional é <span className={styles.span}>Bunnies</span>, que significa coelhos em inglês e pro fandom coreano é <span className={styles.span}>Tokki</span>, que também é coelho.</p>

    </div>
  );
}