import { link } from './link.js';

export function ubah() {
            let id = 3;
            let data = {
                pelanggan: 'emil cantik banget',
                alamat: 'jauh banget',
                telp: '4825412721'
            };
            link.put('/pelanggan/' + id, data).then(res => {
                console.log(res)
                let tampil = `<h1>${res.data.pesan}</h1> `;
                document.querySelector("#out").innerHTML = tampil;
            });
        }