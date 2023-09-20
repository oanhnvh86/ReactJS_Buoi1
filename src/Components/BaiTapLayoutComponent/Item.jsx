import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="col-lg-4 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                            {/* <i className="bi bi-cloud-download"></i> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg> */}
                            <i class="fa-solid fa-cloud-arrow-down"></i>
                        </div>
                        <h2 className="fs-4 fw-bold">Free to download</h2>
                        <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>
            </div>

        )
    }
}
