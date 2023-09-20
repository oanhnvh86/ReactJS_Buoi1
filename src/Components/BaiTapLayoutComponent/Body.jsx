import React, { Component, Fragment } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
    render() {
        return (
            <section className='container'>
                <Banner />
                <div className="row">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </section>

        )
    }
}
