import React, { Component } from 'react'

export default class CardComponent extends Component {

    //Thuộc tính của lớp đối tượng (Attribute of Class)
    moTa = "Khach hàng 1";

    //anfn: arrow function 
    //Tạo duoc arrow cho phương thức trong react
    showInfo = () => { 
        console.log(this.moTa); //alert = consol, ko dùng kí tự binding cho thuộc tính. Chỉ dùng kí tự binding cho thuộc tính khi show thuộc tính đó trên UI
        alert(this.moTa); //alert = consol, ko dùng kí tự binding cho thuộc tính. Chỉ dùng kí tự binding cho thuộc tính khi show thuộc tính đó trên UI
     }

    //nfn
    showInfo2 = (name) => { 
        alert(name);
     }

    //Method render (phuong thức render)
    render() {
        let fullName = "Nguyen Vu Hoang Oanh"; //biến của phương thức -> biến cục bộ

        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{fullName}</h5>
                    <p className="card-text">{this.moTa}</p>
                    <button onClick={this.showInfo} className="btn btn-primary">Show Info</button>
                    {/* goi ngay khi load trang 
                    <button onClick={this.showInfo2(fullName)} className="btn btn-primary">Show Info 2</button>  
                    */}
                    {/* gọi khi click  */}
                    <button onClick={()=>{
                        this.showInfo2(fullName)
                        }} className="btn btn-primary">Show Info 2</button>  
                </div>
            </div>
        )
    }
}

/**
 * biding data: đưa giá trị của biến vào UI
 * ES6: `${fullName}`
 * REACT: {fullName}: ko sử dụng DOM (VÌ UI là jsx) => data binding để đưa dữ liệu lên UI {TÊN BIẾN}
 * {} : dấu binding
 * 
 * Phương thức:
    ES6: arrow function hạn chế dùng cho phương thức
    REACT: dùng ok
 */