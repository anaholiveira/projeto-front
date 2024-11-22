import styles from "./carreira.module.css";

const Carreira = () => {
    return (
        <main>
            <h1 className={styles.titulo}>˙⋆ Carreira ⋆˙</h1>

            <div>
                <p className={styles.paragrafo}>Em 2019, Hanni fez parte de um grupo cover australiano de K-pop chamado AEMINA. Em outubro de 2019, passou no Plus Global Auditions e tornou-se trainee em 2020. Mais tarde, foi revelado que ela era a única membro que passou dessas audições.</p>
                <p className={styles.paragrafo}>Hanni foi revelada como membro do novo grupo feminino da ADOR, NewJeans, em 21 de julho de 2022. Posteriormente, estreou em 1º de agosto de 2022 com o miniálbum "New Jeans".</p>
            </div>

            <h2 className={styles.subtitulo}>˙⋆ Covers de músicas (série By JEANS no YouTube) ⋆˙</h2>
            
            <div className={styles.videos}>
                <div className={styles.vdoleg}>

                <iframe className={styles.iframe} src="https://www.youtube.com/embed/RdHR1cZZUR0?si=sjWlIJA-um8wPxiN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <p className={styles.legenda}>Once in a Moon - Sarah Kang</p>
                </div>
                

                <div className={styles.vdoleg}>
                <iframe className={styles.iframe} src="https://www.youtube.com/embed/x3INFYk0z68?si=dBqKN0KNFhX9izsn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <p className={styles.legenda}>DIVE - Olivia Dean </p>
                </div>

                <div className={styles.vdoleg}>
                <iframe className={styles.iframe} src="https://www.youtube.com/embed/qyNIxxJ1FWU?si=TOTrjEILHkPsBw4q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <p className={styles.legenda}>Best Part -Daniel Caesar & H.E.R </p>
                </div>
                
            </div>

        </main>
    );
}

export default Carreira;