//rcc: khởi tạo component
import React, { Component, Fragment } from 'react'

export default class HeaderRCC extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>

            // <Fragment>
            //     <header>
            //         <nav></nav>
            //     </header>
            //     <div></div>
            // </Fragment>
            // <div>
            //     <header>
            //         <nav></nav>
            //     </header>
            //     <div></div>
            // </div>
        )
    }
}

/**
 * ! Return của React là return về obje, nên chỉ cho phé return 1 obj jsx 
 * Muốn tạo các thẻ UI cùng cấp
 * C1: Sử dụng Fragment (đối tượng jsx/ component) => ko tạo dư thẻ trên Browser
 * C2: Dùng 1 thẻ div bao bọc các thẻ cùng cấp => sinh ra thẻ Div dư
 */