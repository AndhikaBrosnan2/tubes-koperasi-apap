import React, {Component} from "react";

class ListPinjamanComponent extends Component{
    render() {
        return (
            <div className="container">
                <h3>All Anggota</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tanggal Pengajuan</th>
                            <th>Tanggal Disetujui</th>
                            <th>Tanggal Pengembalian</th>
                            <th>Jumlah Pinjaman</th>
                            <th>Jumlah Pengembalian</th>
                            <th>status</th>
                            <th>Id Anggota</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>1 Januari 2020</td>
                            <td>2 Januari 2020</td>
                            <td>5 Januari 2020</td>
                            <td>4</td>
                            <td>4</td>
                            <td>true</td>
                            <td>123456156</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }

}
export default ListPinjamanComponent