import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="card border-secondary mb-3 centered" style={{maxWidth: '20rem', margin: '20px auto'}}>
            <div className="card-header">Welcome!!!</div>
            <div className="card-body">
                <h4 className="card-title">This is the home Page</h4>
                <p className="card-text">Aenean tellus velit, posuere at efficitur at, venenatis eget nulla. In posuere est in felis dignissim, id gravida risus tristique. Vivamus laoreet convallis quam, malesuada pretium metus tincidunt eu. Proin volutpat lorem massa, ut hendrerit eros elementum id. Nullam id efficitur ante. Cras consectetur imperdiet feugiat. Sed varius accumsan ex, id viverra mauris lobortis eget.</p>
            </div>
        </div>
    )
}