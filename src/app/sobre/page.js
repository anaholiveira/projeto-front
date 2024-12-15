import styles from "./sobre.module.css";
import Image from "next/image";

export default function Sobre() {
    return (
        <main>
            <h1 className={styles.titulo}>˙⋆ Sobre Hanni ⋆˙</h1>

            <div className={styles.fotos}>
                <div>
                    <Image className={styles.img} src='/images/foto1.jpg' alt="Imagem 01" width={240} height={160} / >
                </div>

                <div>
                    <Image className={styles.img} src='/images/foto2.jpg' alt="Imagem 02" width={240} height={160} / >
                </div>

                <div>
                    <Image className={styles.img} src='/images/foto3.jpg' alt="Imagem 03" width={240} height={160} / >
                </div>
            </div>


            <p className={styles.paragrafo}>Hanni nasceu em 6 de outubro de 2004, em Melbourne, Victoria, Austrália, em uma família de descendência vietnamita. Hanni tem uma irmã mais nova, Jasmine, nascida em 2007, também em Melbourne.</p>

            <p className={styles.paragrafo}>Desde jovem, Hanni demonstrou grande interesse por música e dança, áreas nas quais recebeu forte apoio de seus pais. Esse incentivo ajudou a moldar sua carreira artística, permitindo-lhe explorar seu talento e se destacar em sua jornada. Sua herança vietnamita e o ambiente multicultural da Austrália moldaram uma identidade única.</p>

            <h2 className={styles.subtitulo}>˙⋆ Características ⋆˙</h2>

            <p className={styles.paragrafo}>Hanni é carinhosa, entusiástica e sempre transmite energia positiva. Ela tem um sorriso contagiante, mas também é focada e dedicada, especialmente nas suas performances. Como INFP, Hanni é sensível, criativa e empática. Ela busca autenticidade e deseja uma carreira que a alinhe com suas paixões e valores, sendo leal e compreensiva com os outros.</p>

            <div>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th colSpan="2" className={styles.th}>˙⋆ Informações Pessoais ⋆˙</th>
                        </tr>
                    </thead>

                    <tbody className={styles.tbody}>
                        <tr className={styles.tr}>
                            <td className={styles.infos}>Nome Completo</td>
                            <td className={styles.td}>Hanni Thi Pham</td>
                        </tr>

                        <tr className={styles.tr}>
                            <td className={styles.infos}>Nome artístico</td>
                            <td className={styles.td}>Hanni</td>
                        </tr>

                        <tr className={styles.tr}>
                            <td className={styles.infos}>Data de nascimento</td>
                            <td className={styles.td}>6 de outubro de 2004</td>
                        </tr>

                        <tr className={styles.tr}>
                            <td className={styles.infos}>Nacionalidade</td>
                            <td className={styles.td}>Vietnamita-Australiana</td>
                        </tr>

                        <tr className={styles.tr}>
                            <td className={styles.infos}>Altura</td>
                            <td className={styles.td}>Aproximadamente 1,64m</td>
                        </tr>

                        <tr className={styles.tr}>
                            <td className={styles.infos}>Tipo sanguíneo</td>
                            <td className={styles.td}>B</td>
                        </tr>

                        <tr className={styles.tr}>
                            <td className={styles.infos}>MBTI</td>
                            <td className={styles.td}>INFP</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </main>
    );
}
