let ncols =  prompt("Enter the Number of Columns ")

document.write(`<table width="100%" border="1">
            <tr>`)

    for(let n=1; n<=ncols; n++)
    {
        document.write(`<td> ${n} </td>`)
    }

document.write(`</tr>
    </table>`)