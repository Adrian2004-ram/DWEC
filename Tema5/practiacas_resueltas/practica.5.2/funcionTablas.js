let dibujarTabla = (nFilas = 10, nColumnas = 4, color = "black") => {

    let html = `<table style="border-collapse:collapse;border:3px solid ${color};width:100%;">`;

    for (let i = 0; i < nFilas; i++) {

        html += `<tr>`;

        for (let j = 0; j < nColumnas; j++) {

            html += `<td style="border:1px solid ${color}">&nbsp;</td>`;

        }

        html += `</tr>`;

    }

    html += `</table>`;

    document.write(html);

}